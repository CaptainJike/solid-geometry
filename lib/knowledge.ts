export type Formula = { expression: string; note: string };

export type KnowledgePoint = {
  id: string;
  title: string;
  keywords: string[];
  summary: string;
  formulas: Formula[];
  condition?: string;
  pitfall: string;
  example?: string;
  relatedLesson?: number;
};

export type KnowledgeModule = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  points: KnowledgePoint[];
};

export const knowledgeModules: KnowledgeModule[] = [
  {
    id: 'sets', index: '01', title: '集合与逻辑', subtitle: '语言与规则',
    description: '从集合关系、命题到充分必要条件，建立数学表达的基础语言。',
    points: [
      {id:'set-operations',title:'集合的基本运算',keywords:['集合','交集','并集','补集'],summary:'交集取共同元素，并集汇总所有元素；补集必须先明确全集。',formulas:[{expression:'A ∩ B = {x | x∈A 且 x∈B}',note:'交集'},{expression:'A ∪ B = {x | x∈A 或 x∈B}',note:'并集'},{expression:'n(A∪B)=n(A)+n(B)−n(A∩B)',note:'有限集合计数'}],condition:'讨论补集 CᵤA 时，全集 U 必须明确。',pitfall:'“或”包含两者同时成立的情形；区间端点是否取得要看不等号。',example:'A={1,2,3}，B={2,3,4}，则 A∩B={2,3}。'},
      {id:'logic',title:'命题与量词',keywords:['命题','全称量词','存在量词','否定'],summary:'否定全称命题要改为存在命题，否定存在命题要改为全称命题。',formulas:[{expression:'¬(∀x, p(x)) ⇔ ∃x, ¬p(x)',note:'全称命题的否定'},{expression:'¬(∃x, p(x)) ⇔ ∀x, ¬p(x)',note:'存在命题的否定'}],pitfall:'命题否定不是简单删掉“所有”；量词和结论都要同时改变。',example:'“所有实数 x 都满足 x²≥0”的否定是“存在实数 x 使 x²<0”。'},
      {id:'conditions',title:'充分条件与必要条件',keywords:['充分条件','必要条件','充要条件','推出'],summary:'p⇒q 时，p 是 q 的充分条件，q 是 p 的必要条件；双向推出才是充要条件。',formulas:[{expression:'p ⇒ q',note:'p 充分，q 必要'},{expression:'p ⇔ q',note:'p 与 q 互为充要条件'}],pitfall:'判断“谁是谁的条件”时容易把方向说反，先写出推出箭头。',example:'x=2 是 x²=4 的充分不必要条件。'},
      {id:'inequalities',title:'基本不等式',keywords:['不等式','均值不等式','最值'],summary:'正数的算术平均数不小于几何平均数，常用于积或和固定时求最值。',formulas:[{expression:'a+b ≥ 2√(ab)',note:'a>0，b>0'},{expression:'(a+b)/2 ≥ √(ab)',note:'等号当且仅当 a=b'}],condition:'变量必须为正；使用前要检查定值条件与等号能否取得。',pitfall:'只写出不等式却不验证等号条件，不能完整说明最值可以取得。',example:'x>0 时，x+4/x≥4，等号在 x=2 取得。'}
    ]
  },
  {
    id: 'functions', index: '02', title: '函数与方程', subtitle: '变化与对应',
    description: '研究定义域、图像、单调性、奇偶性，以及指数、对数和二次函数。',
    points: [
      {id:'function-properties',title:'函数的三要素与性质',keywords:['函数','定义域','值域','单调性','奇偶性'],summary:'函数由定义域、对应关系和值域决定；图像性质是解题的统一入口。',formulas:[{expression:'f(−x)=f(x)',note:'偶函数，图像关于 y 轴对称'},{expression:'f(−x)=−f(x)',note:'奇函数，图像关于原点对称'}],condition:'讨论奇偶性前，定义域必须关于原点对称。',pitfall:'同一解析式在不同定义域上可能不是同一个函数。',example:'f(x)=x³−x 是奇函数。'},
      {id:'quadratic',title:'二次函数与一元二次方程',keywords:['二次函数','判别式','韦达定理','抛物线'],summary:'配方决定顶点与最值，判别式决定实根个数，韦达定理连接根与系数。',formulas:[{expression:'Δ=b²−4ac',note:'判别式'},{expression:'x₁+x₂=−b/a，x₁x₂=c/a',note:'韦达定理'},{expression:'y=a(x+b/2a)²−Δ/4a',note:'配方形式'}],condition:'a≠0；韦达定理中的 x₁、x₂ 是方程 ax²+bx+c=0 的两根。',pitfall:'最值方向由 a 的正负决定，且区间最值还要检查端点。',example:'x²−5x+6=0 的两根和为 5，积为 6。'},
      {id:'exponential-log',title:'指数与对数',keywords:['指数','对数','换底公式','指数函数'],summary:'指数与对数互为逆运算；底数范围决定函数的单调方向。',formulas:[{expression:'aᵐ·aⁿ=aᵐ⁺ⁿ',note:'同底数幂相乘'},{expression:'logₐ(MN)=logₐM+logₐN',note:'积的对数'},{expression:'logₐb=log꜀b/log꜀a',note:'换底公式'}],condition:'a>0 且 a≠1；对数真数必须大于 0。',pitfall:'logₐ(M+N) 不能拆成两个对数之和。',example:'log₂8+log₂4=3+2=5。'},
      {id:'function-zero',title:'函数零点与方程',keywords:['零点','方程','二分法','连续函数'],summary:'方程 f(x)=0 的实根就是函数 y=f(x) 的零点，可用图像和单调性判断数量。',formulas:[{expression:'f(a)f(b)<0 ⇒ (a,b) 内至少有一个零点',note:'连续函数零点存在性'}],condition:'f(x) 在闭区间 [a,b] 上连续；要保证唯一还需额外证明单调性。',pitfall:'端点异号只能保证至少一个零点，不能直接推出恰有一个。',example:'f(x)=x³+x−1 在 (0,1) 内有且仅有一个零点。'}
    ]
  },
  {
    id: 'trigonometry', index: '03', title: '三角函数', subtitle: '角与周期',
    description: '统一角、边和周期变化，掌握恒等变换与三角形求解。',
    points: [
      {id:'trig-basic',title:'同角三角函数关系',keywords:['三角函数','正弦','余弦','正切'],summary:'单位圆把任意角的正弦、余弦转化为点的坐标。',formulas:[{expression:'sin²α+cos²α=1',note:'平方关系'},{expression:'tanα=sinα/cosα',note:'商数关系'}],condition:'正切公式要求 cosα≠0。',pitfall:'由 sin²α 求 cosα 时有正负两个方向，要结合象限判断。',example:'若 sinα=3/5 且 α 为第二象限角，则 cosα=−4/5。'},
      {id:'trig-transform',title:'和差角与倍角公式',keywords:['和差角','倍角公式','辅助角'],summary:'和差角公式是三角恒等变换的核心，辅助角公式可把正余弦线性组合化为单一函数。',formulas:[{expression:'sin(α±β)=sinαcosβ±cosαsinβ',note:'正弦和差角'},{expression:'cos(α±β)=cosαcosβ∓sinαsinβ',note:'余弦和差角'},{expression:'sin2α=2sinαcosα',note:'二倍角'}],pitfall:'余弦和差角公式中间符号与括号内符号相反。',example:'sin75°=sin(45°+30°)=(√6+√2)/4。'},
      {id:'trig-graph',title:'正弦型函数图像',keywords:['三角函数图像','周期','振幅','相位'],summary:'A 控制振幅，ω 控制周期，φ 控制相位平移。',formulas:[{expression:'y=A sin(ωx+φ)+b',note:'正弦型函数'},{expression:'T=2π/|ω|',note:'最小正周期'},{expression:'x=−φ/ω',note:'相位参考点'}],condition:'A≠0，ω≠0。',pitfall:'水平平移量是 −φ/ω，不是简单的 −φ。',example:'y=2sin(2x−π/3) 的振幅为 2，周期为 π。'},
      {id:'triangle-solving',title:'正弦定理与余弦定理',keywords:['解三角形','正弦定理','余弦定理','面积'],summary:'已知边角关系时用正弦定理，三边或两边夹角问题优先用余弦定理。',formulas:[{expression:'a/sinA=b/sinB=c/sinC=2R',note:'正弦定理'},{expression:'a²=b²+c²−2bc cosA',note:'余弦定理'},{expression:'S=½bc sinA',note:'三角形面积'}],pitfall:'用正弦定理求角可能出现两解，需要结合三角形内角和判断。',example:'b=3，c=4，A=90°，则 a=5，面积为 6。'}
    ]
  },
  {
    id: 'vectors', index: '04', title: '平面向量', subtitle: '方向与运算',
    description: '用坐标和代数运算表达长度、方向、平行、垂直与投影。',
    points: [
      {id:'vector-linear',title:'向量的线性运算',keywords:['向量','坐标运算','线性运算'],summary:'向量加减按坐标分量进行，数乘同时改变长度和可能的方向。',formulas:[{expression:'a±b=(x₁±x₂, y₁±y₂)',note:'坐标加减'},{expression:'λa=(λx, λy)',note:'数乘'},{expression:'|a|=√(x²+y²)',note:'向量的模'}],pitfall:'向量有方向，|a| 是标量；两者不能直接混用。',example:'a=(1,2)，b=(3,−1)，则 a+b=(4,1)。'},
      {id:'vector-dot',title:'数量积与夹角',keywords:['数量积','夹角','垂直','投影'],summary:'数量积把向量的几何夹角转化为坐标计算。',formulas:[{expression:'a·b=x₁x₂+y₁y₂',note:'坐标公式'},{expression:'a·b=|a||b|cosθ',note:'几何定义'},{expression:'a⊥b ⇔ a·b=0',note:'非零向量垂直'}],condition:'用夹角公式时 a、b 都必须是非零向量。',pitfall:'a·b=0 可能包含零向量；表述两向量垂直时通常先说明非零。',example:'(1,2)·(2,−1)=0，所以两非零向量垂直。'},
      {id:'vector-parallel',title:'共线与定比分点',keywords:['共线','平行','定比分点'],summary:'两个非零向量平行等价于坐标成比例，定比分点可用向量线性组合表示。',formulas:[{expression:'a∥b ⇔ x₁y₂−x₂y₁=0',note:'平行判定'},{expression:'P=(A+λB)/(1+λ)',note:'AP:PB=λ:1，内分点'}],condition:'定比分点公式要求 λ≠−1。',pitfall:'坐标成比例时要避免直接除以可能为零的分量，优先使用交叉相乘。',example:'A(0,0)，B(6,3)，AP:PB=1:2，则 P(2,1)。'}
    ]
  },
  {
    id: 'sequences', index: '05', title: '数列', subtitle: '离散的规律',
    description: '围绕通项、递推和前 n 项和，识别等差、等比及常见求和结构。',
    points: [
      {id:'arithmetic-sequence',title:'等差数列',keywords:['数列','等差数列','前n项和'],summary:'相邻两项之差为常数，通项是 n 的一次式，前 n 项和是 n 的二次式。',formulas:[{expression:'aₙ=a₁+(n−1)d',note:'通项公式'},{expression:'Sₙ=n(a₁+aₙ)/2',note:'前 n 项和'},{expression:'Sₙ=na₁+n(n−1)d/2',note:'求和展开'}],pitfall:'第 n 项对应 n−1 个公差，不是 n 个公差。',example:'a₁=2，d=3，则 a₁₀=29。'},
      {id:'geometric-sequence',title:'等比数列',keywords:['数列','等比数列','公比'],summary:'后一项与前一项的比为常数，增长与衰减都具有乘法结构。',formulas:[{expression:'aₙ=a₁qⁿ⁻¹',note:'通项公式'},{expression:'Sₙ=a₁(1−qⁿ)/(1−q)',note:'q≠1'},{expression:'Sₙ=na₁',note:'q=1'}],pitfall:'前 n 项和公式必须按 q=1 与 q≠1 分类。',example:'a₁=3，q=2，则 S₅=93。'},
      {id:'sequence-sum',title:'数列求和方法',keywords:['错位相减','裂项相消','分组求和'],summary:'先识别通项结构，再选择分组、裂项或错位相减，而不是机械套公式。',formulas:[{expression:'1/[n(n+1)]=1/n−1/(n+1)',note:'裂项模板'},{expression:'Sₙ−qSₙ',note:'等差×等比型的错位相减'}],pitfall:'错位相减后首尾项的位置和符号最容易遗漏。',example:'Σₖ₌₁ⁿ 1/[k(k+1)]=1−1/(n+1)。'},
      {id:'sequence-recurrence',title:'递推数列',keywords:['递推公式','累加法','累乘法'],summary:'由相邻项关系反推通项；差分适合累加，比值关系适合累乘。',formulas:[{expression:'aₙ=a₁+Σₖ₌₂ⁿ(aₖ−aₖ₋₁)',note:'累加法'},{expression:'aₙ=a₁·Πₖ₌₂ⁿ(aₖ/aₖ₋₁)',note:'累乘法'}],condition:'累乘法要求涉及的分母项不为零。',pitfall:'递推式只描述相邻关系，通项结论通常还需归纳验证。',example:'aₙ−aₙ₋₁=2n−1，a₁=1，则 aₙ=n²。'}
    ]
  },
  {
    id: 'solid-geometry', index: '06', title: '立体几何', subtitle: '空间与度量',
    description: '把空间关系、截面、表面积和体积连接到本项目的可操作实验。',
    points: [
      {id:'space-relations',title:'空间中的平行与垂直',keywords:['空间几何','线面平行','线面垂直','面面垂直'],summary:'空间关系证明通常落到直线之间：找平行线、相交线或平面的法向方向。',formulas:[{expression:'a∥b，b⊂α，a⊄α ⇒ a∥α',note:'线面平行判定'},{expression:'a⊥b，a⊥c，b∩c=P ⇒ a⊥α',note:'线面垂直判定，b、c⊂α'},{expression:'α⊥β，α∩β=l，a⊂α，a⊥l ⇒ a⊥β',note:'面面垂直性质'}],pitfall:'“平行于平面内一条直线”还不能单独推出线面平行，要排除直线在平面内。'},
      {id:'solid-area',title:'柱、锥、台的表面积',keywords:['表面积','圆柱','圆锥','圆台'],summary:'侧面展开后再计算：柱体得到矩形，圆锥得到扇形，圆台得到扇环。',formulas:[{expression:'S圆柱侧=2πrh',note:'圆柱侧面积'},{expression:'S圆锥侧=πrl',note:'l 为母线'},{expression:'S圆台侧=π(R+r)l',note:'圆台侧面积'}],pitfall:'表面积还要加所有暴露的底面；组合体内部接触面不计。',example:'r=3，h=4 的圆锥母线 l=5，侧面积为 15π。',relatedLesson:1},
      {id:'solid-volume',title:'空间几何体的体积',keywords:['体积','柱体','锥体','球'],summary:'柱体体积是底面积乘高，锥体是同底等高柱体的三分之一。',formulas:[{expression:'V柱=Sh',note:'棱柱、圆柱'},{expression:'V锥=⅓Sh',note:'棱锥、圆锥'},{expression:'V球=⁴⁄₃πR³',note:'球体积'}],pitfall:'公式中的 h 是底面到顶点或另一底面的垂直距离，不一定是侧棱。',relatedLesson:10},
      {id:'solid-section',title:'空间截面与距离',keywords:['截面','球截面','正方体截面'],summary:'截面问题先确定平面与各棱的交点，再按平面内真实形状计算。',formulas:[{expression:'S球截=π(R²−d²)',note:'d 为球心到截面的距离'},{expression:'ρ/R=x/h',note:'圆锥平行截面的相似比'}],condition:'圆锥截面平行于底面；球截面满足 0≤d≤R。',pitfall:'透视图中的视觉长度不是真实长度，应转到截面所在平面计算。',relatedLesson:6}
    ]
  },
  {
    id: 'analytic-geometry', index: '07', title: '解析几何', subtitle: '用方程画图',
    description: '用坐标、直线和圆锥曲线方程处理位置关系、距离与轨迹。',
    points: [
      {id:'line',title:'直线方程与位置关系',keywords:['直线','斜率','平行','垂直'],summary:'选择合适的直线方程形式，避免斜率不存在时遗漏竖直直线。',formulas:[{expression:'y−y₀=k(x−x₀)',note:'点斜式'},{expression:'Ax+By+C=0',note:'一般式'},{expression:'k₁k₂=−1',note:'两斜率存在时垂直'}],pitfall:'使用斜率公式前要检查 x 坐标差是否为零。',example:'过点 (1,2)、斜率为 3 的直线：y−2=3(x−1)。'},
      {id:'distance',title:'距离公式',keywords:['距离','点到直线','两点距离'],summary:'距离问题通过坐标差或直线一般式统一计算。',formulas:[{expression:'|AB|=√[(x₂−x₁)²+(y₂−y₁)²]',note:'两点距离'},{expression:'d=|Ax₀+By₀+C|/√(A²+B²)',note:'点到直线距离'}],condition:'点到直线公式中的直线写成 Ax+By+C=0，且 A、B 不全为零。',pitfall:'分子要取绝对值，分母是 A²+B² 的平方根。'},
      {id:'circle',title:'圆的方程',keywords:['圆','圆心','半径','轨迹'],summary:'标准方程直接展示圆心和半径，一般方程可通过配方还原。',formulas:[{expression:'(x−a)²+(y−b)²=r²',note:'圆心 (a,b)，半径 r'},{expression:'x²+y²+Dx+Ey+F=0',note:'一般方程'}],condition:'一般方程表示圆要求 D²+E²−4F>0。',pitfall:'标准方程括号内符号与圆心坐标符号相反。'},
      {id:'conics',title:'椭圆、双曲线与抛物线',keywords:['圆锥曲线','椭圆','双曲线','抛物线','离心率'],summary:'圆锥曲线由到定点、定直线的距离关系定义，标准方程揭示焦点和渐近结构。',formulas:[{expression:'x²/a²+y²/b²=1，c²=a²−b²',note:'椭圆，a>b>0'},{expression:'x²/a²−y²/b²=1，c²=a²+b²',note:'双曲线'},{expression:'y²=2px',note:'抛物线，焦点 (p/2,0)'}],pitfall:'椭圆与双曲线中 a、b、c 的关系不同；先看焦点所在轴。'}
    ]
  },
  {
    id: 'probability', index: '08', title: '概率与统计', subtitle: '随机与数据',
    description: '从古典概型到条件概率，再到均值、方差和常见分布。',
    points: [
      {id:'classical-probability',title:'古典概型',keywords:['概率','古典概型','互斥事件'],summary:'所有基本结果等可能时，可用有利结果数除以总结果数。',formulas:[{expression:'P(A)=m/n',note:'古典概型'},{expression:'P(A∪B)=P(A)+P(B)−P(A∩B)',note:'加法公式'},{expression:'P(Ā)=1−P(A)',note:'对立事件'}],condition:'古典概型要求样本空间有限且基本事件等可能。',pitfall:'互斥与独立不是同一概念；互斥事件通常并不独立。'},
      {id:'conditional-probability',title:'条件概率与独立性',keywords:['条件概率','独立事件','全概率'],summary:'条件概率是在事件 B 已发生的新样本空间中重新计算 A 的概率。',formulas:[{expression:'P(A|B)=P(A∩B)/P(B)',note:'P(B)>0'},{expression:'P(A∩B)=P(A)P(B)',note:'A、B 相互独立'}],pitfall:'P(A|B) 与 P(B|A) 通常不同，不能交换条件。',example:'连续抛两次硬币，已知至少一次正面，两次都是正面的概率为 1/3。'},
      {id:'binomial',title:'二项分布',keywords:['二项分布','独立重复试验','期望','方差'],summary:'n 次独立重复试验中，每次成功概率相同，成功次数服从二项分布。',formulas:[{expression:'P(X=k)=Cₙᵏpᵏ(1−p)ⁿ⁻ᵏ',note:'X~B(n,p)'},{expression:'E(X)=np',note:'期望'},{expression:'D(X)=np(1−p)',note:'方差'}],condition:'各次试验独立、只有成功或失败两种结果且成功概率固定。',pitfall:'“不放回抽样”通常不满足各次试验独立。'},
      {id:'statistics',title:'数据的数字特征',keywords:['平均数','方差','标准差','相关系数'],summary:'均值描述中心位置，方差和标准差描述数据相对均值的波动程度。',formulas:[{expression:'x̄=(x₁+⋯+xₙ)/n',note:'平均数'},{expression:'s²=[Σ(xᵢ−x̄)²]/n',note:'方差'},{expression:'s=√s²',note:'标准差'}],pitfall:'数据整体加同一常数时方差不变；整体乘 k 时方差乘 k²。'}
    ]
  },
  {
    id: 'calculus', index: '09', title: '导数与应用', subtitle: '瞬时变化率',
    description: '从导数运算到单调性、极值、最值和切线，把局部变化用于整体判断。',
    points: [
      {id:'derivative-basic',title:'基本初等函数的导数',keywords:['导数','求导公式','复合函数'],summary:'导数描述函数在一点附近的瞬时变化率，也是曲线切线的斜率。',formulas:[{expression:'(xⁿ)′=nxⁿ⁻¹',note:'幂函数'},{expression:'(eˣ)′=eˣ，(lnx)′=1/x',note:'指数与对数'},{expression:'[f(g(x))]′=f′(g(x))g′(x)',note:'链式法则'}],condition:'对数求导要求变量位于函数定义域内。',pitfall:'复合函数求导不能漏乘内层函数的导数。'},
      {id:'monotonicity',title:'单调性与极值',keywords:['单调性','极值','导数符号'],summary:'导数的正负控制函数增减；导数由正变负得到极大值，由负变正得到极小值。',formulas:[{expression:'f′(x)>0 ⇒ f 在区间上单调递增',note:'增区间'},{expression:'f′(x)<0 ⇒ f 在区间上单调递减',note:'减区间'}],condition:'函数在所讨论区间内可导；严格论证应写明区间。',pitfall:'f′(x₀)=0 只是极值的候选条件，不保证 x₀ 是极值点。'},
      {id:'tangent',title:'曲线的切线',keywords:['切线','斜率','导数几何意义'],summary:'函数在 x₀ 处的导数就是该点切线斜率。',formulas:[{expression:'y−f(x₀)=f′(x₀)(x−x₀)',note:'切线方程'}],condition:'f 在 x₀ 处可导。',pitfall:'“在点 P 处的切线”和“过点 P 的切线”含义不同，后者切点未必是 P。',example:'y=x² 在 x=1 处的切线是 y−1=2(x−1)。'},
      {id:'optimization',title:'函数最值与实际优化',keywords:['最值','优化','导数应用','建模'],summary:'先建立目标函数和定义域，再找驻点并与边界值比较。',formulas:[{expression:'候选点：f′(x)=0 或 f′(x) 不存在',note:'区间内部'},{expression:'闭区间最值 = 端点与内部候选值比较',note:'完整流程'}],pitfall:'实际问题必须保留物理定义域，并检查所得尺寸是否可行。',example:'固定体积的封闭圆柱在高等于直径时表面积最小。',relatedLesson:10}
    ]
  }
];

export const allKnowledgePoints = knowledgeModules.flatMap(module =>
  module.points.map(point => ({...point, moduleId: module.id, moduleTitle: module.title}))
);
