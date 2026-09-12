'use client';
import {useMemo,useState} from 'react';
import {AlertTriangle,ArrowRight,BookOpen,CheckCircle2,Search,Sigma,X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {knowledgeModules,type KnowledgePoint} from '@/lib/knowledge';
import FormulaExperiment from '@/components/formula-experiment';

function KnowledgeCard({point,moduleTitle,onOpenLesson}:{point:KnowledgePoint;moduleTitle:string;onOpenLesson:(id:number)=>void}){
  return <article className="knowledge-card">
    <div className="knowledge-card-head"><div><span className="knowledge-module-tag">{moduleTitle}</span><h3>{point.title}</h3></div><Sigma size={18}/></div>
    <p className="knowledge-summary">{point.summary}</p>
    <div className="formula-list" aria-label={`${point.title}公式`}>
      {point.formulas.map(formula=><div className="formula-row" key={formula.expression}><code>{formula.expression}</code><span>{formula.note}</span></div>)}
    </div>
    {point.condition&&<div className="knowledge-note condition-note"><CheckCircle2 size={15}/><p><strong>适用条件</strong>{point.condition}</p></div>}
    <div className="knowledge-note pitfall-note"><AlertTriangle size={15}/><p><strong>易错提醒</strong>{point.pitfall}</p></div>
    {point.example&&<p className="knowledge-example"><span>例</span>{point.example}</p>}
    <div className="knowledge-card-foot"><div>{point.keywords.map(keyword=><span key={keyword}>#{keyword}</span>)}</div>{point.relatedLesson&&<Button variant="ghost" onClick={()=>onOpenLesson(point.relatedLesson!)}>进入实验 {String(point.relatedLesson).padStart(2,'0')}<ArrowRight size={14}/></Button>}</div>
  </article>;
}

export default function KnowledgeCenter({onOpenLesson}:{onOpenLesson:(id:number)=>void}){
  const [moduleId,setModuleId]=useState(knowledgeModules[0].id),[query,setQuery]=useState('');
  const normalized=query.trim().toLowerCase();
  const selected=knowledgeModules.find(module=>module.id===moduleId)!;
  const results=useMemo(()=>{
    if(!normalized)return selected.points.map(point=>({point,moduleTitle:selected.title}));
    return knowledgeModules.flatMap(module=>module.points.filter(point=>[point.title,point.summary,point.pitfall,...point.keywords,...point.formulas.flatMap(formula=>[formula.expression,formula.note])].join(' ').toLowerCase().includes(normalized)).map(point=>({point,moduleTitle:module.title})));
  },[normalized,selected]);
  const formulaCount=knowledgeModules.reduce((sum,module)=>sum+module.points.reduce((n,point)=>n+point.formulas.length,0),0);
  return <main className="knowledge-center">
    <section className="knowledge-hero"><div><p className="eyebrow">HIGH SCHOOL MATHEMATICS · 知识与公式</p><h1>高中数学知识库</h1><p>按模块梳理核心结论、公式条件与易错点；遇到空间问题，还能直接进入交互实验。</p></div><div className="knowledge-stats"><div><strong>{knowledgeModules.length}</strong><span>知识模块</span></div><div><strong>{knowledgeModules.reduce((sum,module)=>sum+module.points.length,0)}</strong><span>核心知识点</span></div><div><strong>{formulaCount}</strong><span>常用公式</span></div></div></section>
    <div className="knowledge-search"><Search size={18}/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="搜索知识点、公式或关键词，例如：判别式、截面、条件概率" aria-label="搜索高中数学知识库"/>{query&&<button onClick={()=>setQuery('')} aria-label="清空搜索"><X size={16}/></button>}</div>
    <div className="knowledge-layout">
      <aside className="module-nav" aria-label="知识模块"><p>知识模块</p>{knowledgeModules.map(module=><button key={module.id} className={!normalized&&module.id===moduleId?'active':''} onClick={()=>{setQuery('');setModuleId(module.id);}}><span>{module.index}</span><div><strong>{module.title}</strong><small>{module.subtitle} · {module.points.length} 节</small></div></button>)}</aside>
      <section className="knowledge-content">
        <div className="knowledge-section-head"><div><span>{normalized?'SEARCH RESULTS':selected.index+' / '+selected.subtitle}</span><h2>{normalized?`“${query.trim()}”的搜索结果`:selected.title}</h2><p>{normalized?`跨 9 个模块找到 ${results.length} 个相关知识点。`:selected.description}</p></div>{!normalized&&<BookOpen size={27}/>}</div>
        {!normalized&&<FormulaExperiment key={selected.id} moduleId={selected.id}/>} 
        {!normalized&&<div className="knowledge-reference-title"><span>公式与知识卡片</span><p>完成上方实验后，用卡片核对公式条件、易错点与典型结论。</p></div>}
        {results.length?<div className="knowledge-grid">{results.map(({point,moduleTitle})=><KnowledgeCard key={point.id} point={point} moduleTitle={moduleTitle} onOpenLesson={onOpenLesson}/>)}</div>:<div className="knowledge-empty"><Search size={28}/><h3>没有找到相关知识点</h3><p>可以尝试更短的关键词，例如“函数”“面积”或“概率”。</p><Button variant="outline" onClick={()=>setQuery('')}>查看当前模块</Button></div>}
      </section>
    </div>
    <footer className="knowledge-footer"><span>高中数学知识库 · 公式只有结合条件才成立</span><span>持续从知识点回到图像、推导与问题情境。</span></footer>
  </main>;
}
