【题 21】 1 mol 单原子分子理想气体所经准静态循环过程是如热图2-21-1所示的圆，有关参量已在热图2-21-1 中标明。

1. 试求一次循环对外所作的功 $W .2$ 。试计算由 $A$ 经 $B$ 到 $C$ 过程中内能的增量 $\Delta U .3$ 。试计算由 $A$ 经 $B$ 到 $C$ 过程中吸收的热量 $Q .4$ 。为了求出循环效率，必须知道循环过程中吸热与放热的转折点，试导出转折点坐标所满足的代数方程（不必求解）。
【分析】 如热图 $2-21-1$ ，循环过程是 $p-V$ 图上的圆，过程方程不难写出（注意，若改变 $p, V$轴的标度，上述圆将变为椭圆），一次循环对外作功 $W$ 等于圆（或椭圆）面积。
$A B C$ 过程的 $\Delta U_{A B C}$ 取决于温度的变化。 $W_{A B C}$ 等于半圆下的面积（半圆加上正方形，如热图 $2-21-1$ )。由 $\Delta U_{A B C}$ 和 $W_{A B C}, Q_{A B C}$ 可求。
![img-304.jpeg](img-304.jpeg)

热图 $2-21-1$
![img-305.jpeg](img-305.jpeg)

热图 $2-21-2$

吸热与放热转折点的位置由绝热曲线与循环曲线的切点确定，如热图2-21-2，应有两个转折点 $M$ 和 $N$ 。循环过程由吸热的 $M A B N$ 过程及放热的 $N C D M$ 过程两部分构成，如热图2-21-2 所示（请参看本章题 19 的附录，本题 $M A B N$ 过程相当于该附录图中 $A \rightarrow$ (1)(2) 以及(6)(3) $\rightarrow$ $A$ 的过程，为吸热。本题 NCDM 过程则相当于该附录图中 $A \rightarrow$ (5)(6) 以及(2)(3) $\rightarrow A$ 的过程，为放热。因此，本题的圆过程中只有两个吸热与放热的转折点，即 $M$ 点和 $N$ 点。）
【解】循环过程为 $p-V$ 图上的圆，过程方程为

$$
\left(\frac{p}{p_{0}}-2\right)^{2}+\left(\frac{V}{V_{0}}-2\right)^{2}=1
$$

式中 $p_{0}=10^{5} \mathrm{~N} / \mathrm{m}^{2}, V_{0}=10^{-3} \mathrm{~m}^{3}$. 若改变 $p, V$ 轴的标度, 循环过程为椭圆, 其过程方程为

$$
\frac{\left(p-2 p_{0}\right)^{2}}{p_{0}^{2}}+\frac{\left(V-2 V_{0}\right)^{2}}{V_{0}^{2}}=1
$$

就代数方程而言，以上两式是等价的。
一次循环 $A B C D A$ 对外作功 $W$ 为圆或痛圆的而积, 为

$$
W=\pi p_{0} V_{0}=314 \mathrm{~J}
$$

在 $A B C$ 过程中，内能增量 $\Delta U_{A B C}$ ，对外作功 $W_{A B C}$ ，吸热 $Q_{A B C}$ 分别为

$$
\begin{aligned}
\Delta U_{A B C} & =C_{V}\left(T_{:}-T_{A}\right)=\frac{3}{2} R\left(\frac{p_{C} V_{C}}{R}-\frac{p_{A} V_{A}}{R}\right) \\
& =\frac{3}{2}\left(6 p_{0} V_{0}-2 p_{0} V_{0}\right)=6 p_{0} V_{0}=600 \mathrm{~J} \\
W_{A B C}=\frac{1}{2} \pi p_{0} V_{0} \cdot 2 p_{0}\left(3 V_{0}-V_{0}\right)=\left(\frac{\pi}{2}+4\right) p_{0} V_{0} & \\
Q_{A B C}=W_{A B C}+\Delta U_{A B C}=\left(\frac{\pi}{2}+4\right) p_{0} V_{0}+6 p_{0} V_{0} & \\
& =\left(\frac{\pi}{2}+10\right) p_{0} V_{0}=1157 \mathrm{~J} &
\end{aligned}
$$

吸热和放热的转折点是绝热曲线与循环曲线的切点，如热图2-21-2，应满足

$$
\left(\frac{\mathrm{d} p}{\mathrm{~d} V}\right)_{\text {循环 }}=\left(\frac{\mathrm{d} p}{\mathrm{~d} V}\right)_{\text {绝热 }} \text { (1) } \\
\left\{\begin{array}{l}
x=\frac{V}{V_{0}} \\
y=\frac{p}{p_{0}}
\end{array}\right\}
$$

则由

$$
\left\{\begin{array}{l}
\left(\frac{\mathrm{d} y}{\mathrm{~d} x}\right)_{\text {循环 }}=\left(\frac{\mathrm{d} y}{\mathrm{~d} x}\right)_{\text {绝热 }} \\
(y-2)^{2}+(x-2)^{2}=1(\text { 循环曲线 }) \\
y x^{y}=\text { 常量(绝热曲线 })
\end{array}\right\}
$$

得

$$
\frac{x-2}{y-2}=-\gamma \frac{y}{x}
$$

式中 $\gamma=\frac{5}{3}$. 转折点在循环曲线上，故其坐标 $(x, y)$ 应满足的二元二次方程组为

$$
\left\{\begin{array}{l}
3 x(x-2)+5 y(y-2)=0 \\
(x-2)^{2}+(y-2)^{2}=1
\end{array}\right\}
$$

上述代数方程组的两个解，就是两个转折点 $M$ 和 $N$ 的坐标。

【题 22】某空调器按可逆卡诺循环运转，其中的作功装置连续工作时所提供的功率为 $P_{0}$ 。1. 夏天，室外温度为恒定的 $T_{1}$ ，启动空调器连续工作，最后可将室温降至恒定的 $T_{2}$ 。室外通过热传导在单位时间内向室内传输的热量正比于 $\left(T_{1}-T_{2}\right)$ （牛顿冷却定律），比例系数为 $A$ 。试用 $T_{1}, P_{0}$ 和 $A$ 来表示 $T_{2}$ 。
2. 当室外温度为 $30^{\circ} \mathrm{C}$ 时，若这台空调器只有 $30 \%$ 的时间处于工作状态，则室温可维持在 $20^{\circ} \mathrm{C}$ 。试问室外温度最高为多少时，用此空调器仍可使室温维持在 $20^{\circ} \mathrm{C}$ 。
3. 冬天，可将空调器吸热、放热反向。试问室外温度最低为多少时，用此空调器可使室温维持在 $20^{\circ} \mathrm{C}$ 。

绝对零度取为 $-273^{\circ} \mathrm{C}$ 。
【分析】夏天，空调器为制冷机，作逆向卡诺循环，从室内（低温热源）吸热，向室外（高温热源）放热，对工作物质作功。为保持室温恒定，空调器从室内吸收的热量应等于室外向室内通过热传导传输的热量。

冬天刚好相反，空调器为热机，作顺向卡诺循环，从室外（低温热源）吸热，向室内（高温热源）放热。为保持室温恒定，空调器向室内的放热，应等于室内向室外通过热传导传输的热量。
【解】无论空调器是连续工作还是间断工作，其作功装置提供的平均功率统记为 $P$ ，显然，连续工作时 $P=P_{0}$ 为极大，间断工作时应打个折扣。

1. 夏天，空调器为制冷机，单位时间从室内（低温热源，温度为 $T_{2}$ ）吸热 $Q_{2}$ ，向室外（高温热源，温度为 $T_{1}$ ）放热 $Q_{1}$ ，故

$$
Q_{1}=Q_{2}+P
$$

因空调器作可逆卡诺循环，故有

$$
\frac{Q_{1}}{T_{1}}=\frac{Q_{2}}{T_{2}}
$$

由以上两式，得出

$$
Q_{2}=\frac{T_{2}}{T_{1}-T_{2}} P
$$

同时，单位时间内室外向室内通过热传导传输的热量为

$$
Q=A\left(T_{1}-T_{2}\right)
$$

为了保持室温恒定，室内（注意不是室外）应处于热平衡，故应有

$$
Q=Q_{2}
$$

把 $Q$ 和 $Q_{2}$ 的表达式代入，得

$$
A\left(T_{1}-T_{2}\right)=\frac{T_{2}}{T_{1}-T_{2}} P
$$

或

$$
T_{1}-T_{2}=\sqrt{\frac{P}{A} T_{2}}
$$

这是一个 $T_{2}$ 的二次代数方程，容易求解。弃去不合理的 $T_{2}>T_{1}$ 解，得出解为

$$
T_{2}=T_{1}+\frac{1}{2}\left[\frac{P}{A}-\sqrt{\left(\frac{P}{A}\right)^{2}+\frac{4 P}{A} T_{1}}\right]
$$

因空调器连续工作，式中的 $P=P_{0}$ ，故

$$
T_{2}=T_{1}+\frac{1}{2}\left[\frac{P_{0}}{A}-\sqrt{\left(\frac{P_{0}}{A}\right)^{2}+\frac{4 P_{0}}{A} T_{1}}\right]
$$

2. 按题意，当 $T_{1}=293 \mathrm{~K}, P=0.3 P_{0}$ 时， $T_{1}=303 \mathrm{~K}$ 。而所求的是 $P=P_{0}$ 时对应的 $T_{1}$ 值，记为 $T_{1, \text { max }}$ 。把（1）式分别应用于这两种情况，可得

$$
\begin{gathered}
T_{1}-T_{2}=\sqrt{\frac{P}{A} T_{2}}=\sqrt{\frac{0.3 P_{0}}{A} T_{2}} \\
T_{1, \max }-T_{2}=\sqrt{\frac{P_{0}}{A} T_{2}}
\end{gathered}
$$

由以上两式，得

$$
T_{1, \max }=T_{2}+\sqrt{0.3}\left(T_{1}-T_{2}\right)=311.26 \mathrm{~K}
$$

即

$$
t_{1, \max }=38.26 \mathrm{C}
$$

若空调器连续工作，则当夏天室外温度最高为 $38.26^{\circ} \mathrm{C}$ 时，仍可使室温维持在 $20^{\circ} \mathrm{C}$ 。
3. 冬天，空调器为热机，单位时间从室外（低温热源，温度为 $T_{1}{ }^{\prime}$ ）吸热 $Q_{1}{ }^{\prime}$ ，向室内（高温热源，温度仍表为 $T_{2}$ ）故热 $Q_{2}{ }^{\prime}$ ，空调器连续工作，功率为 $P_{0}$ ，故有

$$
Q_{2}^{\prime}=Q_{1}^{\prime}+P_{0}
$$

因空调器作可逆卡诺循环，有

$$
\frac{Q_{1}^{\prime}}{T_{1}^{\prime}}=\frac{Q_{2}^{\prime}}{T_{2}}
$$

由以上两式，得出

$$
Q_{2}^{\prime}=\frac{T_{2}}{T_{2}-T_{1}} P_{0}
$$

同时，单位时间从室内向室外通过热传导传输的热量为

$$
Q^{\prime}=A\left(T_{2}-T_{1}^{\prime}\right)
$$

为了保持室温恒定，室内（注意不是室外，即与夏天的情况并不对称）应处于热平衡，故应有

$$
Q^{\prime}=Q_{2}^{\prime}
$$

把 $Q^{\prime}$ 和 $Q_{2}{ }^{\prime}$ 的表达式代入，得

$$
T_{2}-T_{1}^{\prime}=\sqrt{\frac{P_{0}}{A} T_{2}}
$$

注意上式与（2）式并不对称。于是

$$
T_{1}^{\prime}=T_{2}-\sqrt{\frac{P_{0}}{A} T_{2}}
$$

把（2）式代入，得

$$
\begin{aligned}
T_{1}^{\prime} & =T_{2}-\left(T_{1, \max }-T_{2}\right)=2 T_{2}-T_{1, \max } \\
& =2 \times 293-311.26=274.74 \mathrm{~K}
\end{aligned}
$$

即

$$
t_{1}^{\prime}=1.74 \mathrm{C}
$$

若空调器连续工作，则当冬天室外温度最低为 $1.74^{\circ} \mathrm{C}$ 时，仍可使室内维持在 $20^{\circ} \mathrm{C}$ 。
【题 23】长 $l$ 的均匀细棒，质量线密度为 $\lambda$ ，开始时一端温度为 $T_{1}$ ，另一端温度为 $T_{2}=2 T_{1}$ ，中间各处温度线性地分布，此棒在绝热的情况下，最终达到热平衡。已知棒各处的比热为相同的常量 $C$ 。试求全过程棒的熵增量，并说明此过程是否可逆。
【分析】棒的初始温度分布容易求得。因过程绝热，棒与外界无热量交换，只是棒中温度较低处从温度较高处吸热而升温，同时温度较高处向温度较低处放热而降温，最后棒各处达到一致的温度。由棒吸热与放热总量平衡，可确定终态全棒的温度。棒中各小段从其初温达到终温，相应有熵的增量，各小段熵增量之和即为全过程棒的熵增量。由棒的熵增量的正、负号，即可确定过程是否可逆。

其实，这一过程就是热量自发地从高温物体向低温物体传输的过程。由热力学第二定律可知，这是一个不可逆过程，因此全过程的熵增量必定为正。
【解】沿棒取 $x$ 坐标如图所示，则有

$$
\begin{gathered}
T_{0}=T_{1} \\
T_{1}=T_{2}=2 T_{1}
\end{gathered}
$$

因棒各处温度线性地分布，故棒中任意 $x$ 处的温度为

$$
\begin{aligned}
T_{r} & =T_{0}+\frac{x}{l}\left(T_{l}-T_{0}\right) \\
& =T_{1}+\frac{x}{l}\left(2 T_{1}-T_{1}\right)=\left(1+\frac{x}{l}\right) T_{1}
\end{aligned}
$$

设在绝热条件下达到热平衡后，棒各处的温度同为 $T_{e}$ ，则从 $x$ 到 $(x+\mathrm{d} x)$ 小段的吸热量应为

$$
\mathrm{d} Q=c(\lambda \mathrm{~d} x)\left(T_{e}-T_{x}\right)
$$

积分，得棒在此过程中的总吸热量 $Q$ ，因绝热 $Q$ 应为零，即

$$
Q=\int_{0}^{l} c(\lambda \mathrm{~d} x)\left(T_{e}-T_{x}\right)=0
$$

即

$$
T_{x} \int_{0}^{\prime} \mathrm{d} x \quad \int_{0}^{l} T_{x} \mathrm{~d} x
$$

把上述 $T_{x}$ 表达式代入，积分，得

$$
T_{x} \dot{1}=T_{1} \cdot \frac{3}{2} l
$$

故

$$
T_{e}=\frac{3}{2} T_{1}
$$

这一结果是很自然的，不难直观地猜到。
棒中从 $x$ 到 $(x+\mathrm{d} x)$ 小段，在全过程中，温度从初态的 $T_{x}$ 达到终态的 $T_{e}$ 。该小段在任意元过程中，温度从 $T$ 增为 $(T+\mathrm{d} T)$ 时的熵增量为

$$
\mathrm{d} S=\frac{\mathrm{d} Q}{T}=\frac{c(\lambda \mathrm{d} x) \mathrm{d} T}{T}
$$

该小段从 $T_{x}$ 到 $T_{y}$ 的熵增量为

$$
\int_{T_{x}}^{T_{y}} \mathrm{~d} S=c \lambda \mathrm{~d} x \int_{T_{x}}^{T_{y}} \frac{\mathrm{~d} T}{T}=c \lambda \mathrm{~d} x \ln \frac{T_{x}}{T_{x}}
$$

各小段在全过程中的熵增量之和即为棒在全过程中的总熵增量 $\Delta S$, 应为

$$
\Delta S=\int_{0}^{l} c \lambda \ln \frac{T_{x}}{T_{x}} \mathrm{~d} x
$$

把 $T_{x}$ 和 $T_{x}$ 的表达式代入，得

$$
\begin{aligned}
\Delta S & =c \lambda\left\{\int_{0}^{l}\left(\ln \frac{3}{2} l\right) \mathrm{d} x-\int_{0}^{l}[\ln (l+x)] \mathrm{d} x\right\} \\
& =c \lambda\left\{l\left(\ln \frac{3}{2} l\right)-\int_{l}^{2 l}(\ln u) \mathrm{d} u\right\}
\end{aligned}
$$

利用积分公式

$$
\int(\ln u) \mathrm{d} u=u \ln u-u
$$

最后得

$$
\begin{aligned}
\Delta S & =c \lambda\left\{l\left(\ln \frac{3}{2} l\right)-[2 l(\ln 2 l)-2 l-l \ln l+l]\right\}=c \lambda l\left(1+\ln \frac{3}{8}\right) \\
& =0.019 c \lambda l>0
\end{aligned}
$$

可见，在全过程中，棒的总熵增量 $\Delta S>0$ ，为正。因此，这是不可逆过程。

【图24】 3.2 g 的氧气（绝热指数取为 $\frac{7}{5}$ ）从初态 $1\left(p_{1}=1.0 \mathrm{~atm}, V_{1}=1.0 \mathrm{~L}\right)$ 出发，经过等压过程到达状态 $2\left(V_{2}=2.0 \mathrm{~L}\right)$ ，再经过等体过程到达状态 $3\left(p_{3}=2.0 \mathrm{~atm}\right)$ ，又经过绝热过程到达状态 4 ，状态 4 的温度刚好与状态 1 的温度相同，最后经等温过程回到状态 1 ，构成循环过程。

1. 试求循环过程的效率 $\eta$.
2. 设初态 1 的熵为 $S_{1}$ ，取系统熵 $S$ 为纵坐标，系统温度 $T$ 为横坐标。试尽可能正确地画出循环过程的 $S-T$ 曲线。要求，曲线形状定性正确，标明曲线各特征点的坐标，其中 $S$ 坐标可表为 $S_{1}$ 加上或减去相应的数值。
【分析】首先在 $p-V$ 坐标面上画出循环过程的曲线。分析和计算其中各过程的吸热、放热，即可得出循环过程的效率 $\eta$ 。

由已知的循环过程中各状态的压强与体积，可求得各状态的温度。由理想气体熵的公式可以确定在各过程中熵 $S$ 随温度 $T$ 的变化，从而定性地画出循环过程的 $S-T$ 曲线，并算出各特征点的 $T$ 和 $S$ 。
【解】在 $p-V$ 坐标面上画出循环过程 12341 的曲线，如热图 $2-24-1$ 所示。由题设，氧气的摩尔质量 $\mu$ ，摩尔数 $\nu$ ，等体摩尔热容量 $C_{V}$ ，等压摩尔热容量 $C_{p}$ ，绝热指数 $\gamma$ 分别为

$$
\mu=32 \mathrm{~g} / \mathrm{mol}, \quad \nu=0.1 \mathrm{~mol}
$$

![img-306.jpeg](img-306.jpeg)

热图 2-24-1

$$
C_{V}=\frac{5}{2} R, \quad C_{p}=\frac{7}{2} R, \quad \gamma=\frac{7}{5}
$$

1. 由理想气体状态方程，循环过程中各有关过程的过程方程，以及题目给定的数据，可以算出状态 $1,2,3,4$ 的 $p, V, T$ 如下（具体计算从略）。

状态 $1, p_{1}=1.0 \mathrm{~atm}, \quad V_{1}=1.0 \mathrm{~L}, T_{1}=122 \mathrm{~K}$
状态 $2, p_{2}=1.0 \mathrm{~atm}, \quad V_{2}=2.0 \mathrm{~L}, T_{2}=244 \mathrm{~K}=2 T_{1}$
状态 $3, p_{3}=2.0 \mathrm{~atm}, \quad V_{3}=2.0 \mathrm{~L}, T_{3}=488 \mathrm{~K}=4 T_{1}$
状态 $4, p_{4}=0.0157 \mathrm{~atm}, V_{4}=64 \mathrm{~L}, T_{4}=122 \mathrm{~K}=T_{1}$
等压过程 $1-2$ 的吸热量为

$$
Q_{1}=\nu C_{p}\left(T_{2}-T_{1}\right)=\frac{7}{2} \nu R T_{1}
$$

等体过程 $2-3$ 的吸热量为

$$
Q_{2}=\nu C_{V}\left(T_{3}-T_{2}\right)=5 \nu R T_{1}
$$

绝热过程 3-4的吸热量为零，等温过程 $4-1$ 的放热量为

$$
Q_{3}=\nu R T_{4} \ln \frac{V_{4}}{V_{1}}=(\ln 64) \nu R T_{1}
$$

故循环过程 12341 的效率为

$$
\eta=1-\frac{Q_{\text {暒 }}}{Q_{\text {暒 }}}=1-\frac{Q_{3}}{Q_{1}+Q_{2}}=1-\frac{\ln 64}{\frac{7}{2}+5}=51 \%
$$

2. 理想气体的烸可表为

$$
S=\nu C_{V} \ln T+\nu R \ln V+S_{0}
$$

理想气体的状态方程为

$$
V=\frac{\nu R T}{p}
$$

由以上两式，可得出理想气体烸的另一表达式为

$$
S=\nu\left(C_{V}+R\right) \ln T-\nu R \ln p+\nu R \ln \nu R+S_{0}=\nu C_{p} \ln T-\nu R \ln p+S_{0}
$$

在等压过程 $1-2$ 中，烸增量为

$$
\begin{aligned}
S_{2}-S_{1} & =\left(\nu C_{p} \ln T_{2}-\nu R \ln p_{2}+S_{0}{ }^{\prime}\right)-\left(\nu C_{p} \ln T_{1}-\nu R \ln p_{1}+S_{0}{ }^{\prime}\right) \\
& =\nu C_{p} \ln \frac{T_{2}}{T_{1}}=0.1 \times \frac{7}{2} R \times \ln 2=2.02 \mathrm{~J} / \mathrm{K}
\end{aligned}
$$

在等压过程 $1-2$ 中，烸 $S$ 随温度 $T$ 的变化率应为

$$
\left(\frac{\mathrm{d} S}{\mathrm{~d} T}\right) \mathrm{p}=\frac{\nu C_{p}}{T}
$$

可见，在等压过程 $1-2$ 中， $S-T$ 曲线的斜率随 $T$ 增大而减小，这将在热图2-24-2的曲线中显示出来。

在等体过程 $2-3$ 中，状态 3 相对状态 1 的烸增量为

$$
\begin{aligned}
S_{3}-S_{1} & =\left(\nu C_{V} \ln T_{3}+\nu R \ln V_{3}+S_{0}\right)-\left(\nu C_{V} \ln T_{1}+\nu R \ln V_{1}+S_{0}\right) \\
& =\nu C_{V} \ln \frac{T_{3}}{T_{1}}+\nu R \ln \frac{V_{3}}{V_{1}}=\nu C_{V} \ln 4+\nu R \ln 2
\end{aligned}
$$

$$
=6 v R \ln 2=6 \times 0.1 R \ln 2=3.46 \mathrm{~J} / \mathrm{K}
$$

在等体过程 $2-3$ 中，摘 $S$ 随温度 $T$ 的变化率应为

$$
\left(\frac{\mathrm{d} S}{\mathrm{~d} T}\right) \mathrm{V}=\frac{\nu C_{V}}{T}
$$

可见，在等体过程 $2-3$ 中， $S-T$ 曲线的斜率随 $T$ 增大而减小，但因 $C_{V}<C_{E}$ ，曲线的弯曲程度应不如等压过程 $1-2$ ，这些都将在热图 $2-24-2$ 的曲线中显示出来。

在绝热过程 3-4 中，摘不变，即

$$
S_{4}=S_{3}
$$

故绝热过程 3-4 的 $S-T$ 曲线应是一条等摘的直线
在等温过程 $4-1$ 中，温度不变，即

$$
T_{4}=T_{1}
$$

故等温过程 $4-1$ 的 $S-T$ 曲线应是一条等温的直线。
综合以上全部结果，可将如热图 2-24-1所示的循环过程 12341 的 $S-T$ 曲线画出，如热图2-24-2所示。

【题 25】 $\nu$ 摩尔理想气体经历的某过程的 $T-S$ 曲线是如图所示的一条直线。设绝热指数 $\gamma$ 为常数，试导出该过程的过程方程。
【分析】如所闻知，理想气体的准静态过程，可按在过程中热容量 $C$是否常量分为两类。 $C$ 为常量的过程是多方过程。 $C$ 为变量的过程为非多方过程，如果某过程的 $C$ 已知，由热力学第一定律和理想气体状态方程，即可导出相应的过程方程。

本题给定的 $T-S$ 关系可用于确定过程的热容量 $C$ ，进而导出相应的过程方程。

本题提醒读者，由温一嫡（ $T-S$ ）曲线可以导出过程方程，这是
![img-307.jpeg](img-307.jpeg)

热图2-25-1

确定过程方程的一种方法。
【解】将过程的摩尔热容量表为 $C$ ，根据摘的定义，有

$$
\mathrm{d} S=\frac{\mathrm{d} Q}{T}=\frac{\nu C \mathrm{~d} T}{T}
$$

故

$$
C=\frac{T \mathrm{~d} S}{\nu \mathrm{~d} T}
$$

如图，本题某过程的 $T-S$ 曲线是直线，故有

$$
\frac{\mathrm{d} S}{\mathrm{~d} T}=\frac{S_{2}-S_{1}}{T_{2}-T_{1}}
$$

由以上两式，得出该过程的摩尔热容量 $C$ 为

$$
C=\frac{S_{2}-S_{1}}{\nu\left(T_{2}-T_{1}\right)} T
$$

为讨论方便，引入常量 $\alpha$

$$
\alpha=\frac{S_{2}-S_{1}}{\nu\left(T_{2}-T_{1}\right)} \cdot \frac{1}{C_{V}}
$$

其中 $C_{V}$ 为等体摩尔热容量，有

$$
C_{V}=\frac{R}{\gamma-1}
$$

故

$$
\alpha=\frac{(\gamma-1)\left(S_{2}-S_{1}\right)}{\nu R\left(T_{2}-T_{1}\right)}
$$

于是 $C$ 可表为

$$
C=\alpha C_{V} T
$$

可见，在本题的过程中，摩尔热容量 $C$ 随温度 $T$ 变化，并非常量，因此本题的过程是一个非多方过程。

由热力学第一定律

$$
\nu C \mathrm{~d} T=p \mathrm{~d} V+\nu C_{V} \mathrm{~d} T
$$

即

$$
p \mathrm{~d} V=\nu\left(C-C_{V}\right) \mathrm{d} T
$$

在本题的过程中

$$
C=\alpha C_{V} T
$$

由以上两式，得

$$
p \mathrm{~d} V=\nu C_{V}(\alpha T-1) \mathrm{d} T
$$

理想气体状态方程为

$$
p=\frac{\nu R T}{V}
$$

由以卜两式，得

$$
\frac{\mathrm{d} V}{V}=\frac{C_{V}}{R}\left(\alpha-\frac{1}{T}\right) \mathrm{d} T=\frac{1}{\gamma-1}\left(\alpha-\frac{1}{T}\right) \mathrm{d} T
$$

积分，得

$$
\ln V-\frac{1}{\gamma-1} \alpha T+\frac{1}{\gamma-1} \ln T=\pi 量
$$

即

$$
\alpha T-\ln \left(T V^{\gamma-1}\right)=\pi 量
$$

这就是本题过程的过程方程，式中的常量 $\alpha$ 已在前面给出。

# 第三章 气体动理论 （理想气体动理论，麦克斯韦分布，玻尔兹曼分布，平均自由程，输运过程，布朗运动） 

【题 1】 在一个密闭容器内盛有水，未满，处于平衡状态。已知水在 $14^{\circ} \mathrm{C}$ 时的饱和蒸气压为 12.0 mmHg 。设水蒸气分子碰到水面后，都能进人水内，设饱和水蒸气可看作理想气体。试问在 $100^{\circ} \mathrm{C}$ 和 $14^{\circ} \mathrm{C}$ 时，单位时间内通过单位面积水面蒸发成为水蒸气的分子数之比 $n_{100}: n_{14}$ 为多大 (取 2 位有效数字)。
【分析】 在密闭容器内有水和水蒸气，达到平衡时，由水蒸发为水蒸气的分子数与由水蒸气进人水面的分子数相等，水面上的是饱和水蒸气。所以，为了计算由水蒸发为水蒸气的分子数只需计算由水蒸气进人水面的分子数即可。

由题设，水蒸气分子只要碰到水面便都可进人水内，因此，平均而言，在 $\mathrm{d} t$ 时间内通过 dS水面面积能进人水面的水蒸气分子数应正比于以 $\bar{v} \mathrm{~d} t$ 为长度、 $\mathrm{d} S$ 为底面积的柱体内的水蒸气分子数 $\mathrm{d} N$ 。显然， $\mathrm{d} N$ 与柱体体积 $\bar{v} \mathrm{~d} t \mathrm{~d} S$ 及水蒸气数密度 $n_{0}$ 有关，由题设水蒸气为理想气体，故 $n_{0}$ 与 $p 、 T$ 关系可知，且有 $\bar{v} \propto \sqrt{T}$ ，于是可知 $\mathrm{d} N$ 与 $p 、 T$ 的关系，从而可得出 $n_{100}$ 与 $n_{14}$ 之比。
【解】根据上述分析，在任意 $\mathrm{d} t$ 时间内，通过任意 $\mathrm{d} S$ 水面面积进人水面的水蒸气分子数 $\mathrm{d} N$正比于以 $\bar{v} \mathrm{~d} t$ 为长度、 $\mathrm{d} S$ 为底面积的柱体内的水蒸气分子数，设水蒸气分子的数密度为 $n_{0}$ ，则

$$
\mathrm{d} N=A n_{0} \bar{v} \mathrm{~d} t \mathrm{~d} S
$$

式中 $A$ 为比例系数。于是，单位时间通过单位水面面积进人水中的水蒸气分子数为

$$
n=\frac{\mathrm{d} N}{\mathrm{~d} t \mathrm{~d} S}=A n_{0} \bar{v}
$$

平均速率 $\bar{v}$ 与温度 $T$ 的关系为

$$
\bar{v}=B \sqrt{T}
$$

式中 $B$ 为比例系数。由题设，水蒸气为理想气体，其状态方程为

$$
p=n_{0} k T
$$

其中 $p$ 为压强， $k$ 为玻尔兹曼常数，即

$$
n_{0}=\frac{P}{k T}
$$

把上述 $\bar{v}$ 和 $n_{0}$ 的表达式代入 $n$ 的表达式，得

$$
n=A n_{0} \bar{v}=A \frac{p}{k T} B \sqrt{T}=C \frac{p}{\sqrt{T}}
$$

式中 $C=\frac{A B}{k}$ 为常量。
在 $100^{\circ} \mathrm{C}$ 即 $T=373 \mathrm{~K}$ 时，饱和水蒸气的压强为 $p_{100}=760 \mathrm{mmHg}$ 。在 $14^{\circ} \mathrm{C}$ 即 $T=287 \mathrm{~K}$时，由题设㑳和水蒸气的压强为 $p_{14}=12.0 \mathrm{~mmHg}$ ，代入上式，得

$$
n_{100}: n_{14}=\frac{p_{100}}{\sqrt{373}}: \frac{p_{14}}{\sqrt{287}}=\frac{760}{\sqrt{373}}: \frac{12}{\sqrt{287}}=56: 1
$$

[題 2] 如热图 3-2-1，一块平面薄的长方形匀质玻璃板，用两根质量可略的等长细线悬挂起来，玻璃板两个表面的半个面分别对称地涂了一层化学性质活泼的金属，整个装置放在容器之中，容器内有压强为 $p$ 的氟气。

设每一个氯气分子遇到金属分子后发生化学反应的概率为 $q(q<1)$ ，且 $q$ 为恒量、设玻璃板两边的氧气密度相等、设在化学反应过程中，氟气压强的减小可忽略不计。设玻璃板的质量为 $m$ ，有关儿何量如热图 3-2-1 所标示。

观察到玻璃板绕它的坚直轴转过一个很小的角度 $\alpha$ 后，处于平衡状态。试求 $\alpha$ 的大小。
【分析】与金属发生化学反应的氟气分子与玻璃板的碰撞可以看作是完全非弹性碰撞，不发生化学反应的氟分子与玻璃板的碰撞则是完全弹性的。由于两者给玻璃板的冲量不同，使玻璃板受到转动力矩的作用而扭转。

氯分子与未涂金属的玻璃表面之间只有弹性碰撞，形成的压强就是氟气的压强 $p$ 。氟分子与涂金属的玻璃表面之间既有完全非弹性碰撞又有弹性碰撞，两种碰撞对压强的贡献可由化学反应的概率 $q$ 来确定，这两种压强之和不同于 $p$ ，形成转动力矩，使玻璃板扭转。转动导致悬挂玻璃板的细线张力产生反向力矩。平衡时，两个力矩相等反向，由此可算出平衡时的转角 $\alpha$ 。
【解】 与金属发生化学反应的氯气分子与玻璃板的碰撞是完全非弹性的，不发生化学反应的氯分子与玻璃板的碰撞是弹性的。前者给玻璃板的冲量是后者的一半（平均而言）。

设氟气分子的数密度为 $n_{0}$ ，温度为 $T$ ，则未涂金属的玻璃表面因受氯气分子弹性碰撞所获得的压强，与容器器壁所获得的压强相同，均等于氟气的压强 $p$ ，故有

$$
p=n_{0} k T
$$

对于涂金属的玻璃表面，每一个氟分子遇金属发生化学反应的概率为 $q$ ，不发生化学反应的概率为 $(1-q)$ 。故 $n_{0}$ 中有 $q n_{0}$ 个分子与涂金属表面作完全非弹性碰撞，对该表面压强的贡献应为

$$
p_{1}^{\prime}=\frac{1}{2} q n_{0} k T=\frac{1}{2} q p
$$

在 $n_{0}$ 中有 $(1-q) n_{0}$ 个分子与涂金属表面作弹性碰撞，对该表面压强的贡献为

$$
p_{2}^{\prime}=(1-q) n_{0} k T=(1-q) p
$$

因此涂金属玻璃表面的压强为

$$
p^{\prime}=p_{1}^{\prime}+p_{2}^{\prime}=\left(1-\frac{q}{2}\right) p
$$

于是，不涂金属表面与涂金属表面的压强差为

$$
\Delta p=p-p^{\prime}=\frac{1}{2} q p
$$

如热图 3-2-2，上述压强差 $\Delta p$ 形成的力矩的大小为

$$
M^{\prime}=[\Delta p(b c)] b=\frac{1}{2} q b^{2} c p
$$

![img-308.jpeg](img-308.jpeg)

热图 3-2-2
![img-309.jpeg](img-309.jpeg)

热图 3-2-3

由于力矩 $M^{\prime}$ 的作用，使玻璃板转过一个小的角度 $\alpha$ ，如热图 3-2-3 所示。设悬挂玻璃板的细线中的张力为 $N$ ，由于扭转了 $\alpha$ 角，使得 $N$ 有水平分量 $N \sin \beta$ ，它产生的相应的力矩 $M$ 的大小为

$$
M=2[(N \sin \beta) a \sin \angle S A C]
$$

其中

$$
\angle S A C=\frac{\pi}{2}-\frac{\alpha}{2}
$$

代入, 得

$$
M=2 a N \sin \beta \cos \frac{\alpha}{2}
$$

由几何关系

$$
2 a \beta=\overparen{A C}=a a
$$

得

$$
\beta=\frac{\alpha}{2}
$$

因 $\alpha$ 很小，有

$$
\sin \beta=\sin \frac{\alpha}{2} \approx \frac{\alpha}{2}, \quad \cos \frac{\alpha}{2}=1
$$

故

$$
M=a N \alpha
$$

又由竖直方向受力平衡，有
由以上两式，得

$$
M=\frac{1}{2} m g a a
$$

平衡时，两力矩相等反向，

$$
M^{\prime}=M
$$

即

$$
\frac{1}{2} q b^{2} c p=\frac{1}{2} m g a a
$$

故平衡时转过的小角度 $a$ 为

$$
a=\frac{a b^{2} c p}{m g a}
$$

【题 3】如图，在真空中有一个质量为 $M$ 的试管，它被质量为 $m$ 的隔板等分为两部分，隔板封闭的那部分有质量为 $n \mathrm{~mol}$ ，温度为 $T$ ，摩尔质量为 $\mu$ 的单原子分子理想气体，故开隔板后，隔板无摩擦地直立向上移动，在隔板离开试管顶端后气体方始从试管逸出，设隔板开始运动时，试管静止，试求试管的最终速度，

设重力可忽略，设气体、隔板、试管三者之间的热量交换可忽略，设在隔板离开试管前，气体经历准静态过程。
【分析】初阅此题，可能不大习惯，
题设在真空中，又忽略重力，不妨设想试管在远离地球的太空之中，因而所谓直立、上下、静止或运动都是相对于观测者而言的。

故开隔板时，试管、隔板、空气（指整体的运动）都是静止的，由于外部是真
![img-310.jpeg](img-310.jpeg)

热图 3-3-1

空、隔板又无重量且能无摩擦地移动，气体将膨胀，隔板将上升，因设气体、隔板、试管三者间无热量交换，气体的膨胀是绝热的，又题设隔板离开试管前，气体经历准静态过程（这是简化假设，实际上气体的绝热膨胀应很快，并非准静态过程），所以是准静态绝热膨胀过程，可以采用绝热过程方程，通过绝热膨胀，气体温度降低，内能减少，因外部真空，又无重力，气体对外不作功，减少的内能将转化为隔板与试管的动能以及气体整体定向运动的动能，不难设想，当隔板受气体压力向上运动时，试管和气体（整体）应反向向下运动，由于没有任何外力，三者的总动量在运动过程中应守恒，即隔板向上运动的动量与试管和气体（整体）向下运动的动量应相等，由此即可确定隔板离开试管时，试管及所装气体（整体）的速度 $u_{1}$ ，以上可称之为过程 I 。

当隔板离开试管后，气体将陆续全部逸出试管，这时气体作绝热的自由膨胀，这是一种非准静态过程，绝热过程方程不再适用，在气体逸出过程中，作无规则热运动的气体分子将撞击试管的底部，使试管的速度进一步增大了 $u_{2}$ 。为求 $u_{2}$ ，可采用平均的方法，即以具有平均动能的分子来代替运动情况各异的各种实际分子，首先，可以认为在气体逸出过程中，有半数分子撞击试管底部一次，这是合理的，因为平均而言，向上和向下的分子应各占一半，向下运动的分子撞击试管底部一次后反向运动逸出，其次，尽管分子的速度各不相同，但平均而言，可以认为各分子均以方均根速率 $\sqrt{v^{2}}$ 运动，并以它在试管运动方向（取为 $x$ 方向）上的投影值即以 $\sqrt{v_{x}^{2}}$ 的速率撞击试管底部，再次，把气体分子看作弹性球，它撞击试管底部时作弹性碰撞。因此，每个分子撞击一次给予试管的冲量应等于分子碰撞前、后动量（确切地说，是动量的 $x$ 分量）的变化，显然，以上合理假设是计算 $u_{2}$ 的关键，舍此便无从着手，又，为了方便，可在以 $u_{1}$ 运动的参考系中计算 $u_{2}$ ，此为过程II。

在气体全部逸出后，试管最终的速度应为 $u=u_{1}+u_{2}$ 。
【解】过程 I：故开隔板，气体从初始的（ $T, V$ ）经绝热膨胀到隔板离开试管时的（ $T_{f}, V_{f}$ ），因是准静态过程，绝热过程方程适用，故有

$$
T V^{T-1}=T_{f} V_{f}^{T-1}
$$

其中

$$
V_{f}=2 V
$$

对于单原子分子理想气体，绝热指数

$$
\gamma=\frac{5}{3}
$$

由以上三式，得

$$
T_{f}=\frac{T}{2^{2 / 3}}
$$

气体内能的减少转化为隔板、试管以及气体整体定向运动的动能

$$
\Delta U=n C_{V} \Delta T=\frac{3}{2} R n\left(T-T_{f}\right)=\frac{1}{2} m v^{2}+\frac{1}{2}(n \mu+M) u_{1}^{2}
$$

式中 $v$ 是隔板 $m$ 在离开试管时向上运动的速度， $u_{1}$ 是同一时刻试管 $M$ 和气体（质量为 $n \mu$ ）整体向下定向运动的速度。

隔板、试管、气体整体开始均静止，尔后隔板向上运动，试管与气体整体向下运动，因无外力，在此过程系统的动量守恒，故在隔板离开试管时，有

$$
m v=(n \mu+M) u_{1}
$$

由以上三式，消去 $T_{1}$ 和 $v$ ，得

$$
u_{1}=\left.\frac{3\left(2^{2 / 3}-1\right)}{2^{2 / 3}} \cdot \frac{m n R T}{(n \mu+M)(m+n \mu+M)}\right]^{\frac{1}{2}}
$$

过程II：从隔板离开试管到气体全部从试管逸出、取以 $u_{1}$ 运动的参考系、假设在气体逸出过程中有半数分子即 $\frac{1}{2} n N_{0}$ 个分子撞击试管底部， $N_{0}$ 为阿伏伽德罗常量，假设平均而言，分子的速率为方均根速率，即

$$
v_{\text {分 } \mathrm{F}}=\sqrt{v^{2}}=\sqrt{\frac{3 R T_{f}}{\mu}}
$$

则 $v_{\text {分子 }}$ 在试管运动方向（取为 $x$ 方向）上的投影为

$$
\left(v_{\text {分 } \mathrm{F}}\right)_{x}=\sqrt{v_{x}^{2}}=\sqrt{\frac{1}{3} v^{2}}
$$

上式用到了

$$
\overline{v_{x}^{2}}=\overline{v_{y}^{2}}=\overline{v_{x}^{2}}=\frac{1}{3}\left(\overline{v_{x}^{2}+v_{y}^{2}+v_{x}^{2}}\right)=\frac{1}{3} \overline{v^{2}}
$$

于是，一个分子撞击试管底部一次，传递给试管的动量为

$$
p=2 m_{\text {分子 }}\left(v_{\text {分 } \mathrm{F}}\right)_{x}=\frac{2 \mu}{N_{0}} \sqrt{\frac{1}{3} \overline{v^{2}}}
$$

半数分子各撞击试管底部一次给予试管的总动量为

$$
P=\frac{1}{2} n N_{0} p=\frac{n N_{0}}{2} \cdot \frac{2 \mu}{N_{0}} \sqrt{\frac{1}{3} \overline{v^{2}}}=n \sqrt{\mu R T_{f}}
$$

故由于全部气体逸出使试管获得的速度为

$$
u_{2}=\frac{P}{M}=\frac{n}{M} \sqrt{\mu R T_{f}}=\frac{n}{2^{1 / 3} M} \sqrt{\mu R T}
$$

因此，在隔板开始运动时试管、隔板、气体整体均为静止的参考系中，从隔板开始运动到隔板离开试管直至气体全部逸出，试管最终的速度为

$$
u=u_{1}+u_{2}=\left[\frac{3\left(2^{2 / 3}-1\right) m n R T}{2^{2 / 3}(n \mu+M)(m+n \mu+M)}\right]^{\frac{1}{2}}+\frac{n \sqrt{\mu R T}}{2^{1 / 3} M}
$$

【题 4】 在一柱形容器内，有大量相同的小球沿着容器的长度方向往返运动。小球可视为质点，小球之间以及小球与容器端面（与其长度方向垂直）之间作弹性碰撞、小球的速率以及向前还是向后运动都是无规的。可引入"温度" $T$ 的概念，它是由小球的平均动能 $\varepsilon$ 定义的，为 $\varepsilon=\frac{1}{2} k T$ ，式中 $k$ 是玻尔兹曼常数。今在容器的一端安装平面弹性活塞，并使活塞缓慢地沿容器长度方向向内推进，运动的小球因与活塞作弹性正碰撞增加了动能，从而使系统的"温度"升高。

上述模型实际上就是单原子分子理想气体一维热运动绝热压缩的微观模型。
试导出在活塞缓慢推进过程中，"温度" $T$ 与体积 $V$ 的关系式（此即单原子分子理想气体的一维绝热过程方程），设重力，引力，各种阻力和摩擦力均可忽略。
【分析】 容器中的小球相当于气体分子，其间除弹性正碰撞外，并无相互作用，且运动是无规的，这正是理想气体分子的行为。小球看作质点，无内部结构，表明小球"分子"是单原子分子。因此，完全可以仿照气体分子运动论的做法，引入表征大量小球系统平均运动激烈程度的"温度"概念。随着活塞的缓缓推进，外界所作的功增大了与活塞碰撞的小球的动能，再通过小球之间的碰撞使系统的动能即温度增长，同时体积减少，这相当于绝热压缩。

在活塞推进的过程中，计算与之碰撞的小球速度、动能的变化与容器体积变化的关系，取平均值，即可得出用 $T-V$ 关系表示的一维绝热方程。

理想气体的绝热方程是熟知的，它在一维情形的结果应与上述计算相符，可以此作检验。
【解】由于小球均相同，其间的碰撞是弹性正碰撞，故碰后两球交换速度。即速度为 $v$ 的小球与另一小球碰撞后，将把速度 $v$ 传递给后者，下文速度为 $v$ 的小球实际上指的是"速度 $v$ 的携带者"。由于小球是质点，碰后，速度携带者的位置并无变化。

沿容器长度方向取 $x$ 轴，设容器长度为 $x$ ，活塞推进速度为 $u$ （因缓慢推进，故 $u \ll v$ ）。则速度为 $v$ 的小球经 $\Delta t=\frac{2 x}{v}$ 时间与活塞相碰一次。碰后，小球相对活塞的速度从 $-v^{\prime}=-(v+u)$变为 $v^{\prime}=(v+u)$ ，在地面参考系中小球的速度则从 $\left(-v^{\prime}+u\right)=-v$ 变为 $\left(v^{\prime}+u\right)=(v+2 u)$ 。因此，由于活塞移动而引起的小球速度变化率为

$$
\frac{\mathrm{d} v}{\mathrm{~d} t}=\frac{\Delta v}{\Delta t}=\frac{2 u}{\frac{2 x}{v}}=\frac{u v}{x}
$$

随着活塞的推进，在 $\mathrm{d} t$ 时间内，容器缩短了一 $\mathrm{d} x$ ，即

$$
u \mathrm{~d} t=-\mathrm{d} x
$$

由以上两式，得

$$
x \mathrm{~d} v+v \mathrm{~d} x=0
$$

小球的动能为

$$
\varepsilon=\frac{1}{2} m v^{2}
$$

即

$$
\begin{aligned}
v & =\sqrt{\frac{2 \epsilon}{m}} \\
\mathrm{~d} v & =\frac{\mathrm{d} \epsilon}{\sqrt{2 m \epsilon}}
\end{aligned}
$$

代入(1)式,得

$$
x \mathrm{~d} \epsilon+2 \epsilon \mathrm{~d} x=0
$$

（1）.（2）式就是在活塞推进过程中，速度为 $v$ 的小球的速度、动能的变化与容器长度变化之间的关系。

把（2）式对具有各种速度、动能的小球作平均，得

$$
x \mathrm{~d} \ell+2 \ell \mathrm{~d} x=0
$$

对于大量小球的系统，可用平均动能 $\ell$ 定义系统的"温度" $T$ ，为

$$
\ell=\frac{1}{2} k T
$$

代入(3)式,得

$$
x \mathrm{~d} T+2 T \mathrm{~d} x=0
$$

设容器底面积为 $S$ ，则容器体积 $V=S x$ ，上式可改写为

$$
V \mathrm{~d} T+2 T \mathrm{~d} V=0
$$

或

$$
\frac{\mathrm{d} T}{T}+\frac{2 \mathrm{~d} V}{V}=0
$$

积分,得

$$
\ln \frac{T}{T_{0}}+\ln \frac{V^{2}}{V_{0}^{2}}=0
$$

式中 $T_{0}$ 和 $V_{0}$ 是小球系统初态的温度和体积，即

$$
T V^{2}=T_{0} V_{0}^{2}=\pi \text { 量 }
$$

这就是活塞缓慢推进过程中，小球系统的温度 $T$ 与体积 $V$ 的关系，亦即单原子分子理想气体的一维绝热方程。

下面讨论理想气体绝热过程方程在一维运动情形的结果，它应与（4）式相符。
理想气体的绝热过程方程为

$$
T V^{\gamma-1}=\pi \text { 量 }
$$

式中的绝热指数 $\gamma$ 为

$$
\gamma=\frac{C_{p}}{C_{V}}=\frac{\frac{i+2}{2} R}{\frac{L}{2} R}=\frac{i+2}{i}=\frac{(t+r+2 s)+2}{t+r+2 s}
$$

式中 $C_{p}$ 和 $C_{V}$ 是理想气体定压和定体摩尔热容量， $t, r, s$ 分别是气体分子的平动、转动、振动自由度数， $i=(t+r+2 s)$ 。对于单原子分子， $t=3, r=0, s=0$ 。若限制作一维运动，则 $t=1$ 。因而，对于作一维运动的单原子分子，有

$$
\begin{gathered}
t=1, \quad r=0, \quad s=0 \\
i=t+r+2 s=1, \quad \gamma=\frac{i+2}{i}=3
\end{gathered}
$$

代入(5)式,得

$$
T V^{2}=\text { 常量 }
$$

这就是用 $T-V$ 关系表示的单原子分子理想气体的一维绝热方程，与（4）式相符。

【题 5】空腔内的热辐射可以当作光子气来处理，设腔的内表面对光子是完全反射面。

1. 如果在某温度下，腔内热辐射已处于平衡状态，此时光子气的能量密度为 $u$ 。试求光子气的压强 $p$ 。
2. 试证明 $u$ 只是温度 $T$ 的函数。
3. 试证明 $p \propto T^{4}$ 。
4. 试导出光子气在绝热过程中压强 $p$ 与空腔体积 $V$ 之间满足的关系式（绝热过程方程）。

【分析】推导平衡态理想气体压强公式时得出 $p=\frac{1}{3} \frac{N}{V} m \overline{v^{2}}$ ，对光子气应有类似结果。因光子速度为 $c$ ，式中 $\overline{v^{3}}$ 应为 $c^{2}$ ；因光子能量的 $h \nu$ ，式中 $m$ 应为 $\frac{h \nu}{c^{2}}=m_{\nu}$ ；式中分子数 $N$ 则应为频率为 $\nu$的光子数 $N_{\nu}$ 。于是得出 $p_{\nu}=\frac{1}{3} n_{\nu} h \nu=\frac{1}{3} u_{\nu}$ （ $u_{\nu}$ 是光子气中频率为 $\nu$ 的光子的能量密度），再对各种可能的 $\nu$ 求和，即得所求。

为证明 $u=u(T)$ ，可采用反证法。即假设 $u$ 不仅与 $T$ 还与其他因素有关，据此，设计一一个过程，由于其结论违背热力学第二定律，证明前提不对。

第1问得出 $p=\frac{1}{3} u$ ，第 2 问得出 $u=u(T)$ ，故光子气内能 $U=u(T) V$ 。为了寻找光子气的 $p$ 和 $T$ 的关系，从各种热力学公式中找到 $\left(\frac{\partial U}{\partial V}\right)_{T}=T\left(\frac{\partial p}{\partial T}\right)_{V}-p$ ，它是合用的，因为左边为 $u$ ，右边第一项包含 $T$ 和 $\frac{\mathrm{d} u}{\mathrm{~d} T}$ ，右边第二项只含 $u$ ，于是 $u(T)$ 即 $p(T)$ 可求。

利用绝热条件及光子气内能的表达式即可导出光子气的绝热过程方程。
【解】1. 平衡态理想气体的压强公式为

$$
p=\frac{1}{3} \frac{N}{V} m \overline{v^{2}}
$$

对于光子气中频率为 $\nu$ 的光子，上式中的 $p 、 n=\frac{N}{V} ， m 、 \overline{v^{2}}$ 应分别为 $p_{\nu} 、 n_{\nu}=\frac{N_{\nu}}{V} ， \frac{h \nu}{c^{2}} 、 c^{2}$ ，于是得出

$$
p_{\nu}=\frac{1}{3} n_{\nu} \frac{h \nu}{c^{2}} c^{2}=\frac{1}{3} n_{\nu} h \nu=\frac{1}{3} u_{\nu}
$$

式中 $u_{\nu}=u_{\nu} h \nu$ 是频率为 $\nu$ 的光子的能量密度，对各种可能的频率 $\nu$ 求和，得出光子气的总压强为

$$
p=\sum p_{\nu}=\frac{1}{3} \sum u_{\nu}=\frac{1}{3} u
$$

式中 $u=\sum u_{n}$ 是光子气的能量密度。
2. 设 $u$ 不仅与温度 $T$ ，还与空腔体积 $V$ 及腔壁材料性质有关，则总可取温度相同而体积或腔壁材料不同的两个空腔，其间用小孔连通，在小孔中装上可以移动的无摩擦活塞。此时因活塞两边光子气的能量密度 $u$ 不同，由第 1 问的结果 $p=\frac{1}{3} u$ ，两边光子气的压强便不同，于是活塞将被推动。这相当于从单一热源（由腔构成的等温系统）吸热，全部变为对外作功而不产生其他影响。显然违背了热力学第二定律。因此，前提有误，即 $u$ 与空腔体积 $V$ 及腔壁材料无关， $u$ 只能与温度 $T$ 有关，即

$$
u=u(T)
$$

3. 设空腔体积为 $V$ ，则光子气的总能量（内能）为

$$
U=u(T) V
$$

由热力学第二定律，

$$
\mathrm{d} U=T \mathrm{~d} S-p \mathrm{~d} V
$$

得

$$
\left(\frac{\partial U}{\partial V}\right)_{T}=\left(T\left(\frac{\partial S}{\partial V}\right)_{T}-p\right.
$$

由

$$
\mathrm{d} F=\mathrm{d}(U-T S)=-S \mathrm{~d} T-p \mathrm{~d} V
$$

得

$$
\left(\frac{\partial S}{\partial V}\right)_{T}=\left(\frac{\partial p}{\partial T}\right)_{V}, \quad\left(\frac{\partial U}{\partial V}\right)_{T}=T\left(\frac{\partial p}{\partial T}\right)_{V}-p
$$

应用于光子气，利用第 1.2 问的结果，有

$$
\left(\frac{\partial U}{\partial V}\right)_{T}=u, \quad\left(\frac{\partial p}{\partial T}\right)_{V}=\frac{1}{3} \frac{\mathrm{~d} u}{\mathrm{~d} T}, \quad p=\frac{1}{3} u
$$

代入，得

$$
u=\frac{1}{3} T \frac{\mathrm{~d} u}{\mathrm{~d} T}-\frac{1}{3} u
$$

即

$$
\frac{\mathrm{d} u}{u}=4 \frac{\mathrm{~d} T}{T}
$$

积分，得

$$
u=u_{0}\left(\frac{T}{T_{0}}\right)^{4}
$$

即

$$
u \propto T^{4}
$$

故光子气的压强 $p$ 与温度 $T$ 的关系为

$$
p \propto T^{4}
$$

4. 由热力学第一定律，在绝热过程中，有

$$
\mathrm{d} U=-p \mathrm{~d} V
$$

它用于光子气，因 $U=u(T) V$ ，故有

$$
V \mathrm{~d} u+u \mathrm{~d} V=-p \mathrm{~d} V
$$

把第 1 问的结果 $u=3 p$ 代入，得

$$
3 V \mathrm{~d} p+3 p \mathrm{~d} V=-p \mathrm{~d} V
$$

即

$$
\frac{\mathrm{d} p}{p}=-\frac{4}{3} \frac{\mathrm{~d} V}{V}
$$

积分，得光子气的绝热过程方程为

$$
p V^{\frac{4}{3}}=p_{0} V_{0}^{\frac{4}{3}}=\text { 常量 }
$$

【题6】混合理想气体处于温度为 $T$ 的平衡态，其中任意两个质量分别为 $m_{1}$ 和 $m_{2}$ 的分子之间的相对速度定义为 $\boldsymbol{u}=\boldsymbol{v}_{1}-\boldsymbol{v}_{2}$ ，式中 $\boldsymbol{v}_{1}$ 和 $\boldsymbol{v}_{2}$ 分别是 $m_{1}$ 和 $m_{2}$ 的速度，试求：相对速率的方均棍值和平均值，即求 $\sqrt{u^{2}}$ 和 $\bar{u}$ 。
【分析】麦克斯韦速度分布或速率分布可解释为在平衡态理想气体中每一个分子具有某种速度或速率的概率分布。对于混合理想气体，只要总的分子数足够多，则每一个分子的速度分布或速率分布都具有麦克斯韦分布函数的形式，而与这个分子所属成分的分子数是否足够多无关。因此本题的结果也适用于理想气体中混杂有个别杂质分子的情形。

考虑由 $m_{1}$ 和 $m_{2}$ 两个分子组成的系统，不难找出 $v_{1} 、 v_{2}$ 与相对速度 $u$ 、质心速度 $V$ 之间的关系。换言之，既可用 $\left(v_{1}, v_{2}\right)$ 又可用 $(u, V)$ 来描述系统的运动。

由于系统中 $m_{1}$ 处于 $v_{1}$ 到 $\left(v_{1}+\mathrm{d} v_{1}\right), m_{2}$ 处于 $v_{2}$ 到 $\left(v_{2}+\mathrm{d} v_{2}\right)$ 的概率为 $f\left(v_{1}\right) \mathrm{d} v_{1} f\left(v_{2}\right)$ $\mathrm{d} v_{2}$ ，利用 $v_{1} 、 v_{2}$ 与 $u, v$ 的关系，以及把 $\mathrm{d} v_{1} \mathrm{~d} v_{2}$ 变换到 $\mathrm{d} u \mathrm{~d} v$ 的雅可比行列式，可以得出系统处于 $u$ 到 $(u+\mathrm{d} u), V$ 到 $(V+\mathrm{d} V)$ 的概率，并进而得出 $f(u)$ 仍是麦克斯韦分布，于是 $f(u)$ 可知， $\bar{u}$ 可求。
【解】考虑质量为 $m_{1} 、 m_{2}$ ，速度为 $v_{1} 、 v_{2}$ 的两个分子组成的系统，系统的折合质量 $\mu$ 和质心速度 $V$ 为

$$
\begin{gathered}
\mu=\frac{m_{1} m_{2}}{m_{1}+m_{2}} \\
\boldsymbol{V}=\frac{m_{1} v_{1}+m_{2} v_{2}}{m_{1}+m_{2}}
\end{gathered}
$$

两分子之间的相对速度 $u$ 为

$$
u=v_{1}-v_{2}
$$

显然，系统的动能既等于两分子的动能之和，也等于质心的动能 $E_{\mathrm{k}}(C)$ 和两分子相对质心的动能 $E_{\mathrm{k}}(i)$ 之和，即

$$
\frac{1}{2} m_{1} v_{1}^{2}+\frac{1}{2} m_{2} v_{2}^{2}=E_{\mathrm{k}}(C)+E_{\mathrm{k}}(i)
$$

因

$$
\begin{aligned}
E_{\mathrm{h}}(C) & =\frac{1}{2}\left(m_{1}+m_{2}\right) V^{2} \\
E_{\mathrm{h}}(i) & =\frac{1}{2} m_{1}\left(v_{1}-V\right)^{2}+\frac{1}{2} m_{2}\left(v_{2}-V\right)^{2} \\
& =\frac{1}{2} m_{1}\left(v_{1}-\frac{m_{1} v_{1}+m_{2} v_{2}}{m_{1}+m_{2}}\right)^{2}+\frac{1}{2} m_{2}\left(v_{2}-\frac{m_{1} v_{1}+m_{2} v_{2}}{m_{1}+m_{2}}\right)^{2} \\
& =\frac{m_{1} m_{2}^{2}}{2\left(m_{1}+m_{2}\right)^{2}}\left(v_{1}-v_{2}\right)^{2}+\frac{m_{1}^{2} m_{2}}{2\left(m_{1}+m_{2}\right)^{2}}\left(v_{2}-v_{1}\right)^{2}=\frac{1}{2} \mu u^{2}
\end{aligned}
$$

上述运算中用到了（1）、（2）、（3）式。因此

$$
\frac{1}{2} m_{1} v_{1}^{2}+\frac{1}{2} m_{2} v_{2}^{2}=\frac{1}{2}\left(m_{1}+m_{2}\right) V^{2}+\frac{1}{2} \mu u^{2}
$$

（2）、（3）、（4）式给出了 $v_{1} 、 v_{2}$ 与 $u 、 V$ 的关系。
计算 $\sqrt{u^{2}}$ 。
由（3）式，得

$$
u^{2}=\overline{u \cdot u}=\overline{\left(v_{1}-v_{2}\right)^{2}}=\overline{v_{1}^{2}}-\overline{2 v_{1} \cdot v_{2}}+\overline{v_{2}^{2}}
$$

因 $v_{1}$ 与 $v_{2}$ 彼此独立，且各自的平均值为零 $\left(\overline{v_{1}}=0, \overline{v_{2}}=0\right)$ ，故 $\overline{v_{1} \cdot v_{2}}=0$ ，又 $v_{1}$ 与 $v_{2}$ 遵循各自的麦克斯韦分布，故 $\overline{v_{1}^{2}}=\frac{3 k T}{m_{1}}, \overline{v_{2}^{2}}=\frac{3 k T}{m_{2}}$ ，代入上式，得

$$
\overline{u^{2}}=\frac{3 k T}{m_{1}}+\frac{3 k T}{m_{2}}=\frac{3 k T}{m_{1} m_{2}}\left(m_{1}+m_{2}\right)=\frac{3 k T}{\mu}
$$

即

$$
\sqrt{u^{2}}=\sqrt{\frac{3 k T}{\mu}}
$$

可见两分子相对速率的方均根值等于具有折合质量 $\mu$ 的分子的方均根速率。
再计算 $\bar{u}$ 。
系统中 $m_{1}$ 的速度在 $v_{1}$ 到 $\left(v_{1}+\mathrm{d} v_{1}\right), m_{2}$ 的速度在 $v_{2}$ 到 $\left(v_{2}+\mathrm{d} v_{2}\right)$ 的概率为

$$
f\left(v_{1}\right) \mathrm{d} v_{1} f\left(v_{2}\right) \mathrm{d} v_{2}
$$

式中 $f\left(v_{1}\right)$ 和 $f\left(v_{2}\right)$ 均为麦克斯韦速度分布函数。
利用 $v_{1} 、 v_{2}$ 与 $u 、 V$ 的关系，上式中 $f\left(v_{1}\right)=f\left[v_{1}(u, V)\right]=G(u, V), f\left(v_{2}\right)=f\left[v_{2}(u\right.$ ， $\left.\boldsymbol{V})\right]=\boldsymbol{H}(\boldsymbol{u}, \boldsymbol{V})$ 。另外，可利用雅可比行列式把 $\mathrm{d} v_{1} \mathrm{~d} v_{2}$ 化为 $\mathrm{d} u \mathrm{~d} \boldsymbol{V}$ ，即 $\mathrm{d} v_{1} \mathrm{~d} v_{2}=\mathrm{d} v_{1 x} \mathrm{~d} v_{1 y} \mathrm{~d} v_{1 z}$ $\mathrm{d} v_{2 x} \mathrm{~d} v_{2 y} \mathrm{~d} v_{2 x}=|J| \mathrm{d} u \mathrm{~d} \boldsymbol{V}=|J| \mathrm{d} u_{x} \mathrm{~d} u_{y} \mathrm{~d} u_{z} \mathrm{~d} V_{x} \mathrm{~d} V_{y} \mathrm{~d} V_{z}$ 。这样，系统的相对速度在 $u$ 到（ $u+$ $\mathrm{d} u$ )、质心速度在 $V$ 到 $(V+\mathrm{d} V)$ 的概率为

$$
f\left[v_{1}(u, V)\right] f\left[v_{2}(u, V)\right]|J| \mathrm{d} u \mathrm{~d} \boldsymbol{V}
$$

先计算（6）式中的雅可比行列式 $J$ ，它是偏导数的 $6 \times 6$ 行列式，可简写为

$$
J=\frac{\partial\left(v_{1}, v_{2}\right)}{\partial(u, v)}
$$

由于直接计算 $J$ 比较麻烦，取逆变换即 $\mathrm{d} u \mathrm{~d} \boldsymbol{V}=\left|J^{\prime}\right| \mathrm{d} v_{1} \mathrm{~d} v_{2}$ ，相应的雅可比行列式 $J^{\prime}$ 为

$$
J^{\prime}=\frac{\partial(u, V)}{\partial\left(v_{1}, v_{2}\right)}
$$

两次正、逆变换的结果是恢复原状，故

$$
\left|J\left|\left|J^{\prime}\right|\right|=1\right.
$$

写出 $J^{\prime}$ 的表达式，利用（2）、（3）式及行列式的运算法则，计算 $J^{\prime}$ 如下。

$$
J^{\prime}=\left\lvert\, \begin{array}{cccccccc}
\frac{\partial u_{x}}{\partial v_{1 x}} & \frac{\partial u_{x}}{\partial v_{1 y}} & \frac{\partial u_{x}}{\partial v_{1 x}} & \frac{\partial u_{x}}{\partial v_{2 x}} & \frac{\partial u_{x}}{\partial v_{2 y}} & \frac{\partial u_{x}}{\partial v_{2 x}} \\
\frac{\partial u_{x}}{\partial v_{1 x}} & \frac{\partial u_{x}}{\partial v_{1 y}} & \frac{\partial u_{x}}{\partial v_{1 x}} & \frac{\partial u_{y}}{\partial v_{2 x}} & \frac{\partial u_{x}}{\partial v_{2 y}} & \frac{\partial u_{x}}{\partial v_{2 x}} \\
\frac{\partial u_{x}}{\partial v_{1 x}} & \frac{\partial u_{x}}{\partial v_{1 y}} & \frac{\partial u_{x}}{\partial v_{1 x}} & \frac{\partial u_{x}}{\partial v_{2 x}} & \frac{\partial u_{x}}{\partial v_{2 y}} & \frac{\partial u_{x}}{\partial v_{2 x}} \\
\frac{\partial V_{x}}{\partial v_{1 x}} & \frac{\partial V_{x}}{\partial v_{1 y}} & \frac{\partial V_{x}}{\partial v_{1 x}} & \frac{\partial V_{x}}{\partial v_{2 x}} & \frac{\partial V_{x}}{\partial v_{2 y}} & \frac{\partial V_{x}}{\partial v_{2 x}} \\
\frac{\partial V_{x}}{\partial v_{1 x}} & \frac{\partial V_{x}}{\partial v_{1 y}} & \frac{\partial V_{x}}{\partial v_{1 x}} & \frac{\partial V_{x}}{\partial v_{2 x}} & \frac{\partial V_{x}}{\partial v_{2 y}} & \frac{\partial V_{x}}{\partial v_{2 x}}
\end{array}\right\}
$$

$$
\begin{aligned}
& =\left\lvert\, \begin{array}{cccccccc}
1 & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & -1 \\
\frac{m_{1}}{m_{1}+m_{2}} & \frac{m_{2}}{m_{1}+m_{2}} & 0 & 0 & 0 & 0 \\
0 & 0 & \frac{m_{1}}{m_{1}+m_{2}} & \frac{m_{2}}{m_{1}+m_{2}} & 0 & 0 \\
0 & 0 & 0 & 0 & \frac{m_{1}}{m_{1}+m_{2}} & \frac{m_{2}}{m_{1}+m_{2}}
\end{array}\right\}
\end{aligned}
$$

物理学难题集萃（增订本）

$$
\begin{aligned}
& =\left|\begin{array}{cccccc}
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
\frac{m_{1}}{m_{1}+m_{2}} & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & \frac{m_{1}}{m_{1}+m_{2}} & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & \frac{m_{1}}{m_{1}+m_{2}} & 1
\end{array}\right| \\
& =\left|\begin{array}{cccccc}
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
\frac{m_{1}}{m_{1}+m_{2}} & 0 & 0 & 1 & 0 & 0 \\
0 & \frac{m_{1}}{m_{1}+m_{2}} & 0 & 0 & 1 & 0 \\
0 & 0 & \frac{m_{1}}{m_{1}+m_{2}} & 0 & 0 & 1
\end{array}\right| \\
& \text { 即 } \\
& \left|J^{\prime}\right|=1
\end{aligned}
$$

故

$$
|J|=1
$$

再算（6）式中的分布函数，因 $f\left(\boldsymbol{v}_{1}\right)$ 与 $f\left(\boldsymbol{v}_{2}\right)$ 均为麦克斯韦速度分布函数，故有

$$
\begin{aligned}
f\left(v_{1}\right) f\left(v_{2}\right) & =\left(\frac{m_{1}}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} m_{1} v_{1}^{2} / k T}\left(\frac{m_{2}}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} m_{2} v_{2}^{2} / k T} \\
& =\left(\frac{m_{1}+m_{2}}{2 \pi k T}\right)^{\frac{3}{2}}\left[\frac{m_{1} m_{2}}{\left(m_{1}+m_{2}\right) 2 \pi k T}\right]^{\frac{3}{2}} \mathrm{e}^{-\left(\frac{1}{2} m_{1} v_{1}^{2}+\frac{1}{2} m_{2} v_{2}^{2}\right) / k T} \\
& =\left(\frac{m_{1}+m_{2}}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2}\left(m_{1}+m_{2}\right) V^{2} / k T}\left(\frac{\mu}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} \mu \mu^{2} / k T}
\end{aligned}
$$

上式最后一个等式用到了（1）式和（4）式，把它变为 $V$ 和 $u$ 的函数。
把上面得出的 $|J|=1$ 和 $f\left(v_{1}\right) f\left(v_{2}\right)$ 的结果代入（6）式，得出系统的相对速度在 $\boldsymbol{u}$ 到（ $\boldsymbol{u}+$ $\mathrm{d} \boldsymbol{u}$ ），质心速度在 $\boldsymbol{V}$ 到（ $\boldsymbol{V}+\mathrm{d} \boldsymbol{V}$ ）的概率为

$$
\left[\left(\frac{m_{1}+m_{2}}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2}\left(m_{1}+m_{2}\right) V^{2} / k T} \mathrm{~d} \boldsymbol{V}\right] \cdot\left[\left(\frac{\mu}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} \mu \mu^{2} / k T} \mathrm{~d} \boldsymbol{u}\right]
$$

上式第一个因子表明系统的质心速度 $\boldsymbol{V}$ 遵循麦克斯韦速度分布，第二个因子表明相对速度 $\boldsymbol{u}$ 遵循的也是麦克斯韦速度分布。由于 $\boldsymbol{u}$ 和 $\boldsymbol{V}$ 是两个独立的因素，故系统相对速度在 $\boldsymbol{u}$ 到 $(\boldsymbol{u}+\mathrm{d} \boldsymbol{u})$的概率为上式对一切可能的 $\boldsymbol{V}$ 积分, 即

$$
\begin{gathered}
f(\boldsymbol{u}) \mathrm{d} \boldsymbol{u}=\left[\int\left(\frac{m_{1}+m_{2}}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2}\left(m_{1}+m_{2}\right) v^{2} / k T} \mathrm{~d} \boldsymbol{V}\right] \cdot\left[\left(\frac{\mu}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} \mu \mu^{2} / k T} \mathrm{~d} \boldsymbol{u}\right] \\
=\left(\frac{\mu}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} \mu \mu^{2} / k T} \mathrm{~d} \boldsymbol{u}
\end{gathered}
$$

因此，

$$
f(\boldsymbol{u})=\left(\frac{\mu}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} \mu \mu^{2} / k T}
$$

于是，相对速率的概率分布函数 $f(u)$ 为麦克斯韦速率分布，即

$$
f(u)=4 \pi\left(\frac{\mu}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-\frac{1}{2} \mu \mu^{2} / k T} u^{2}
$$

由此，相对速率的平均值为

$$
\bar{u}=\sqrt{\frac{8 k T}{\pi \mu}}
$$

相当于一个具有折合质量 $\mu$ 的分子的平均速率。
讨论. 若 $m_{1}=m_{2}=m$ ，则 $\mu=\frac{m}{2}, \boldsymbol{v}_{1}$ 和 $\boldsymbol{v}_{2}$ 可统一表为 $\boldsymbol{v}$ ，于是，由（5）式和（7）式，得

$$
\sqrt{\overline{u^{2}}}=\sqrt{2} \sqrt{v^{2}}, \quad \bar{u}=\sqrt{2} \bar{v}
$$

若 $m_{2} \gg m_{1}$, 则 $\mu \approx m_{1}$, 于是有

$$
\sqrt{u^{2}}=\sqrt{v_{1}^{2}}, \quad \bar{u} \approx \bar{v}_{1}
$$

可见当 $m_{2}$ 远大于 $m_{1}$ 时，平均而言， $m_{1}$ 的速率比 $m_{2}$ 的速率大得多，在计算 $\sqrt{u^{2}}$ 和 $\bar{u}$ 时， $m_{2}$ 可以近似看作是"静止"的。

另外，由（1）式

$$
\frac{1}{\mu}=\frac{1}{m_{1}}+\frac{1}{m_{2}}
$$

因此，（5）式和（7）式也可表为

$$
\begin{aligned}
& \sqrt{u^{2}}=\sqrt{\frac{3 k T}{\mu}}=\sqrt{\frac{3 k T}{m_{1}}+\frac{3 k T}{m_{2}}}=\sqrt{v_{1}^{2}+v_{2}^{2}} \\
& \bar{u}=\sqrt{\frac{8 k T}{\pi \mu}}=\sqrt{\frac{8 k T}{\pi m_{1}}+\frac{8 k T}{\pi \pi v_{2}}}=\sqrt{\left(\bar{v}_{1}\right)^{2}+\left(\bar{v}_{2}\right)^{2}}
\end{aligned}
$$

【图7】理想气体处于平衡态，其分子平动动能表为 $E$ ，分子最概然平动动能表为 $E_{\mathrm{p}}$ ，与 $E_{\mathrm{p}}$ 相应的平动速率表为 $v_{0}$ ，试求 $v_{0}$ 与最概然速率 $v_{\mathrm{p}}$ 的比值。
【分析】 如所周知，最概然速率 $v_{p}$ 是相对气体分子速率分布函数而言的，同样，最概然平动动能 $E_{p}$ 是相对气体分子平动动能的分布函数而言的。因此，为求 $E_{\mathrm{p}}$ ，首先需要由麦克斯韦速率分布函数 $f(v)$ 导出气体分子平动动能的分布函数 $f(E)$ ，其极值相应的就是最概然平动动能 $E_{\mathrm{p}}$ 。平动动能 $E$ 与分子速率 $v$ 的关系是 $E=\frac{1}{2} m v^{2}$ ，从而 $\mathrm{d} E$ 与 $\mathrm{d} v$ 的关系为 $\mathrm{d} E=m v \mathrm{~d} v=$ $\sqrt{2 m E} \mathrm{~d} v$ （ $m$ 是分子质量）。分子平动动能处在 $E$ 与 $(E+\mathrm{d} E)$ 的概率是 $f(E) \mathrm{d} E$ ，分子速率处在 $v$ 和 $(v+\mathrm{d} v)$ 的概率是 $f(v) \mathrm{d} v$ ，其间必有

$$
f(E) \mathrm{d} E=f(v) \mathrm{d} v
$$

由此，可从 $f(v)$ 求得 $f(E) \cdot f(E)$ 的极大值对应的就是 $E_{\mathrm{p}}$ ，相应的速率为 $v_{0}$ ，于是 $v_{0}$ 与 $v_{\mathrm{p}}$ 之比川得。
【解】平动动能 $E$ 与速率 $v$ 的关系是

$$
E=\frac{1}{2} m v^{2}
$$

故

$$
\mathrm{d} E=m v \mathrm{~d} v=\sqrt{2 m E} \mathrm{~d} v
$$

平衡态理想气体分子平动动能分布函数 $f(E)$ 与速率分布函数 $f(v)$ 的关系是

$$
f(E) \mathrm{d} E=f(v) \mathrm{d} v
$$

由以上三式，得

$$
\begin{aligned}
f(E) & =f(v) \frac{\mathrm{d} v}{\mathrm{~d} E}=\frac{f(v)}{\sqrt{2 m E}} \\
& =4 \pi\left(\frac{m}{2 \pi k T}\right)^{\frac{3}{2}} \mathrm{e}^{-m v^{2} / 2 k T} \frac{v^{2}}{\sqrt{2 m E}}=\frac{2}{\sqrt{\pi}}(k T)^{-\frac{3}{2}} \sqrt{E} \mathrm{e}^{-E / k T}
\end{aligned}
$$

因 $f(E)$ 总为正，且在 $E=0$ 和 $E=\infty$ 处为零，故若 $f(E)$ 只有一个极值，则必为极大值，相应的即为最概然平动动能 $E_{\mathrm{p}}$ 。
$f(E)$ 的极值应满足

$$
\frac{\mathrm{d} f(E)}{\mathrm{d} E}=0
$$

即

$$
\frac{1}{2} E^{-\frac{1}{2}} \mathrm{e}^{-E / k T}+\sqrt{E}\left(-\frac{1}{k T}\right) \mathrm{e}^{-E / k T}=0
$$

满足上式的最概然平动动能为

$$
E_{\mathrm{p}}=\frac{1}{2} k T
$$

与 $E_{\mathrm{p}}$ 对应的平动速率 $v_{0}$ 为

$$
E_{\mathrm{p}}=\frac{1}{2} m v_{0}^{2}
$$

即

$$
v_{0}=\sqrt{\frac{k T}{m}}
$$

故 $v_{0}$ 与最概然速率 $v_{\mathrm{p}}$ 之比为

$$
v_{0}: v_{\mathrm{p}}=\sqrt{\frac{k T}{m}}: \sqrt{\frac{2 k T}{m}}=1: \sqrt{2}
$$

【题 8】设热气球具有不变的容积 $V_{B}=1.1 \mathrm{~m}^{3}$ ，气球蒙皮体积与 $V_{B}$ 相比可忽略不计，蒙皮的质量为 $m_{H}=0.187 \mathrm{~kg}$ 。在外界气温 $t_{1}=20^{\circ} \mathrm{C}$ ，正常外界大气压 $p_{1}=1.013 \times 10^{3} \mathrm{~Pa}$ 的条件下，气球开始升空，此时外界大气的密度为 $\rho_{1}=1.2 \mathrm{~kg} / \mathrm{m}^{3}$ 。

1. 试问气球内部的热空气的温度 $t_{2}$ 应为多少，才能使气球刚好浮起。
2. 先把气球系牢在地面上，并把其内部的空气加热到稳定温度 $t_{3}=110^{\circ} \mathrm{C}$ ，试问气球释放升空时的初始加速度 $a$ 等于多少?（不考虑空气的阻力．）
3. 将气球下端通气口扎紧，使气球内部的空气密度保持恒定。在内部空气保持稳定温度 $t_{3}$ $=110^{\circ} \mathrm{C}$ 的情况下，气球升离地面，进人温度恒为 $20^{\circ} \mathrm{C}$ 的等温大气层中。试问，在这些条件下，气球上升到多少高度 $h$ 能处于力学平衡状态。
4. 在上升到第 3 问中的高度 $h$ 时，将气球在坚直方向上拉离平衡位置 10 m ，然后再于以释放，试定性叙述气球将作何种运动。
【分析】在地面上，当气球内部热空气密度 $\rho_{2}$ 小于球外空气密度 $\rho_{1}$ 时，产生浮力。刚好浮起的条件是，浮力等于气球所受重力，即气球中气体质量（其密度为 $\rho_{2}$ ）与蒙皮质量之和应等于被气球排开的外界空气的质量（其密度为 $\rho_{1}$ ）。由此可确定与 $\rho_{2}$ 对应的温度 $t_{2}$ 。

若气球内热空气温度 $t_{3}$ 超过上述 $t_{2}$ ，气球内热空气的密度 $\rho_{3}$ 便小于 $\rho_{2}$ ，从而气球所受重力小于浮力，气球将加速上升。由已知的 $t_{3}$ ，上升加速度 $a$ 可求。

气球下部通气口扎紧后，在 $t_{3}$ 保持不变的情况下，一方面气球总质量不变，另一方面排开的空气体积恒定。随着气球的上升，因周围空气的密度随高度指数下降（玻尔兹曼分布）被排开的空气质量将减少，浮力相应减小。当被排开的空气质量等于气球质量时，即当浮力与气球所受重力相等时，气球便可处于平衡状态。利用空气密度随高度变化的玻尔兹曼分布，即可求得气球处于平衡状态的高度 $h$ 。

若气球从平衡位置升高，则浮力进一步减小，合力向下，使气球回到原平衡位置。反之，若气球从平衡位置降低，则浮力增大，合力向上，也会使气球回到原平衡位置。可见气球将作某种振动，若考虑空气阻力，气球将作阻尼振动。
【解】1. 刚好浮起的条件是，气球蒙皮质量 $m_{H}$ 与球内温度为 $t_{2}$ 的热空气质量 $m_{2}$ 之和，等于被排开的温度为 $t_{1}$ 的空气质量 $m_{1}$ ，即

$$
m_{2}+m_{H}=m_{1}
$$

即

$$
\rho_{2} V_{B}+m_{H}=\rho_{1} V_{B}
$$

由此得出

$$
\rho_{2}=\rho_{1}-\frac{m_{H}}{V_{B}}
$$

把有关数据 $\rho_{1}=1.2 \mathrm{~kg} / \mathrm{m}^{3}, m_{H}=0.187 \mathrm{~kg}, V_{B}=1.1 \mathrm{~m}^{3}$ 代入，得

$$
\rho_{2}=1.03 \mathrm{~kg} / \mathrm{m}^{3}
$$

由理想气体状态方程

$$
\rho=\frac{\mu \rho}{K T}
$$

因热气球下端开口，内外压强相同均为 $p$ ，但内外温度不同，分别为 $T_{2}$ 和 $T_{1}$ ，故有

$$
\frac{\rho_{2}}{\rho_{1}}=\frac{T_{1}}{T_{2}}
$$

气球内热空气温度为

$$
T_{2}=\frac{\rho_{1}}{\rho_{2}} T_{1}=\frac{\rho_{1}}{\rho_{2}}\left(t_{1}+273.15\right)=341.53 \mathrm{~K}
$$

即

$$
t_{2}=68.38 \mathrm{C}
$$

2. 气球内热空气温度为 $t_{3}=110^{\circ} \mathrm{C}$ 时，热空气密度为

$$
\rho_{3}=\frac{T_{1}}{T_{3}} \rho_{1}=\frac{t_{1}+273.15}{t_{3}+273.15} \rho_{1}=0.918 \mathrm{~kg} / \mathrm{m}^{3}
$$

热气球所受升力（浮力减去重力）为

$$
F_{\mathrm{fi}}=\left[\rho_{1} V_{\mathrm{fi}}-\left(\rho_{3} V_{B}+m_{H}\right)\right]_{g}=1.2 \mathrm{~N}
$$

故热气球升空时的初始加速度为

$$
a=\frac{F_{f_{1}}}{\rho_{3} V_{B}+m_{H}}=1.003 \mathrm{~m} / \mathrm{s}^{2}
$$

3. 当热气球内空气温度为 $t_{3}$ 时，气球的平均密度为

$$
\bar{\rho}=\frac{\rho_{3} V_{B}+m_{H}}{V_{B}}=1.088 \mathrm{~kg} / \mathrm{m}^{3}
$$

当气球上升到离地面 $h$ 的高度处，外部空气密度 $\rho_{h}$ 与地面空气密度 $\rho_{1}$ 的关系遵循玻尔兹曼分布，为

$$
\rho_{h}=\rho_{1} \mathrm{e}^{-m g h / k T_{1}}
$$

其中 $m$ 为空气分子的质量. 故有

$$
h=\frac{k T_{1}}{m g} \ln \frac{\rho_{1}}{\rho_{h}}
$$

把上式右边分子与分母都乘以地面空气分子的数密度 $n_{1}$ ，并利用

$$
n_{1} k T_{1}=p_{1}, \quad n_{1} m=\rho_{1}
$$

得出

$$
h=\frac{\rho_{1}}{\rho_{1} g} \ln \frac{\rho_{1}}{\rho_{h}}
$$

气球在 $h$ 处达到平衡，要求

$$
\rho_{h}=\bar{\rho}
$$

故得

$$
h=\frac{\rho_{1}}{\rho_{1} g} \ln \frac{\rho_{1}}{\rho}=844 \mathrm{~m}
$$

4. 取气球的平衡位置为原点，竖直向上为 $y$ 轴，当气球在 $y$ 位置时，周围空气的密度为

$$
\rho_{y}=\rho_{h} \mathrm{e}^{-m g y / k T_{1}}
$$

因题设 $|y| \leqslant 10 \mathrm{~m}$ ，与 $h=844 \mathrm{~m}$ 相比， $y$ 是小量，故近似有

$$
\rho_{y}=\rho_{h}\left(1-\frac{m g}{k T_{1}} y\right)=\rho_{h}\left(1-\frac{n_{1} m g}{n_{1} k T_{1}} y\right)=\rho_{h}\left(1-\frac{\rho_{1} g}{p_{1}} y\right)
$$

气球在 $y$ 处所受沿 $y$ 方向的合力为

$$
\begin{aligned}
F_{x} & =\left[\rho_{y} V_{B}-\left(\rho_{3} V_{B}+m_{H}\right)\right]_{K}=\left(\rho_{y} V_{B}-\bar{\rho} V_{B}\right) g \\
& =\left[\rho_{h}\left(1-\frac{\rho_{1} g}{p_{1}} y\right)-\bar{\rho}\right] v_{D K}=\left[\bar{\rho}\left(1-\frac{\rho_{1} g}{p_{1}} y\right)-\bar{\rho}\right] v_{D K} \\
& =-\left(\frac{\rho_{p_{1}} V_{D K}^{2}}{p_{1}}\right) y
\end{aligned}
$$

可见这是一个线性恢复力。因此，如果不计空气阻力，当热气球从平衡位置拉开 10 m 后，将以 $A$ $=10 \mathrm{~m}$ 的振幅图绕平衡位置在坚直方向作简谐振动。如果考虑空气阻力，热气球将在坚直方向作阻尼振动，振幅逐渐减小。

【本题是1982年第13届 $\mathrm{IPhO}($ 国际中学生物理奥林匹克竞赛）试题。】
【题 9】取地面为重力势能零点。试估算等温大气的重力势能与热运动能量之比。设大气分子都只有平动和转动的动能已被激发。
【分析】等温大气是一种近似，认为地面上不同高度的大气的温度相等。在重力场中，大气中任 -组元分子的数目随高度的分布遵循玻尔兹曼分布，即随着高度的增长按指数衰减。所以等温大气的高度实际上是有限的，可以认为远小于地球半径，因而不同高度的 $g$ 可当作常数。作为一种估算，可近似把等温大气当作一种柱体来处理（把等温大气当作包围地球的大气层来处理并不合理，因为若考虑全球范围，则应计及由于昼夜不同、地域差异等因素引起的显著温差，很难认为各处是"等温"的）。另外，大气的成分虽复杂，但主要是氧气和氮气，它们都是双原子分子。
【解】设等温大气区域是高度为 $H$ ，底面积为 $S$ 的柱体，大气温度为 $T$ ，取 $z$ 轴坚直向上，原点 $z$ $=0$ 在地面上。设大气中第 $i$ 种组元分子的质量为 $m_{i}$ ，该组元在 $z=0$ 处的分子数密度为 $n_{0 i}$ 。由玻尔兹曼分布，在 $z$ 到 $(z+\mathrm{d} z)$ 范围，第 $i$ 组元的分子数 $\mathrm{d} N_{i}$ 为

$$
\mathrm{d} N_{i}=n_{0} \mathrm{e}^{-m_{i} g z / k T} S \mathrm{~d} z
$$

因 $\mathrm{d} N_{i}$ 随 $z$ 按指数衰减，离地较高处的大气已很稀薄，等温大气的高度实际上是有限的，可认为等温大气高度 $H$ 远小于地球半径 $R$ ，故 $g$ 为常量。这 $\mathrm{d} N_{i}$ 个分子所具有的重力势能 $\mathrm{d} E_{\mathrm{pi}}$ 为

$$
\mathrm{d} E_{\mathrm{pi}}=(m_{i} g z) \mathrm{d} N_{i}
$$

于是等温大气第 $i$ 种组元分子的平均重力势能为

$$
\bar{\epsilon}_{\mathrm{pi}}=\frac{\int_{0}^{H} \mathrm{~d} E_{\mathrm{pi}}}{\int_{0}^{H} \mathrm{~d} N_{i}}=\frac{\int_{0}^{H}\left(m_{i} g z\right) \mathrm{e}^{-m_{i} g z / k T} S \mathrm{~d} z}{\int_{0}^{H} \mathrm{e}^{-m_{i} g z / k T} S \mathrm{~d} z}
$$

等温大气的高度 $H$ 虽远小于地球半径，仍是个大量，在计算上式的积分时，可近似取 $H \approx \infty$ ，则有

$$
\bar{\epsilon}_{p i}=\frac{\int_{0}^{\infty} m_{i} g z \mathrm{e}^{-m_{i} g z / k T} \mathrm{~d} z}{\int_{0}^{\infty} \mathrm{e}^{-m_{i} g z / k T} \mathrm{~d} z}=\frac{m_{i} g\left(\frac{k T}{m_{i} g}\right)^{2}}{\frac{k T}{m_{i} g}}=k T
$$

上式表明， $\bar{\epsilon}_{p i}$ 与组元 $i$ 无关，即各组元分子的平均重力势能都是 $k T$ 。因此，等温大气中分子的平均重力势能 $\bar{\epsilon}_{\mathrm{p}}$ 即为 $k T$

$$
\bar{\varepsilon}_{\mathrm{p}}=k T
$$

大气成分复杂，但主要是氮气和氧气，都是双原子分子，在只有平动和转动的动能被激发时，分子的平均热运动能量均为

$$
\bar{\varepsilon}_{\mathrm{k}}=\frac{5}{2} k T
$$

因此，等温大气中分子平均重力势能 $\bar{\varepsilon}_{\mathrm{p}}$ 与分子平均热运动能量 $\bar{\varepsilon}_{\mathrm{k}}$ 之比为

$$
\bar{\varepsilon}_{\mathrm{p}}: \bar{\varepsilon}_{\mathrm{k}}=k T: \frac{5}{2} k T=2: 5
$$

这就是等温大气的重力势能 $E_{\mathrm{p}}$ 与热运动能量 $E_{\mathrm{k}}$ 之比，即

$$
E_{\mathrm{p}}: E_{\mathrm{k}}=2: 5
$$

【题 10】 把大气看作理想气体，设在大气范围内重力加速度 $g$ 为常量，设海平面 $z=0$ 处的大气温度为 $T_{0}$ 。

1. 从力平衡观点出发，试导出 $z$ 处压强随高度的变化率 $\frac{\mathrm{d} p}{\mathrm{~d} z}$ 与 $z$ 处的压强 $p$ 和温度 $T$ 的关系。
2. 设大气是等温的，且 $t_{0}=0 \mathrm{C}$ ，试计算半数分子处于其下的高度 $h$ 。
3. 设大气是绝热的，且 $t_{0}=0 \mathrm{C}$ ，绝热指数 $\gamma=\frac{7}{5}$ 。试计算大气层的高度 $H$ 。

【分析】大气是理想气体，应遵循理想气体状态方程 $p=n k T, n$ 是分子数密度、考虑重力的作用，压强应随高度变化，不同高度的压强差与其间的大气分子所受重力平衡。

在等温 $\left(T=T_{0}\right)$ 条件下，由 $p$ 随高度的变化可知 $n$ 随高度的变化。从而可以确定占有半数分子的大气层高度 $h$ 。

绝热条件给出了不同高度处 $(p, T)$ 之间的关系，与第 1 问中求出的 $\frac{\mathrm{d} p}{\mathrm{~d} z}$ 结合，即可确定压强随高度变化的关系 $p(z)$ 。于是 $p=0$ 相应的大气层高度 $H$ 可求。
【解】1. 设大气为理想气体，故有

$$
p=n k T
$$

式中 $p, T, n$ 分别是 $z$ 处大气的压强，温度，分子数密度。
在 $z$ 处，取面积为 $S$ ，厚度为 $\mathrm{d} z$ 的薄层大气，它受到的重力为 $n(S \mathrm{~d} z) m g(m$ 是空气分子的质量）。因上、下压强差而提供的竖直向上的作用力为 $[p(z)-p(z+\mathrm{d} z)] S=-S \mathrm{~d} p$ 。由力平衡，得

$$
n S \mathrm{~d} z m g=[p(z)-p(z+\mathrm{d} z)]=-S \mathrm{~d} p
$$

即

$$
\frac{\mathrm{d} p}{\mathrm{~d} z}=-n m g
$$

(1)、(2) 式联立,得

$$
\frac{\mathrm{d} p}{\mathrm{~d} z}=-\frac{m g p}{k T}=-\frac{\mu g p}{R T}
$$

式中 $\mu=29.0 \times 10^{-3} \mathrm{~kg} / \mathrm{mol}$ 为大气的平均摩尔质量。
2. 设大气等温 $T=T_{0}$ ，把（1）式对 $z$ 求导，得

$$
\frac{\mathrm{d} p}{\mathrm{~d} z}=k T_{0} \frac{\mathrm{~d} n}{\mathrm{~d} z}
$$

把（2）式代入，得

$$
\frac{\mathrm{d} n}{\mathrm{~d} z}=-\frac{m g}{k T_{0}} n=-\frac{\mu g}{R T_{0}} n
$$

或

$$
\frac{\mathrm{d} n}{n}=-\frac{\mu g}{R T_{0}} \mathrm{~d} z
$$

积分，得

$$
n(z)=n_{0} \mathrm{e}^{\frac{\mu g z}{R T_{0}}}
$$

式中 $n_{0}$ 是 $z=0$ （即海平面）的大气分子数密度。
设从海平面 $z=0$ 到高度 $z=h$ 处的大气分子为全部之半，则有

$$
\int_{0}^{h} n(z) \mathrm{d} z=\frac{1}{2} \int_{0}^{\infty} n(z) \mathrm{d} z
$$

把（4）式代入，得

$$
\mathrm{e}^{\frac{\mu g h}{R T_{0}}}-1=-\frac{1}{2}
$$

故

$$
h=\frac{R T_{0}}{\mu g} \ln 2=5.5 \times 10^{3} \mathrm{~m}
$$

（3）设大气绝热， $p$ 与 $T$ 均随 $z$ 变，应遵循的关系为

$$
p^{\frac{1-\gamma}{T}} T=p_{0} \frac{1-\gamma}{T} T_{0}
$$

与（3）式联立，消去 $T$ ，得

$$
\frac{\mathrm{d} p}{\mathrm{~d} z}=-\frac{\mu g p}{R T}=-\frac{\mu g p}{R} p^{\frac{1-\gamma}{T}} \frac{1}{T_{0}} p_{0} \frac{z-1}{\gamma}=-\left(\frac{\mu g}{R T_{0}} p_{0} \frac{z-1}{\gamma}\right) p^{\frac{1}{2}}
$$

积分，得

$$
\frac{\gamma}{\gamma-1}\left(p^{\frac{z-1}{\gamma}}-p_{0}^{\frac{z-1}{\gamma}}\right)=-\frac{\mu g}{R T_{0}} p_{0} \frac{z-1}{\gamma} z
$$

设大气层的全部高度为 $H$ ，则在 $z=H$ 处有

$$
n_{H}=0, \quad p_{H}=0
$$

故

$$
\frac{\gamma}{\gamma-1} p_{0} \frac{\gamma-1}{\gamma}=\frac{\mu g}{R T_{0}} p_{0} \frac{z-1}{\gamma} H
$$

即

$$
H=\frac{\gamma}{\gamma-1} \frac{R T_{0}}{\mu g}=28.0 \times 10^{3} \mathrm{~m}
$$

【题 11】设地球的大气等温，温度为 $T$ ，地面附近的分子数密度为 $n_{0}$ ，大气分子的平均质量为 $m$ 。如果认为，在距地面高度为 $h$ 处的大气分子沿某方向（当然不包括会与地面相碰的那些方向）的速度，达到或超过该处人造卫星绕地球作圆运动的速度（在不计空气阻力条件下）时，该分子便能沿此方向逃离大气而去。设地球半径为 $R$ ，地面的重力加速度为 $g$ 。试求在 $h$ 处，沿任一允许方向，单位时间通过单位垂直截面逃离大气的分子数。
【分析】 把人造卫星绕地球作圆运动的速度 $v_{0}$ ，作为该处大气分子沿某方向的逃逸速度不尽合理，但作为一种估算并无不可。

显然， $v_{0}$ 不难利用力学知识求得。
大气分子沿 $x$ 方向的速率分布为麦克斯韦一维速率分布函数 $f\left(v_{x}\right)$ ，单位时间沿该方向通过单位垂直面积逃离的分子数可由 $v_{0}, f\left(v_{x}\right)$ 以及 $h$ 处的分子数密度 $n(h)$ 求得， $n(h)$ 可由玻耳兹曼分布确定，于是可解。
【解】 在距地面高度为 $h$ 处，设空气阻力可略，则作圆运动的人造卫星的速度 $v_{0}$ 应满足，

$$
\frac{m_{w} v_{0}^{2}}{R+h}=\frac{G M m_{B}}{(R+h)^{2}}
$$

式中 $M$ 为地球质量. 由上式得出

$$
v_{0}^{2}=\frac{G M}{R+h}
$$

地面的重力加速度为

$$
g=\frac{G M}{R^{2}}
$$

由以上两式，得

$$
v_{0}^{2}=\frac{R^{2} g}{R+h}
$$

取大气分子的逃逸方向为 $x$ 方向，在 $x$ 方向麦克斯韦一维速率分布函数为

$$
f\left(v_{x}\right)=\left(\frac{m}{2 \pi k T}\right)^{\frac{1}{2}} \mathrm{e}^{-m v_{x}^{2} / 2 k T}
$$

式中 $m$ 为分子质量， $T$ 为大气温度。取与 $x$ 方向垂直的面元 $\mathrm{d} S$ ，在 $\mathrm{d} t$ 时间内以 $v_{x}$ 速度运动并能通过 dS 的分子应在体元 $\left(v_{x} \mathrm{~d} t\right) \mathrm{d} S$ 内，在此体元内速度在 $v_{x}$ 到 $\left(v_{x}+\mathrm{d} v_{x}\right)$ 的分子数为 $n(h)$ $f\left(v_{x}\right) \mathrm{d} v_{x}\left(v_{x} \mathrm{~d} t\right) \mathrm{d} S$ ，其中 $n(h)$ 是 $h$ 处的分子数密度。对 $v_{x}$ 从 $v_{0}$ 到无穷积分，便得出在 $\mathrm{d} t$ 时间沿 $x$ 方向经 $\mathrm{d} S$ 逃逸的分子数。故在 $h$ 处沿 $x$ 方向单位时间通过单位垂直面积逃逸的分子数为

$$
\begin{aligned}
\frac{\mathrm{d} N}{\mathrm{~d} t \mathrm{~d} S} & =\int_{v_{0}}^{\infty} n(h) f\left(v_{x}\right) v_{x} \mathrm{~d} v_{x}=n(h) \int_{v_{0}}^{\infty}\left(\frac{m}{2 \pi k T}\right)^{\frac{1}{2}} v_{x} \mathrm{e}^{-m v_{x}^{2} / 2 k T} \mathrm{~d} v_{x} \\
& =n(h)\left(\frac{k T}{2 \pi m}\right)^{\frac{1}{2}} \mathrm{e}^{-m v_{0}^{2} / 2 k T}=n(h)\left(\frac{k T}{2 \pi m}\right)^{\frac{1}{2}} \mathrm{e}^{-m g R^{2} / 2 k T(R+h)}
\end{aligned}
$$

其中已用到 $v_{0}$ 的结果。
分子在地面的引力势能为

$$
E_{\mathrm{p}}(0)=-\frac{G M m}{R}
$$

分子在地面上 $h$ 处的引力势能为

$$
E_{\mathrm{p}}(h)=-\frac{G M m}{R+h}
$$

从地面到 $h$ 处分子引力势能的增量为

$$
\Delta E_{\mathrm{p}}=E_{\mathrm{p}}(h)-E_{\mathrm{p}}(0)=\frac{G M m h}{R(R+h)}=\frac{m g h R}{R+h}
$$

由被耳兹曼分布

$$
n(h)=n_{0} \mathrm{e}^{-b E_{c} / k T}=n_{0} \mathrm{e}^{\frac{-m g b R}{k T(R+h)}}
$$

代入 $\frac{\mathrm{d} N}{\mathrm{~d} t} \frac{\mathrm{~d} S}{\mathrm{~d} S}$ 的表达式，得出

$$
\begin{aligned}
\frac{\mathrm{d} N}{\mathrm{~d} t \mathrm{~d} S} & =n_{0} \mathrm{e}^{\frac{-m g b R}{k T(R+h)}} \cdot\left(\frac{k T}{2 \pi m}\right)^{\frac{1}{2}} \mathrm{e}^{\frac{-m g R^{2}}{2 k T(R+h)}} \\
& =n_{0}\left(\frac{k T}{2 \pi m}\right)^{\frac{1}{2}} \mathrm{e}^{-\frac{m g R(R+2 h)}{2 k T(R+h)}}
\end{aligned}
$$

【题 12】 一根长为 $L$ 的水平粗管与一根坚直细管连接成如图所示的形状。把细管下端插人密度为 $\rho_{f}$ 的液体之中，然后将粗管的管口封住，并使粗管绕细管以恒定的微小角速度 $\omega$ 旋转。已知空气的密度为 $\rho_{n}$ ，细管的体积与粗管相比可以忽略，毛细现象也可忽略。在温度恒定的条件下，试求细管中液面上升的高度 $h$ 。
【分析】 在随粗管一起勾角速转动的非惯性系中，粗管内被封闭的空气沿粗管水平长度方向有一定的惯性离心势能分布，使得平衡时粗管内被封闭的空气分子的数密度 $n$ 沿粗管长度水平方向有相应的波耳兹曼分布。结果，在粗管中离细管较远处的 $n$ 大于封闭旋转前的 $n_{0}$ ，在粗管中靠近细管处的 $n$ 小于 $n_{0}$ 。封闭旋转前的 $n_{0}$ 与大气压强 $p_{0}$ 对应。使得粗管中靠近细管处的空气压强 $p_{0}{ }^{\prime}$ 小于 $p_{0}$ ，导致液体被抽上细管。细管内液体上升的高度取决于 $p_{0}{ }^{\prime}$与 $p_{0}$ 之差，最终达到平衡。
【解】取以 $\omega$ 旋转的非惯性系，取 $x$ 轴沿粗管水平长度方向，原点在细管处。则粗管中在 $x$ 位置的空气分子具有的惯性离心势能为

$$
E_{\mathrm{p}}(x)=-\frac{1}{2} m \omega^{2} x^{2}
$$

式中 $m$ 是分子质量 $. E_{\mathrm{p}}(x)$ 使得粗管中的气体分子数密度沿 $x$ 轴按被耳兹曼分布，为

$$
n(x)=n(0) \mathrm{e}^{-E_{\mathrm{p}}(x) / k T}=n(0) \mathrm{e}^{m \omega^{2} x^{2} / 2 k T}
$$

式中 $n(0)$ 为 $x=0$ 处（即粗管中紧挨细管处）的 $n$ 值， $T$ 为空气温度。
设粗管截面积为 $S$ ，封闭旋转前的空气分子数密度为 $n_{0}$ ，则因旋转前后粗管内空气分子总数不变，应有

$$
n_{0} S L=\int_{0}^{L} n(x) S \mathrm{~d} x=n(0) S \int_{0}^{L} \mathrm{e}^{m \omega^{2} x^{2} / 2 k T} \mathrm{~d} x
$$

故

$$
n(0)=\frac{n_{0} L}{\int_{0}^{L} \mathrm{e}^{m \omega^{2} x^{2} / 2 k T} \mathrm{~d} x}
$$

题设 $\omega$ 为小量，故有

$$
\mathrm{e}^{m \omega^{2} x^{2} / 2 k T} \approx 1+\frac{m \omega^{2} x^{2}}{2 k T}
$$

及

$$
\int_{0}^{L} \mathrm{e}^{m \omega^{2} x^{2} / 2 k T} \mathrm{~d} x=L+\frac{m \omega^{2} L^{3}}{6 k T}
$$

代入，得

$$
n(0)=\frac{n_{0}}{\left(1-\frac{m \omega^{2} L^{2}}{6 k T}\right)}=n_{0}\left(1-\frac{m \omega^{2} L^{2}}{6 k T}\right)
$$

大气压强为

$$
p_{0}=n_{0} k T
$$

封闭旋转后，粗管中紧挨细管处的气体压强为

$$
p_{0}^{\prime}=n(0) k T=n_{0} k T\left(1-\frac{m \omega^{2} L^{2}}{6 k T}\right)=\left(1-\frac{m \omega^{2} L^{2}}{6 k T}\right) p_{0}
$$

$p_{0}$ 与 $p_{0}{ }^{\prime}$ 的差异导致液体沿细管上升 $h$ 高度，达到平衡后，应有

$$
\rho_{f} g h=p_{0}-p_{0}^{\prime}=\frac{m \omega^{2} L^{2}}{6 k T} p_{0}
$$

即

$$
h=\frac{m \omega^{2} L^{2} p_{0}}{6 k T \rho_{f} g}
$$

把 $p_{0}=n_{0} k T$ 代入，并利用空气密度 $\rho_{a}$ 与 $n_{0}$ 和 $m$ 的关系

$$
\rho_{a}=n_{0} m
$$

得

$$
h=\frac{\omega^{2} L^{2} \rho_{a}}{6 \rho_{f} g}
$$

【题 13】原子序数为 $Z$ ，原子量为 $A$ 的单质气体，完全电离后形成的等离子体在均匀引力场 $g$中处于热平衡状态。设气体密度很小，电离后正、负离子间的局域相互作用叮以忽略。

1. 在等温条件下，为了避免宏观的电荷分离（即正离子的数密度与负离子的数密度之比不因位置而变化），试证明必须有均匀电场 $E=-\frac{A m_{p}-m_{e}}{(1+Z) e^{z}} g$ 存在。其中 $m_{p}$ 和 $m_{e}$ 分别是质子和电子的质量。
2. 如果不等温，但各正、负离子受到的因热运动相互碰撞引起的平均力可认为相同，试证明也必须有第 1 问的电场 $E$ 存在。
3. 太阳表面附近存在着等离了体，设其厚度远小于太阳半径，设太阳表面有均匀分布的电荷 $Q$ ，试在等温、不等温条件下分别求 $Q$ 值。
4. 设太阳表面附近的等离子体是由氢原子电离产生的。试计算 $Q$ 值。已知太阳质量 $M=$ $2.0 \times 10^{30} \mathrm{~kg}$.
【分析】气体在引力场中处于平衡态，其分子数密度遵循玻尔兹曼分布。气体电离成等离子体后，如果正离子构成的"气体"和由电子构成的"气体"在引力场中分别处于平衡态，则应分别遵循各自的玻尔兹曼分布。但由于正离子和电子的质量不同。在引力场某处的势能不同，从而在该处正离子的数密度和电子的数密度不同。这将引起宏观的电荷分离，产生巨大的库仑力，无法维持平衡。因此，为了使气体电离后形成的等离子体能在引力场中处于平衡态，必须同时存在一个电场，以确保正、负离子的数密度处处相同，不出现宏观的电荷分离。
【解】1. 沿均匀电场 $\boldsymbol{E}$ 的方向取 $z$ 轴，引力场 $g$ 与 $\boldsymbol{E}$ 反向，沿 $-z$ 方向。任洗某处为 $z=0$ ，规定该处为静电势能和引力势能的零点，则正、负离子在任意 $z$ 处的势能分别为

$$
\left\{\begin{array}{l}
\phi_{+}=\left(A m_{\mathrm{p}} g-Z e E\right) z \\
\phi_{-}=\left(m_{+} g+e E\right) z
\end{array}\right\}
$$

式中 $A m_{\mathrm{p}}$ 为正离子质量， $m_{\mathrm{e}}$ 为电子（负离子）质量。在等温条件下，在引力场和静电场中处于平衡态时，正、负离子的数密度遵循玻尔兹曼分布，为

$$
\left\{\begin{array}{l}
n_{+}(z)=n_{+0} \mathrm{e}^{-\phi_{+} / k T} \\
n_{-}(z)=n_{-0} \mathrm{e}^{-\phi_{+} / k T}
\end{array}\right\}
$$

不出现电荷的宏观分离要求

$$
\frac{n_{+}(z)}{n_{-}(z)}=\frac{n_{+0}}{n_{-0}}
$$

即要求

$$
\phi_{+}=\phi_{-}
$$

于是，均匀电场 $\boldsymbol{E}$ 的大小应为

$$
E=\frac{A m_{\mathrm{p}}-m_{\mathrm{e}}}{(1+Z) e} g
$$

因 $\boldsymbol{E}$ 与 $\boldsymbol{g}$ 反向，故有

$$
\boldsymbol{E}=-\frac{\left(A m_{\mathrm{p}}-m_{\mathrm{e}}\right)}{(1+Z) e} \boldsymbol{g}
$$

2. 正、负离子受到的引力和电力分别为

$$
\left\{\begin{array}{l}
F_{+}=A m_{\mathrm{p}} g-Z e E \\
F_{-}=m_{\mathrm{e}} g+e E
\end{array}\right\}
$$

沿 $-z$ 方向。既然它们在不等温条件下受到的热运动相互碰撞的平均力相同，则此平均力为正、负离子提供的沿 $z$ 方向的分量也应相同，记为 $F$ 。在平衡时要求

$$
F=F, \quad \text { 及 } \quad F=F_{-}
$$

故

$$
F_{+}=F_{-}
$$

于是同样得到（1）、（2）式。
3. 太阳表面电荷 $Q$ 在太阳表面附近产生的电场为

$$
E=\frac{Q}{4 \pi \varepsilon_{0} R^{2}}
$$

式中 $R$ 是太阳半径. 太阳表面的引力加速度为

$$
g=\frac{G M}{R^{2}}
$$

式中 $M$ 是太阳质量， $G$ 是引力常量。把 $E, g$ 代入（1）式，得

$$
Q=\frac{4 \pi \varepsilon_{0}\left(A m_{p}-m_{e}\right)}{(1+Z) e} G M \approx \frac{4 \pi \varepsilon_{0} A m_{p} G M}{(1+Z) e}
$$

4. 对于氢等离子体, $A=1, Z=1$, 故

$$
Q=\frac{2 \pi \varepsilon_{0} m_{p} G M}{e}=77.4 \mathrm{C}
$$

【题 14】从分子某次与其他分子碰撞后开始计算其自由程 $\lambda$ ，它的平均值 $\bar{\lambda}$ 称为平均自由程。设分子间的碰撞具有无后效应性，即在 $\lambda$ 到 $(\lambda+\mathrm{d} \lambda)$ 区间与其他分子碰撞的概率与前面已经过的路程 $\lambda$ 无关。

试求: 1 . 分子经 $\lambda$ 路程尚未被碰撞的概率 $F(\lambda)$ ，以及分子自由程为 $\lambda$ 的概率密度（也称为自由程的分布函数） $f(\lambda)$ 。
2. 分子在某次碰撞后，先经无碰撞的路程 $\lambda_{0}$ ，再经 $\lambda$ 路程末被碰撞的概率 $F^{*}\left(\lambda_{0}, \lambda\right)$ ，以及不计 $\lambda_{0}$ 的平均自由程 $\bar{\lambda}\left(\lambda_{0}\right)$ 。
【分析】气体分子自由程的分布函数是继气体分子速度分布函数（即麦克斯韦速度分布函数）之后，关于理想气体热运动的又一个重要分布函数。由于分子碰撞具有无后效应性，这一分布函数可以从数学上简单地导出。

本题先求经 $\lambda$ 路程尚未被碰的概率 $F(\lambda)$ ，再计算自由程为 $\lambda$ 的概率密度（即分布函数） $f(\lambda)$ ，这也正是从数学上导出 $f(\lambda)$ 的正当步骤。

本题第 2 问的计算结果将表明，从任意时刻（不管这一时刻是否为刚被碰撞之后）开始计量分子在这之后经过的自由程 $\lambda$ ，那么 $\lambda$ 的平均值 $\bar{\lambda}$ 是相同的量。即 $\bar{\lambda}\left(\lambda_{0}\right)$ 值与 $\lambda$ 起点前已经过多长的自由程 $\lambda_{0}$ 无关，这是气体分子平均自由程的一个非常重要的特征。
【解】1. 分子在 $\lambda$ 到 $(\lambda+\mathrm{d} \lambda)$ 区间被碰的概率 $\mathrm{d} P$ 与 $\lambda$ 无关，故有

$$
\mathrm{d} P \propto \mathrm{~d} \lambda
$$

引入比例系数 $\frac{1}{\alpha}$ ，上式表为

$$
\mathrm{d} P=\frac{\mathrm{d} \lambda}{\alpha}
$$

设分子经 $\lambda$ 路程尚未被碰的概率为 $F(\lambda)$ ，再经 $\mathrm{d} \lambda$ 路程末被碰的概率为 $(1-\mathrm{d} P)$ ，故分子经 $(\lambda+$ $\mathrm{d} \lambda)$ 路程尚未被碰的概率应为

$$
F(\lambda+\mathrm{d} \lambda)=F(\lambda)(1-\mathrm{d} P)=F(\lambda)-\frac{1}{\alpha} F(\lambda) \mathrm{d} \lambda
$$

由此

$$
\mathrm{d} F=F(\lambda+\mathrm{d} \lambda)-F(\lambda)=-\frac{1}{\alpha} F(\lambda) \mathrm{d} \lambda
$$

初条件显然是

$$
F(0)=1
$$

积分, 得出

$$
F(\lambda)=\mathrm{e}^{-\lambda / \alpha}
$$

自由程为 $\lambda$ 的概率密度 $f(\lambda)$ ，应为分子在 $\lambda$ 路程前末被碰撞而在 $\lambda$ 到 $(\lambda+\mathrm{d} \lambda)$ 区域被碰撞的概率 $F(\lambda) \mathrm{d} P$ 除以 $\mathrm{d} \lambda$, 即为

$$
F(\lambda)=\frac{F(\lambda) \mathrm{d} P}{\mathrm{~d} \lambda}=\frac{1}{\alpha} F(\lambda)
$$

把 $F(\lambda)$ 的结果代入，得

$$
f(\lambda)=\frac{1}{\alpha} \mathrm{e}^{-\lambda / \alpha}
$$

由分布函数 $f(\lambda)$ ，可计算平均自由程，有

$$
\bar{\lambda}=\int_{0}^{\infty} \lambda f(\lambda) \mathrm{d} \lambda=\int_{0}^{\infty} \lambda \frac{1}{\alpha} \mathrm{e}^{-\lambda / \alpha}
$$

采用分部积分法，有

$$
\int u \mathrm{e}^{A u} \mathrm{~d} u=\frac{u}{A} \mathrm{e}^{A u}-\frac{1}{A^{2}} \mathrm{e}^{A u}
$$

利用上式，可算得

$$
\bar{\lambda}=\alpha
$$

因此

$$
F(\lambda)=\mathrm{e}^{-\lambda / \bar{\lambda}}, \quad f(\lambda)=\frac{1}{\bar{\lambda}} \mathrm{e}^{-\lambda / \bar{\lambda}}
$$

2. 分子在某次碰撞后，先经 $\lambda_{0}$ 路程末被碰撞的概率为 $F\left(\lambda_{0}\right)$ ，以此为前提，此后又经 $\lambda$ 路程末被碰撞的概率表为 $F^{*}\left(\lambda_{0}, \lambda\right)$ 。根据概率乘法规则，分子经 $\left(\lambda_{0}+\lambda\right)$ 路程末被碰撞的概率 $F\left(\lambda_{0}+\lambda\right)$ 为

$$
F\left(\lambda_{0}+\lambda\right)=F\left(\lambda_{0}\right) F^{*}\left(\lambda_{0}, \lambda\right)
$$

即

$$
F^{*}\left(\lambda_{0}, \lambda\right)=\frac{F\left(\lambda_{0}+\lambda\right)}{F\left(\lambda_{0}\right)}=\frac{\mathrm{e}^{-\left(\lambda_{0}+\lambda\right) / \bar{\lambda}}}{\mathrm{e}^{-\lambda_{0} / \bar{\lambda}}}=\mathrm{e}^{-\lambda / \bar{\lambda}}
$$

可见 $F^{*}\left(\lambda_{0}+\lambda\right)$ 与 $\lambda_{0}$ 无关。
分子在某次碰撞后，先经无碰撞的路程 $\lambda_{0}$ 后，从新的起点开始计算自由程 $\lambda$ ，则此自由程 $\lambda$的概率密度 $f^{*}(\lambda)$ ，应为在 $\lambda$ 路程前末被碰撞而在 $\lambda$ 到 $(\lambda+\mathrm{d} \lambda)$ 被碰撞的概率 $F^{*}\left(\lambda_{0}, \lambda\right) \mathrm{d} P$ 除以 $\mathrm{d} \lambda$ ，即为

$$
\begin{aligned}
f^{*}\left(\lambda_{0}, \lambda\right) & =\frac{F^{*}\left(\lambda_{0}, \lambda\right)}{\mathrm{d} \lambda}=\frac{1}{\alpha} F^{*}\left(\lambda_{0}, \lambda\right) \\
& =\frac{1}{\lambda} \mathrm{e}^{-\lambda / \bar{\lambda}}=f(\lambda)
\end{aligned}
$$

此自由程的平均值为

$$
\bar{\lambda}\left(\lambda_{0}\right)=\int_{0}^{\lambda} \lambda f^{*}\left(\lambda_{0}, \lambda\right) \mathrm{d} \lambda=\int_{0}^{\lambda} \lambda f(\lambda) \mathrm{d} \lambda=\bar{\lambda}
$$

可见 $\bar{\lambda}\left(\lambda_{0}\right)$ 与 $\lambda$ 起点前已经过的自由程 $\lambda_{0}$ 无关。
【图15】理想气体处于平衡态，分子热运动平均速率为 $\bar{v}$ ，平均自由程为 $\bar{\lambda}$ ，把 $t=0$ 时刻某分子所在位置取为坐标原点 $O$ 。试问经过多长时间 $t$ ，该分子所在位置与原点 $O$ 相距为 $R$ 。

设理想气体占据的容器空间足够大，设 $R \gg \bar{\lambda}$ ，设该分子在本题讨论的时间范围内未与容器壁相碰.
最后，已知 $\bar{v}=5.0 \times 10^{2} \mathrm{~m} / \mathrm{s}, \bar{\lambda}=3.0 \times 10^{-7} \mathrm{~m}, R=2 \mathrm{~m}$ ，试给出 $t$ 的具体数值。
【分析】由于磁撞，热运动的分子走的是曲折的路线，很显然，不能用 $R$ 除以 $\bar{v}$ 来求 $t$ 。

分子每两次相邻磁撞之间走过的路程就是一个自由程，设经过 $N$ 个自由程后，分子与原点相距为 $R$ ，当 $N$ 足够大时，从统计上考虑， $R$ 必定与平均自由程 $\bar{\lambda}$ 有关。另一方面，分子行经 $N$ 个自由程所需的时间 $t$ 必定与平均磁撞频率 $\bar{Z}$ 有关， $\bar{Z}$ 与 $\bar{v}$ 和 $\bar{\lambda}$ 有关。找出以上两个关系， $t$ 即可求。
【解】取 $x y z$ 坐标，以分子 $t=0$ 时的出发点为原点 $O$ 。分子从 $O$ 点出发经过的第一个自由程可用矢量 $\lambda_{1}\left(x_{1}, y_{1}, z_{1}\right)$ 表示；经过一次碰撞后，第二个自由程表为 $\lambda_{2}\left(x_{2}, y_{2}, z_{2}\right)$ ；如此继续，第 $i$ 个自由程表为 $\lambda_{i}\left(x_{i}, y_{i}, z_{i}\right)$ ，则分子经 $N$ 个自由程到达的与 $O$ 点相距为 $R$ 的位置应满足下述关系。

$$
R^{2}=\left(x_{1}+x_{2}+\cdots+x_{N}\right)^{2}+\left(y_{1}+y_{2}+\cdots+y_{N}\right)^{2}+\left(z_{1}+z_{2}+\cdots+z_{N}\right)^{2}
$$

因 $x_{1}, x_{2}, \cdots, x_{N} ; y_{1}, y_{2}, \cdots, y_{N} ; z_{1}, z_{2}, \cdots, z_{N}$ 无规取值，且可正可负，故当 $N$ 足够大时，上式平方展开式中的交叉项之和应为零，于是有

$$
\begin{aligned}
R^{2} & =x_{1}^{2}+x_{2}^{2}+\cdots+x_{N}^{2}+y_{1}^{2}+y_{2}^{2}+\cdots+y_{N}^{2}+z_{1}^{2}+z_{2}^{2}+\cdots+z_{N}^{2} \\
& =\left(x_{1}^{2}+y_{1}^{2}+z_{1}^{2}\right)+\left(x_{2}^{2}+y_{2}^{2}+z_{2}^{2}\right)+\cdots+\left(x_{N}^{2}+y_{N}^{2}+z_{N}^{2}\right) \\
& =\lambda_{1}^{2}+\lambda_{2}^{2}+\cdots+\lambda_{N}^{2}
\end{aligned}
$$

引入自由程平方的平均值 $\overline{\lambda^{2}}$ ，定义为

$$
\overline{\lambda^{2}}=\frac{1}{N}\left(\lambda_{1}^{2}+\lambda_{2}^{2}+\cdots+\lambda_{N}^{2}\right)
$$

则

$$
R^{2}=N \bar{\lambda}^{2}
$$

在本章题 14 中，已经给出了自由程 $\lambda$ 的分布函数为

$$
f(\lambda)=\frac{1}{\bar{\lambda}} \mathrm{e}^{-\lambda / \bar{\lambda}}
$$

式中 $\bar{\lambda}$ 为平均自由程。由 $f(\lambda)$ 可计算 $\bar{\lambda}^{2}$ 如下，

$$
\overline{\lambda^{2}}=\int_{0}^{\infty} \lambda^{2} f(\lambda) \mathrm{d} \lambda=\frac{1}{\bar{\lambda}} \int_{0}^{\infty} \lambda^{2} \mathrm{e}^{-\lambda / \bar{\lambda}} \mathrm{d} \lambda
$$

利用分部积分法，有

$$
\int u^{2} \mathrm{e}^{A u} \mathrm{~d} u=\left(\frac{u^{2}}{A}-\frac{2 u}{A^{2}}+\frac{2}{A^{3}}\right) \mathrm{e}^{A u}
$$

由此得出

$$
\overline{\lambda^{2}}=-\left(\lambda^{2}+2 \bar{\lambda} \lambda+2 \bar{\lambda}^{2}\right) \mathrm{e}^{-\lambda / \bar{\lambda}}\left.\right|_{0} ^{\infty}=2 \bar{\lambda}^{2}
$$

故有

$$
R^{2}=N \bar{\lambda}^{2}=2 N \bar{\lambda}^{2}
$$

分子经 $N$ 个自由程所需时间 $t$ ，与平均磁撞频率 $\bar{Z}$ 的关系为

$$
t=\frac{N}{\bar{Z}}
$$

$\bar{Z}$ 与平均自由程 $\bar{\lambda}$ 及平均速率 $\bar{v}$ 的关系为

$$
\bar{Z}=\frac{\bar{v}}{\bar{\lambda}}
$$

由以上三式，得

$$
R^{2}=2 \bar{v} \bar{\lambda} t
$$

即

$$
t=\frac{R^{2}}{2 \bar{v} \bar{\lambda}}
$$

把 $\bar{v}=5.0 \times 10^{2} \mathrm{~m} / \mathrm{s}, \bar{\lambda}=3.0 \times 10^{-7} \mathrm{~m}, R=2 \mathrm{~m}$ 代入，得出分子前进到 $R=2 \mathrm{~m}$ 处所需的时间为

$$
t=1.3 \times 10^{4} \mathrm{~s}=3.7 \mathrm{~h}
$$

可见，虽然气体分子速率很大（ $\bar{v}=5.0 \times 10^{2} \mathrm{~m} / \mathrm{s}$ ），但由于碰撞频繁，前进是很缓慢的。
[題 16] 某混合理想气体包含 A 和 B 两种分子，已知 A 和 B 分子的质量、有效直径和数密度分别为 $m_{\mathrm{A}}$ 和 $m_{\mathrm{B}} 、 d_{\mathrm{A}}$ 和 $d_{\mathrm{B}}$ 、以及 $n_{\mathrm{A}}$ 和 $n_{\mathrm{B}}$ 。试求在温度为 T 的平衡态，两种分子各自的平均自由程 $\bar{\lambda}_{\mathrm{A}}$ 和 $\bar{\lambda}_{\mathrm{B}}$ 。
【分析】 显然， A 分子的平均自由程 $\bar{\lambda}_{\mathrm{A}}$ 等于它的平均速率 $\bar{v}_{\mathrm{A}}$ 与平均碰撞频率 $\bar{Z}_{\mathrm{A}}$ 之比。 $\bar{v}_{\mathrm{A}}$ 是熟知的。至于 $\bar{Z}_{\mathrm{A}}$ ，由于是混合气体， A 分子不仅要与其他 A 分子碰撞（平均碰撞频率为 $\bar{Z}_{A A}$ ），还要与 B 分子碰撞（平均碰撞频率为 $\bar{Z}_{A B}$ ），故 $\bar{Z}_{A}$ 应是 $\bar{Z}_{A A}$ 与 $\bar{Z}_{A B}$ 之和。 $\bar{Z}_{A A}$ 取决于 $\bar{v}_{\mathrm{A}}, \bar{Z}_{A B}$ 则取决于 A、B分子间的平均相对速率 $\bar{v}_{A B}$ （关于 $\bar{v}_{A B}$ 的公式可参看本章题6的（7）式）。利用有关公式，即可求解. $\bar{\lambda}_{\mathrm{B}}$ 类似。
【解】A.B分子各自的平均速率分别为

$$
\begin{aligned}
& \bar{v}_{\mathrm{A}}=\sqrt{\frac{8 k T}{\pi m_{\mathrm{A}}}} \\
& \bar{v}_{\mathrm{E}}=\sqrt{\frac{8 k T}{\pi m_{\mathrm{B}}}}
\end{aligned}
$$

A.B 分子的平均相对速率为

$$
\bar{v}_{\mathrm{AB}}=\sqrt{\frac{8 k T}{\pi \mu}}
$$

式中

$$
\mu=\frac{m_{\mathrm{A}} m_{\mathrm{B}}}{m_{\mathrm{A}}+m_{\mathrm{B}}}
$$

某个 A 分子与其他 A 分子的平均碰撞频率为

$$
\bar{Z}_{A A}=\sqrt{2} \pi d_{\mathrm{A}}^{2} \bar{v}_{\mathrm{A}} n_{\mathrm{A}}
$$

与 B 分子的平均碰撞频率为

$$
\bar{Z}_{\mathrm{AB}}=\frac{\pi}{4}\left(d_{\mathrm{A}}+d_{\mathrm{B}}\right)^{2} \bar{v}_{\mathrm{AB}} n_{\mathrm{B}}
$$

因此，A 分子的平均碰撞频率为

$$
\bar{Z}_{\mathrm{A}}=\bar{Z}_{\mathrm{AA}}+\bar{Z}_{\mathrm{AB}}=\sqrt{2} \pi d_{\mathrm{A}}^{2} \bar{v}_{\mathrm{A}} n_{\mathrm{A}}+\frac{\pi}{4}\left(d_{\mathrm{A}}+d_{\mathrm{B}}\right)^{2} \bar{v}_{\mathrm{AB}} n_{\mathrm{B}}
$$

A 分子的平均自由程为

$$
\bar{\lambda}_{\mathrm{A}}=\frac{\bar{v}_{\mathrm{A}}}{\bar{Z}_{\mathrm{A}}}=\bar{v}_{\mathrm{A}} /\left[\sqrt{2} \pi d_{\mathrm{A}}^{2} \bar{v}_{\mathrm{A}} n_{\mathrm{A}}+\frac{\pi}{4}\left(d_{\mathrm{A}}+d_{\mathrm{B}}\right)^{2} \bar{v}_{\mathrm{AB}} n_{\mathrm{B}}\right]
$$

其中

$$
\frac{\bar{v}_{\mathrm{AB}}}{\bar{v}_{\mathrm{A}}}=\sqrt{\frac{m_{\mathrm{A}}+m_{\mathrm{B}}}{m_{\mathrm{B}}}}
$$

代入，得

$$
\bar{\lambda}_{\mathrm{A}}=\frac{1}{\pi}\left[\sqrt{2} d_{\mathrm{A}}^{2} n_{\mathrm{A}}+\frac{1}{4}\left(d_{\mathrm{A}}+d_{\mathrm{B}}\right)^{2} \sqrt{\frac{m_{\mathrm{A}}+m_{\mathrm{B}}}{m_{\mathrm{B}}}} n_{\mathrm{B}}\right]^{-1}
$$

同理

$$
\bar{\lambda}_{\mathrm{B}}=\frac{1}{\pi}\left[\sqrt{2} d_{\mathrm{B}}^{2} n_{\mathrm{B}}+\frac{1}{4}\left(d_{\mathrm{A}}+d_{\mathrm{B}}\right)^{2} \sqrt{\frac{m_{\mathrm{A}}+m_{\mathrm{B}}}{m_{\mathrm{A}}}} n_{\mathrm{A}}\right]^{-1}
$$

【题 17】 在阴极射线管中，即使管腔被抽成很高的真空度，也总是还有一些残余的空气存在。因此，从阴极射出的高速电子在通过管腔时，总有一部分因与空气分子相碰而不能直接射到荧光屏上。设阴极射线管工作时，管腔内的温度为 $27^{\circ} \mathrm{C}$ ，管腔的长度为 20 cm 。为了保证有 $90 \%$ 的电子能够不经碰撞直接射到屏上，试问管腔需抽到多高的真空度（用管腔内空气的压强表示）。已知空气分子的有效直径为 $3.0 \times 10^{-10} \mathrm{~m}$ 。
【分析】要求 $90 \%$ 电子直接射到屏上，意即 $N=0.9 N_{0}$ （ $N_{0}$ 是全部电子数）个电子的自由程至少应为管长 $x=20 \mathrm{~cm}$ 。利用

$$
\frac{N}{N_{0}}=\mathrm{e}^{-x / \bar{\lambda}}
$$

的关系即可求出 $N_{0}$ 个电子在管腔中运动的平均自由程 $\lambda$ 。关于（1）式的由来，请见下面附注。
$\bar{\lambda}$ 取决于电子与空气分子的平均碰撞频率 $\bar{Z}$ 和电子的速度 $v . \bar{Z}$ 则与电子的速度 $v$ 、空气分子的大小以及数密度 $n$ 有关。由于管内空气稀薄，可看作理想气体，于是有 $p=n k T$ 。综合以上关系，即可求出管内空气的压强 $p$ 。

附注。为了说明（1）式，让我们设想一种简单的空气模型。设空气分子是半径为 $r$ 的弹性球，均静止，并按立方晶格整齐排列，分子之间的平均距离为 $a$ ，在稀薄的条件下 $a \gg r$ 。任一电子 $A$ 以速度 $v$ 运动，设 $A$ 的运动方向垂直于空气分子层所在的平面，则当 $A$ 穿过一层空气分子时，不发生碰撞的概率应为该层面积与未被分子球遮盖的面积之比，即为

$$
\frac{a^{2}-\pi r^{2}}{a^{2}}=1-\frac{\pi r^{2}}{a^{2}}
$$

当 $A$ 穿过厚为 $x$ ，包含 $\frac{x}{a}$ 层分子的空气层时，不发生碰撞的概率为

$$
\left(1-\frac{\pi r^{2}}{a^{2}}\right)^{\frac{2}{a}} \approx \mathrm{e}^{-\frac{\pi r^{2}}{a^{2}} x}
$$

当 $A$ 从 $x$ 到 $(x+\mathrm{d} x)$ ，即穿过厚为 $\mathrm{d} x$ 的空气薄层时，不发生碰撞的概率为

$$
\mathrm{e}^{-\frac{\pi r^{2}}{a^{2}} x}-\mathrm{e}^{-\frac{\pi r^{2}}{a^{2}}(x+\mathrm{d} x)}=\frac{\pi r^{2}}{a^{3}} \mathrm{e}^{-\frac{\pi r^{2}}{a^{2}} x} \mathrm{~d} x
$$

平均自由程 $\bar{\lambda}$ 就是 $A$ 与空气分子不发生碰撞所能通过的距离，故有

$$
\int_{0}^{\bar{\lambda}} \frac{\pi r^{2}}{a^{3}} \mathrm{e}^{-\frac{\pi r^{2}}{a^{2}} x} \mathrm{~d} x=1
$$

得出

$$
\bar{\lambda}=\frac{a^{3}}{\pi r^{2}}
$$

因此， $A$ 穿过厚为 $x$ 的空气层不发生碰撞的概率为

$$
\mathrm{e}^{-\frac{\pi r^{2}}{a^{2}} x}=\mathrm{e}^{-x / \bar{\lambda}}
$$

设自由程为 $x$ 的电子数为 $N$ 个，总电子数为 $N_{0}$ 个，则

$$
\frac{N}{N_{0}}=\mathrm{e}^{-x / \bar{\lambda}}
$$

此即（1）式。上述论证方法实际上正是历史上克劳修斯首次推导平均自由程公式时所采用的方法。
[解] 设电子在管腔中运动的平均自由程为 $\bar{\lambda}$ ，设从阴极发射的电子总数为 $N_{0}$ ，设有 $N$ 个电子能不经碰撞直接到达荧光屏，即这 $N$ 个电子的自由程至少为管长 $x$ ，于是有

$$
\frac{N}{N_{0}}=\mathrm{e}^{-x / \bar{\lambda}}
$$

或

$$
\bar{\lambda}=-\frac{x}{\ln \frac{N}{N_{0}}}=-\frac{20}{\ln 0.9}=190 \mathrm{~cm}
$$

设电子速度为 $v$ ，设电子与空气分子的平均碰撞频率为 $\bar{Z}$ ，则

$$
\bar{\lambda}=\frac{v}{\bar{Z}}
$$

因电子速度 $v$ 远大于空气分子的热运动速度，可近似认为空气分子静止不动。因电子远小于空气分子，电子的大小可忽略不计。以空气分子的有效半径为半径，以 $v \mathrm{~d} t$ 为折线长度，按电子的运动轨迹作一曲折圆柱体，则在 $\mathrm{d} t$ 时间内此圆柱体内的空气分子都将与该电子碰撞。因此，在 $\mathrm{d} t$ 时间内一电子与空气分子的碰撞次数为

$$
\mathrm{d} N=n\left(\pi r^{2}\right) v \mathrm{~d} t
$$

式中 $n$ 是空气分子的数密度。于是，电子与空气分子的平均碰撞频率为

$$
\bar{Z}=\frac{\mathrm{d} N}{\mathrm{~d} t}=n \pi r^{2} v
$$

代入 $\bar{\lambda}$ 表达式，得

$$
\bar{\lambda}=\frac{v}{Z}=\frac{1}{n \pi r^{2}}
$$

因管内空气稀薄，可看作理想气体，故有

$$
n=\frac{p}{k T}
$$

式中 $p$ 和 $T$ 是管内空气的压强和温度。由以上两式，得

$$
\bar{\lambda}=\frac{k T}{\pi r^{2} p}
$$

故

$$
p=\frac{k T}{\pi r^{2} \bar{\lambda}}
$$

把 $T=300 \mathrm{~K}, r=1.5 \times 10^{-10} \mathrm{~m}$, 上述 $\bar{\lambda}=190 \mathrm{~cm}$, 以及玻尔兹曼常量 $k$ 代入, 得

$$
p=3.1 \times 10^{-2} \mathrm{~Pa}
$$

【题 18】设气体分子的热运动速度分布在速度空间具有球对称性，速率分布函数为 $f(v)$ ，分子数密度为 $n$ 。

试证明：1. 速率在 $v$ 到 $(v+\mathrm{d} v)$ 的分子，单位时间与单位面积容器壁碰撞的分子数为 $\frac{1}{4}(n f(v) \mathrm{d} v) v$.
2. 全部气体在单位时间内与单位面积容器壁碰撞的分子数为 $\frac{1}{4} n \bar{v}$ ，其中 $\bar{v}$ 的分子的平均速率。
【分析】众所周知，当气体分子的速度分布为麦克斯韦分布时，单位时间与单位面积容器壁碰撞的分子数为 $\frac{1}{4} n \bar{v}$ ，其中 $n$ 为分子数密度， $\bar{v}$ 为分子平均速率，其实这一结果对所有具有球对称速度分布的情形均适用，本题即为指出这一点而编。
【解】由于分子速度分布在速度空间具有球对称性，故在速度空间以 $v$ 为半径的球面上处处具有相同的概率，从而可引入本题的速率分布函数 $f(v)$ 。

考虑速率为 $v$ 的分子，此种分子速度分量 $v_{x}$ 的分布函数为 $F_{v}\left(v_{x}\right)$ 。为求 $F_{v}\left(v_{x}\right)$ ，如图，在速度空间取半径为 $v$ 的球面，在球面上取如图所示的球带，则有

$$
\begin{aligned}
F_{v}\left(v_{x}\right) \mathrm{d} v_{x} & =\text { 速度处在球带上的概率 }=\text { 球带面积 } / 4 \pi v^{2} \\
& =2 \pi \sqrt{v^{2}-v_{x}^{2}} v \mathrm{~d} \phi / 4 \pi v^{2}=\frac{\sqrt{v^{2}-v_{x}^{2}} \mathrm{~d} \phi}{2 v}
\end{aligned}
$$

因

$$
v_{x}=v \sin \varphi
$$

故

$$
\mathrm{d} v_{x}=v \cos \phi \mathrm{~d} \phi=\sqrt{v^{2}-v_{x}^{2}} \mathrm{~d} \phi
$$

![img-311.jpeg](img-311.jpeg)

热图3-18-1

代入，得

$$
F_{v}\left(v_{x}\right)=\frac{1}{2 v}
$$

因速率仅限于 $v$ ，故球面外 $F_{v}\left(v_{x}\right)=0$ ，即有

$$
F_{v}\left(v_{x}\right)= \begin{cases}\frac{1}{2 v}, & \text { 当 } v \geqslant v_{x} \geqslant-v \\ 0, & \text { 当 }|v_{x}|>v\end{cases}
$$

取速率为 $v$ 的分子，其分子数密度为 $n(v)$ ，则单位体积内速度分量在 $v_{x}$ 到 $\left(v_{x}+\mathrm{d} v_{x}\right)$ 之间的分子数为 $n(v) F_{v}\left(v_{x}\right) \mathrm{d} v_{x}$ 。在所有 $v_{x}$ 介于 $v_{x}$ 与 $\left(v_{x}+\mathrm{d} v_{x}\right)$ 之间的分子中，在 $\mathrm{d} t$ 时间内能够与垂直于 $x$ 轴的面元 dS 相碰的分子，应是在以 dS 为底面，以 $v_{x} \mathrm{~d} t$ 为高的柱体内的分子，其数目为 $n(v) F_{v}\left(v_{x}\right) \mathrm{d} v_{x} \mathrm{~d} S v_{x} \mathrm{~d} t$ ，因此，单位时间碰到单位面积上速度分量 $v_{x}$ 在 $v_{x}$ 到 $\left(v_{x}+\mathrm{d} v_{x}\right)$之间的分子数应为

$$
n(v) f_{v}\left(v_{x}\right) v_{x} \mathrm{~d} v_{x}
$$

$v_{x}<0$ 的分子显然不会与 $\mathrm{d} S$ 面元相碰，所以将上式从 0 到 $\infty$ 对 $v_{x}$ 积分，即可求得速率为 $v$ 的分子在单位时间与单位面积容器壁相碰的分子数为

$$
\int_{0}^{\infty} n(v) F_{v}\left(v_{x}\right) v_{x} \mathrm{~d} v_{x}
$$

把 $F_{v}\left(v_{x}\right)$ 的结果代入，得

$$
\int_{0}^{\infty} n(v) F_{v}\left(v_{x}\right) v_{x} \mathrm{~d} v_{x}=\int_{0}^{v} n(v) \frac{1}{2 v} v_{x} \mathrm{~d} v_{x}=\frac{1}{4} n(v) v
$$

1. 取速率从 $v_{1}$ 到 $v_{2}\left(v_{2}>v_{1}\right)$ 的分子，单位时间与单位面积容器壁碰撞的分子数为

$$
\sum_{v_{1}}^{v_{2}} \frac{1}{4} n(v) v
$$

若 $v_{1}=v, v_{2}=v+\mathrm{d} v$, 将

$$
\sum_{v}^{v+\mathrm{d} v} \frac{1}{4} n(v) v=\frac{1}{4}\left(\sum_{v}^{v+\mathrm{d} v} n(v)\right) v
$$

在 $v$ 到 $(v+\mathrm{d} v)$ 对 $n(v)$ 求和，即为 $v$ 到 $(v+\mathrm{d} v)$ 的分子数密度，其值为 $n f(v) \mathrm{d} v$ ，故有

$$
\sum_{v}^{\mathrm{v} \mathrm{d} v} n(v)=n f(v) \mathrm{d} v
$$

因此，速率在 $v$ 到 $(v+\mathrm{d} v)$ 的分子中，单位时间与单位面积容器壁碰撞的分子数为

$$
\frac{1}{4}[n f(v) \mathrm{d} v] v
$$

2. 全部气体中在单位时间内与单位面积容器壁碰撞的分子数为

$$
\int_{0}^{\infty} \frac{1}{4}[n f(v) \mathrm{d} v] v=\frac{n}{4} \int_{0}^{\infty} v f(v) \mathrm{d} v=\frac{1}{4} n \bar{v}
$$

式中 $\bar{v}$ 为分子平均速率。
【题 19】 如图，在温度为 $1000^{\circ} \mathrm{C}$ 的真空加热室中蒸发产生的铍原子（原子量为 9 ）气体经小孔逸出，透过垂直狭缝形成原子束后，进入长度为 1 m 的真空大容器中，容器的右壁与原子束垂直。

1. 试求原子束中原子的速率分布，平均速率和方均报速率。2. 原子束中的原子进入真空容器后，将与残存的稀薄空气分子发生碰撞。设原子束行进 1 m 后，其强度（单位时间内通过的原子数）减小为原来的 $\frac{1}{\mathrm{e}}$ 。已知真空容器的温度为 300 K ，被原子与空气分子的碰撞截面为 $10^{-20} \mathrm{~m}^{2}$ ，忽略被原子之间的碰撞。试问真空容器中残存空气的压强是多少?
3. 被原子每行进 1 m 所需的平均时间 $\tau$ 是多少?
4. 设铍原子束刚进入真空容器时的粒子数密度为 $n_{0}=10^{10} \mathrm{~cm}^{-3}$ ，设铍原子与容器壁作完全非弹性碰撞。试估计因铍原子束与容器壁碰撞对后者所施加的压强。
【分析】由上题（本章题 18）可知，铍原子气体在单位时间内通过小孔单位截面射出的原子总数为 $\frac{1}{4} n \bar{v}$ ，这里的 $\bar{v}$ 是原子的平均速率。其中速率在 $v$ 到 $(v+\mathrm{d} v)$ 的原子数为 $\frac{1}{4}(n f(v) \mathrm{d} v) v$ ，后者在前者中所占的百分数，即为出射原子束中的原子速率处在 $v$ 到 $(v+\mathrm{d} v)$ 的概率，此概率除以 $\mathrm{d} v$ ，即为原子束中原子的速率分布函数 $F(v)$ 。原子气可当作理想气体， $\bar{v}$ 可由麦克斯韦速率分布求出，于是 $F(v)$ 可解。由 $F(v)$ ，不难计算铍原子束中原子的平均速率和方均根速率。

真空容器中的稀薄空气可看作理想气体，故 $p_{\text {空 }}=n_{\text {空 }} k T_{\text {空 }}$ ，其中 $T_{\text {空 }}$ 已知，为求 $p_{\text {空 }}$ 需计算空气分子的数密度 $n_{\text {空 }}$ 。铍原子与空气分子的平均碰撞频率为 $\bar{Z}=\sigma \bar{u} n_{\text {空 }}$ ，其中碰撞截面 $\sigma$ 已知， $\bar{u}$ 为铍原子相对空气分子的平均速率。因铍原子束来自高湿加热室，且铍原子质量小于空气分子质量，绝大部分铍原子的速率应远大于空气分子的速率，故平均相对速率 $\bar{u}$ 可用原子束中铍原子的平均速率 $\bar{v}_{\text {束 }}$ 代替。于是有 $n_{\text {空 }}=\bar{Z} / \sigma \bar{v}_{\text {束 }}$ ，所以 $n_{\text {空 }}$ 的计算又转化为 $\bar{Z}$ 的计算。 $\bar{Z}$ 与铍原子在空气中的平均自由程 $\bar{\lambda}$ 的关系为 $\bar{Z}=\bar{v}_{\text {束 }} / \bar{\lambda}$ ，因而又需计算 $\bar{\lambda}$ 。铍原子与空气分子的碰撞具有无后效应性，参阅本章题 15 可知，铍原子自由程的分布与理想气体分了自由程的分布相同。由原子束行进 1 m 其强度衰减的情况，可以确定 $\bar{\lambda}$ 。至此， $p_{\text {空 }}$ 可求。

原子束中铍原子行进的平均速率 $\bar{v}_{\text {束 }}$ 已求出，由此原子每行进 1 m 所需平均时间 $\tau$ 容易求得。

铍原子束进人容器后，其分子数密度从左端的 $n_{0}$ 减为右端的 $\frac{n_{0}}{\mathrm{c}}$ ，每个铍原子与容器右壁作完全非弹性碰撞施予右壁的冲量为 $m v$ ，利用压强与冲量的关系，即可求出原子束对真空容器右壁所施加的压强。
【解】1. 加热室内铍蒸汽单位时间内通过小孔的单位面积射出的原子数（见本章题 18）为

$$
\frac{1}{4} n \bar{v}
$$

其中 $n$ 是铍原子蒸汽的原子数密度， $\bar{v}$ 是铍原子的平均速率。由本章题 18 ，铍原子中速率在 $v$ 到 $(v+\mathrm{d} v)$ 的原子，在单位时间通过小孔单位面积射出的原子数为

$$
\frac{1}{4}(n f(v) \mathrm{d} v) v
$$

其中 $f(v)$ 为麦克斯韦速率分布函数。因此，在射出的原子束中原子速率在 $v$ 到 $(v+\mathrm{d} v)$ 之间的# 概率为 

$$
F(v) \mathrm{d} v=\frac{1}{4}[n f(v) \mathrm{d} v] v / \frac{1}{4} n \bar{v}=\frac{v f(v) \mathrm{d} v}{\bar{v}}
$$

其中 $F(v)$ 是原子束中的原子速率分布，为

$$
F(v)=\frac{v f(v)}{\bar{v}}
$$

由麦克斯韦分布 $f(v)$ 得出

$$
\bar{v}=\sqrt{\frac{8 k T}{\pi m}}
$$

代入, 得

$$
F(v)=4 \pi \sqrt{\frac{\pi m}{8 k T}}\left(\frac{m}{2 \pi k T}\right)^{\frac{3}{2}} v^{3} \mathrm{e}^{-m v^{2} / 2 k T}
$$

其中 $T=1273 \mathrm{~K}, m$ 为铍原子质量。
原子束中原子的平均速率为

$$
\bar{v}_{\text {束 }}=\int_{0}^{\infty} v F(v) \mathrm{d} v=\frac{1}{\bar{v}} \int_{0}^{\infty} v^{2} f(v) \mathrm{d} v
$$

其中的定积分即为麦克斯韦速率分布给出的方均速率，即

$$
\int_{0}^{\infty} v^{2} f(v) \mathrm{d} v=\overline{v^{2}}=\frac{3 k T}{m}
$$

故

$$
\bar{v}_{\text {束 }}=\frac{\overline{v^{2}}}{\bar{v}}=\frac{3 k T}{m} / \sqrt{\frac{8 k T}{\pi m}}=\sqrt{\frac{9 \pi k T}{8 m}}=\sqrt{\frac{9 \pi R T}{8 \mu}}
$$

把 $\mu=9 \times 10^{-3} \mathrm{~kg} / \mathrm{mol}$ 等量代入，得

$$
\bar{v}_{\text {束 }}=2.04 \times 10^{3} \mathrm{~m} / \mathrm{s}
$$

原子束中原子的方均根速率为

$$
\sqrt{v_{\text {束 }}^{2}}=\left[\int_{0}^{\infty} v^{2} F(v) \mathrm{d} v\right]^{\frac{1}{2}}
$$

把 $F(v)$ 表达式代入，积分，得

$$
\sqrt{v_{\text {束 }}^{2}}=\sqrt{\frac{4 k T}{m}}=\sqrt{\frac{4 R T}{\mu}}=2.17 \times 10^{3} \mathrm{~m} / \mathrm{s}
$$

2. 铍原子与空气分子的碰撞也具有无后效应性，参看本章题 15 的讨论可知，理想气体处于平衡态时，分子自由程的分布仅由这种无后效应性的碰撞所确定，因此铍原子在真空容器中行进的自由程分布必定等同于理想气体分子的自由程分布。由此，铍原子的自由程达到 $\lambda$ 时，沿未被碰撞的概率为

$$
\mathrm{e}^{-\lambda / \bar{\lambda}}
$$

这一概率也相当于自由程超过 $\lambda$ 的原子数所占的百分比，即等于减弱的原子束强度与原来的原子束强度之比，即为 $\frac{1}{\mathrm{e}}$ ，故有

$$
\mathrm{e}^{-\lambda / \lambda}=\frac{1}{\mathrm{e}}=\mathrm{e}^{-1}
$$

即

$$
\lambda=\bar{\lambda}
$$

由题设的条件， $\lambda=1 \mathrm{~m}$ ，因此平均自由程为

$$
\bar{\lambda}=1 \mathrm{~m}
$$

钹原子来自 $T=1273 \mathrm{~K}$ 的高温，其热运动与真空容器中温度为 $T_{\odot}=300 \mathrm{~K}$ 的空气分子的热运动相比，要剧烈得多。再考虑到钹原子量 9 小于空气的平均分子量 29. 因此，在讨论钹原子与空气分子的碰撞时，可忽略空气分子的运动。于是，钹原子的平均自由程 $\bar{\lambda}$ 与平均碰撞频率 $\bar{Z}$ （钹原子与空气分子的碰撞）的关系为

$$
\bar{\lambda}=\frac{\bar{v}_{\text {业 }}}{\bar{Z}}
$$

其中 $\bar{v}_{\text {业 }}$ 是钹原子束的平均速率。
$\bar{Z}$ 与碰撞截面 $\sigma$ 的关系为

$$
\bar{Z}=\sigma \bar{v}_{\text {业 }} n_{\odot}
$$

其中 $n_{\odot}$ 是空气分子的数密度. 由以上两式, 得

$$
n_{\odot}=\frac{1}{\sigma \bar{\lambda}}
$$

真空容器中空气压强为

$$
\begin{aligned}
p_{\odot} & =n_{\odot} k T_{\odot} \\
& =\frac{k T_{\odot}}{\sigma \bar{\lambda}}
\end{aligned}
$$

把 $\sigma=10^{-20} \mathrm{~m}^{2}$ 等有关数据代入，得

$$
p_{\odot}=0.41 \mathrm{~Pa}
$$

3. 键原子每行进 1 m 所需的平均时间为

$$
\begin{aligned}
\bar{r} & =\frac{1}{\bar{v}_{\text {业 }}} \\
& =4.9 \times 10^{-4} \mathrm{~s}
\end{aligned}
$$

4. 速率在 $v$ 到 $(v+\mathrm{d} v)$ 之间的钹原子，在 $\mathrm{d} t$ 时间与容器壁 $\mathrm{d} S$ 面元发生完全非弹性碰撞的原子数为

$$
\left[n^{\prime} F(v) \mathrm{d} v\right] v \mathrm{~d} t \mathrm{~d} S
$$

式中 $n^{\prime}$ 是原子束碰壁前的原子数密度，它与刚进入容器时的原子数密度 $n_{0}$ 的关系为

$$
n^{\prime}=\frac{n_{0}}{\mathrm{e}}
$$

每个原子与器壁完全非弹性短撞给予器壁的冲量为 $m v$ ，故 $\mathrm{d} S$ 面元在 $\mathrm{d} t$ 时间内受到的原子束施予的总冲量为

$$
\int_{0}^{\infty} m v\left[n^{\prime} F(v) \mathrm{d} v\right] v \mathrm{~d} t \mathrm{~d} S
$$

上述总冲量除以 $\mathrm{d} t$ 和 $\mathrm{d} S$ ，即得容器壁所受压强为

$$
\begin{aligned}
p & =\int_{0}^{\infty} m v n^{\prime} F(v) v \mathrm{~d} v=\frac{n_{0} m}{\mathrm{e}} \int_{0}^{\infty} v^{2} F(v) \mathrm{d} v \\
& =\frac{n_{0} m}{\mathrm{e}} \overline{v_{\mathrm{B}}^{2}}=\frac{n_{0} m}{\mathrm{e}} \cdot \frac{4 k T}{m}=\frac{4 k T n_{0}}{\mathrm{~m}}
\end{aligned}
$$

把 $n_{0}=10^{10} \mathrm{~cm}^{-3}=10^{16} \mathrm{~m}^{-3}$ 等数据代入，得

$$
p=2.6 \times 10^{-4} \mathrm{~Pa}
$$

【题 20】 在气象学中，降雨量是指雨区地面雨水的累加高度，今在离地面足够高处有一片厚度可忩略不计的降雨云层，单位时间的降雨量 $Q$ 为常量，假设雨滴在垂直下落过程中近似保持球体形状，半径均为 $R$ ，空气对雨滴的阻力的大小与雨滴的速度大小成正比，比例系数为常量 $\alpha$ 。

1. 若在雨区有一飞虫以速率 $u$ 作水平飞行，飞虫也近似看作球体，半径为 $r$ ，试在降雨稳定的持续时间内，确定飞虫在雨中的平均自由程（即飞虫每相邻两次与雨滴碰撞之间飞过的路程之平均值）的上限。

再用 $Q=10 \mathrm{~cm} / \mathrm{h}, R=1.00 \mathrm{~mm}, \alpha=3.00 \times 10^{-3} \mathrm{~g} / \mathrm{s}, u=10.0 \mathrm{~m} / \mathrm{s}, r=4.00 \mathrm{~mm}$ 等数据计算此上限。
2. 设在某段高度范围内雨滴降落速度可以认为是常量 $v$ ，而飞虫在该区域恰以速率 $u=v$飞行，如果飞虫朝任一空间方向飞行的可能性都相同，试问在不同的飞行方向上，飞虫在雨中的平均自由程是否相同？如果相同，试算出这相同的平均自由程；如果不相同，试计算这些平均自由程的平均值。
【分析】 取 $y$ 轴垂直向下，原点 $y=0$ 在云层。
首先，讨论雨滴的运动、雨滴从云层下落，受到重力 $m g$ （向下）和阻力 $\alpha v$ （向上）的作用，速度从零逐渐增大，当 $m g=\alpha v$ 时， $v$ 达到极大值 $v_{\text {max }}$ ，尔后以 $v_{\text {max }}$ 与速下降。当然，能否达到 $v_{\text {max }}$ ，与云层的高度有关。

其次，讨论降雨。由于雨滴速度随高度变化为 $v(y)$ ，而稳定降雨量 $Q$ 与 $y$ 无关，为常数，因此雨滴的平均数密度应随高度变化，越往下越小，为 $n(y)$ 。由 $Q$ 可确定 $v(y)$ 与 $n(y)$ 的关系。

再次，讨论飞虫与雨滴的碰撞。由题设，飞虫在某高度 $y$ 处以 $u$ 水平飞行，则飞虫相对雨滴的速度 $u_{\text {相对 }}$ 是 $u$ （水平方向）与 $\nu(y)$ （垂直向下）的矢量差。在 $\mathrm{d} t$ 时间内，能与飞虫碰撞的雨滴应处在长度为 $u_{\text {相对 }} \mathrm{d} t$ ，底面为半径 $(R+r)$ 的圆所构成的圆柱体内。圆柱体内的雨滴数就是飞虫在 $\mathrm{d} t$ 时间内与雨滴碰撞的平均次数。由此，飞虫与雨滴相邻两次碰撞的平均时间及飞虫的平均自由程 $\bar{\lambda}$ 可求。因为在不同高度 $y$ 处的 $v(y)$ 不同， $\bar{\lambda}$ 亦不同，应表为 $\bar{\lambda}(y)$ ，于是 $\lambda_{\text {max }}$ 可求。

如果在某高度范围内，雨滴速度与飞虫速度相同且恒定，即 $u=v=$ 常量，但飞虫可沿各种方向运动。则当飞虫飞行方向不同时，飞虫相对雨滴的速度 $u_{\text {相对 }}$ 不同， $u_{\text {相对 }}$ 只与 $v$ 和 $u$ 之间的夹角 $\theta$ 有关。因而平均自由程与 $\theta$ 有关，为 $\bar{\lambda}(\theta)$ 。

在飞虫朝各个空间方向飞行的可能性相同的条件下， $\bar{\lambda}(\theta)$ 对各种空间方向的平均值为

$$
\overline{\lambda(\theta)}=\frac{1}{\Omega_{0}} \int \bar{\lambda}(\theta) \mathrm{d} \Omega
$$

式中 $\mathrm{d} \Omega$ 是速度空间任意立体角元， $\Omega_{0}=4 \pi$ 是全速度空间所张立体角。在速度空间以 $u=v$ 为半径作一球面，则相同的立体角元 $\mathrm{d} \Omega$ 在球面上所张的面积元相同，于是

$$
\overline{\bar{\lambda}(\theta)}=\frac{1}{S_{0}} \int \bar{\lambda}(\theta) \mathrm{d} S
$$

式中 $S_{0}=4 \pi u^{2}$ 是速度空间的球面积。由于 $\bar{\lambda}(\theta)$ 是 $\theta$ 的函数，可将球面按不同 $\theta$ 分割成许多球带，则从 $\theta$ 到 $(\theta+\mathrm{d} \theta)$ 的球带的面积为

$$
\mathrm{d} S=2 \pi u \sin \theta \cdot u \mathrm{~d} \theta
$$

代入上式，得

$$
\overline{\bar{\lambda}(\theta)}=\int_{0}^{\pi} \bar{\lambda}(\theta) \frac{1}{2} \sin \theta \mathrm{~d} \theta
$$

于是 $\overline{\bar{\lambda}(\theta)}$ 可求。
【解】1. 取 $y$ 输垂直向下，原点 $y=0$ 在云层。由牛顿第二定律，雨滴的运动方程为

$$
m \frac{\mathrm{~d} v}{\mathrm{~d} t}=m g-\alpha v
$$

式中 $m$ 是雨滴的质量，若水的密度为 $\rho$ ，则

$$
m=\frac{4}{3} \pi R^{3} \rho
$$

可见雨滴的速度 $v(y)$ 从零开始增大，当 $m g=\alpha v$ 时， $v(y)=v_{\text {max }}$ 达到最大，为

$$
v_{\max }=\frac{m g}{\alpha}
$$

$v_{\text {max }}$ 能否达到，取决于云层的高度。
设高度为 $y$ 处的雨滴的平均数密度为 $n(y)$ ，则单位时间通过水平面积 $S$ 的雨滴总数为 $n(y) v(y) S$ ，对应的雨水流量为 $\frac{4}{3} \pi R^{3} n(y) v(y) S$ ，在降雨稳定的持续时间内它应等于 $Q S(Q$是降雨量)，因此有

$$
Q S=\frac{4}{3} \pi R^{3} n(y) v(y) S
$$

即

$$
n(y)=\frac{Q}{\frac{4}{3} \pi R^{3} v(y)}
$$

可见 $n(y) \propto \frac{1}{v(y)}$ ，速度越大处雨滴数密度越小，这是降雨量稳定的必然结果。
当飞虫以 $u$ 水平飞行时，因雨滴以 $v(y)$ 垂直下降，飞虫相对雨滴的速度为

$$
u_{\text {相对 }}=\sqrt{u^{2}+v^{2}(y)}
$$

相对雨滴静止的观察者可取以飞虫为中心，以 $(R+r)$ 为半径的圆在 $\mathrm{d} t$ 时间内扫过的空间区域，其体积为

$$
\mathrm{d} V=\pi(R+r)^{2} u_{\text {相对 }} \mathrm{d} t
$$

显然，在此空间区域内的雨滴数为

$$
n(y) \mathrm{d} V=n(y) \pi(R+r)^{2} u_{\text {相对 }} \mathrm{d} t
$$

这就是在 $\mathrm{d} t$ 时间内飞虫与雨滴碰撞的平均次数。因此，单位时间内飞虫与雨滴碰撞的平均次数为

$$
n(y) \pi(R+r)^{2} u_{\text {相对 }}=n(y) \pi(R+r)^{2} \sqrt{u^{2}+v^{2}(y)}
$$

飞虫与雨滴相邻两次碰撞的平均时间为

$$
\bar{\tau}=\frac{1}{n(y) \pi(R+r)^{2} \sqrt{u^{2}+v^{2}(y)}}
$$

飞虫的平均自由程（相对地面观察者）为

$$
\bar{\lambda}=u \bar{\tau}=\frac{u}{n(y) \pi(R+r)^{2} \sqrt{u^{2}+v^{2}(y)}}
$$

把 $n(y)$ 的结果代入，得

$$
\bar{\lambda}=\frac{4 R^{3} u v(y)}{3 Q(R+r)^{2} \sqrt{u^{2}+v^{2}(y)}}
$$

可见 $\bar{\lambda}=\bar{\lambda}(y)$ 是 $y$ 的函数。当 $v(y)=v_{\text {max }}=\frac{m g}{a}$ 时， $\bar{\lambda}(y)=\bar{\lambda}_{\text {max }}$ ，为

$$
\bar{\lambda}_{\max }=\frac{4 R^{3} u v_{\max }}{3 Q(R+r)^{2} \sqrt{u^{2}+v^{2}(y)}}
$$

式中

$$
v_{\max }=\frac{m g}{a}=\frac{4 \pi R^{3} \rho g}{3 a}
$$

把 $R, \rho, a$ 及 $g=9.80 \mathrm{~m} / \mathrm{s}^{2}$ 等数据代入，得

$$
v_{\max }=13.7 \mathrm{~m} / \mathrm{s}
$$

把 $R, r, Q, u, v_{\text {max }}$ 等数据代入 $\bar{\lambda}_{\text {max }}$ ，得

$$
\bar{\lambda}_{\max }=15.5 \mathrm{~m}
$$

2. 若在某高度范围， $u=v=$ 常量，但飞虫飞行方向任意，则当飞虫沿不同方向飞行时，因飞虫相对雨滴的速度 $u_{\text {相对 }}$ 不同，故平均自由程 $\bar{\lambda}$ 不同。

如热图3-20-1， $\boldsymbol{v}$ 为雨滴方向， $\boldsymbol{u}$ 为飞虫飞行方向， $-\boldsymbol{v}$ 与 $\boldsymbol{u}$ 的夹角为 $\theta$ ，则飞虫相对雨滴的速度 $u_{\text {相对 }}$ 如热图 $3-20-1$ 所示。因 $v=u$ ，故 $u_{\text {相对 }}$ 的大小为

$$
u_{\text {相对 }}=2 v \cos \frac{\theta}{2}
$$

与第1问中间理，飞虫与雨滴相邻两次碰撞之间的平均时间为

$$
\bar{\tau}(\theta)=\frac{1}{n(y) \pi(R+r)^{2} u_{\text {相对 }}}
$$

因现在 $u_{\text {相对 }}=u_{\text {相对 }}(\theta)$ ，故 $\bar{\tau}=\bar{\tau}(\theta)$ 随 $\theta$ 变。式中

$$
n(y)=\frac{Q}{\frac{4}{3} \pi R^{3} v}
$$

因此，当飞虫沿 $\theta$ 方向飞行时，其平均自由程为（注意 $u=v$ ）

$$
\bar{\lambda}(\theta)=u \bar{\tau}(\theta)=\frac{v}{n(y) \pi(R+r)^{2} u_{\text {相对 }}}
$$

![img-312.jpeg](img-312.jpeg)

热图3-20-1

$$
=\frac{\frac{4}{3} \pi R^{3} v^{2}}{\pi(R+r)^{2} \cdot 2 v \cos \frac{\theta}{2}}=\frac{2 R^{3} v}{3 Q(R+r)^{2} \cos \frac{\theta}{2}}
$$

为了计算 $\bar{\lambda}(\theta)$ 对各种空间方向的平均值，如热图 $2-20-2$ ，在速度空间以 $u=v$ 为半径作球面，其"面积"为 $4 \pi u^{2}$ 。因飞虫朝任一空间方向飞行的可能性都相同，因此飞行速度矢量 $\boldsymbol{u}$ 的端点落在 $\theta$ 到 $(\theta+\mathrm{d} \theta)$ 球带上的概率为球带"面积"与球面"面积"之比，即

$$
\frac{2 \pi u \sin \theta \cdot u \mathrm{~d} \theta}{4 \pi u^{2}}=\frac{1}{2} \sin \theta \mathrm{~d} \theta
$$

因而 $\bar{\lambda}(\theta)$ 对各种空间方向的平均值 $\overline{\bar{\lambda}(\theta)}$ 为

$$
\begin{aligned}
\overline{\bar{\lambda}(\theta)} & =\int_{0}^{\pi} \bar{\lambda}(\theta) \cdot \frac{1}{2} \sin \theta \mathrm{~d} \theta \\
& =\int_{0}^{\pi} \frac{2 R^{3} v}{3 Q(R+r)^{2} \cos \frac{\theta}{2}} \cdot \frac{1}{2} \sin \theta \mathrm{~d} \theta \\
& =\frac{2 R^{3} v}{3 Q(R+r)^{2}} \int_{0}^{\pi} \sin \frac{\theta}{2} \mathrm{~d} \theta=\frac{4 R^{3} v}{3 Q(R+r)^{2}}
\end{aligned}
$$

其中用到
![img-313.jpeg](img-313.jpeg)

热图3-20-2

【题 21】气体粘滞系数的测定。
把待测气体充入容积为 $V_{0}$ 的烧瓶中，使其压强 $p_{0}$ 大于外界大气压强 $p_{0}$ ，其温度则与外界温度 $T_{0}$ 一致。烧瓶口外连接长为 $L$ 、半径为 $r$ 的水平细阔管与大气相通。细管与烧瓶连接处有阔门，先关闭。打开阔门后瓶内气体经细管向外流出，经过 $\Delta t$ 时间后再将阔门关闭，测出瓶内气体压强为 $p_{e}$ ，由此便可确定该气体的粘滞系数 $\eta$ 。设整个过程中，烧瓶、细管、外界处处温度相同且保持不变，试导出 $\eta$ 的计算公式。

某次实验以二氧化碳为待测气体，有关实验数据为， $V_{0}=1.0 \mathrm{~L}, p_{b}=\frac{1600}{760} \mathrm{~atm}, P_{0}=$ $\frac{735}{760} \mathrm{~atm}, t_{0}=15 \mathrm{C} ， L=10 \mathrm{~cm}, r=0.050 \mathrm{~mm}, \Delta t=22 \mathrm{~min}, p_{e}=\frac{1.350}{760} \mathrm{~atm}$ ，试利用导出的公式计算二氧化碳的粘滞系数 $\eta$ 。
【分析】 烧瓶内的气体经细管向外流出，气体粘滞性的大小将影响流出的快慢。在同样的时间内， $\eta$ 越大，流出的气体质量应越小，即终态的气体压强 $p_{e}$ 应越大。因此，在其他量都确定的前提下，有可能通过 $p_{e}$ 的测量来确定 $\eta$ 值，本题设计的测量 $\eta$ 的实验，原则上是可行的。

尽管如此，实验涉及的过程仍相当复杂，这就要求采用一系列大体上符合实验情形的简化假设和模型，否则理论分析就无法进行。

现在作具体分析。
瓶内气体的体积和温度不变，随着气体从瓶口经细管流出，瓶内气体的质量、密度、特别是压强都将逐渐减少，其变化取决于气体经瓶口流出的体积流量 $V_{Q}$ （单位时间从瓶口流出的气体体积）。假设瓶内气体为理想气体，利用其状态方程可给出瓶内气体压强的变化与 $V_{Q}$ 的关系。再看水平细圆管内的气体。与瓶口相连的细管入口处的气体压强就是瓶内气体的压强 $p$ ，与大气相连的细管出口处的气体压强则为大气压强 $p_{0}$ ，可见细管内各处的气体压强从而气体密度是逐渐变化的，这表明细管内气体具有可压缩性，否则密度应不变、沿细管取 $x$ 轴，取细管内各处气体的压强和密度表为 $p_{x}$ 和 $p_{x}$ （即假设细管内任意 $x$ 处截面上各点的 $p_{x}$ 相同， $p_{x}$ 相同，忽略压强和密度沿细管径向的变化）。对于细管内从 $x$ 到 $(x+\mathrm{d} x)$ 的任一小段而言，正是由 $p_{x}$ 和 $p_{x-\mathrm{d} x}$ 的不同，推动了气体沿细管流动。

大家知道，流体力学中的泊肃叶公式确定了粘滞流体通过细圆管的流量的公式。它指出，当粘滞系数为 $\eta$ 的流体流过细圆管时，每秒流过细管中任一圆截面的流体体积为

$$
V_{Q}=\frac{\pi r^{4}}{8 \eta}\left(\frac{p_{1}-p_{2}}{l}\right)
$$

式中 $r$ 和 $l$ 是细圆管的半径和长度， $\left(p_{1}-p_{2}\right)$ 是细管两端的压强差。泊肃叶公式适用于不可压缩的粘滞流体。在本题中，可把它用于细管中任意 $\mathrm{d} x$ 小段，即忽略 $\mathrm{d} x$ 小段气体的可压缩性。由此，可把细管任意 $x$ 处的 $V_{Q}$ [注意，细管各处的 $V_{Q}$ 不同，应为 $V_{Q}(x)$ ] 与前后的压强差（ $p_{x}-$ $\left.p_{x+\mathrm{d} x}\right)$ 以及 $\eta$ 联系起来。另外，因细管很细而并不很长，可以假设在每一时刻管内气体均作稳定流动，即尽管气体密度 $\rho_{x}$ 和流量 $V_{Q}(x)$ 在管内处处不同，但质量流量 $\rho_{x} V_{Q}(x)$ 却为常量，与 $x$无关。这样，便可通过积分，把瓶口处的 $V_{Q}\left[\right.$ 即 $\left.V_{Q}(0)\right]$ 与细管两端气体的压强 $p$ 和 $p_{0}$ 以及 $\eta$ 联系起来，这是关键的 步。

把以上对瓶内和细管内气体的讨论结合起来，即可顺利求解。
［解］设瓶内气体为理想气体。瓶内气体的体积和温度恒定，分别为 $V_{0}$ 和 $T_{0}$ ，任意 $t$ 时刻瓶内气体的压强、质量、密度分别为 $p 、 M 、 \rho$ ，经瓶口流出的气体的体积流量（即单位时间经瓶口流出的气体体积）为 $V_{Q}$ 。由理想气体状态方程

$$
p V_{0}=\frac{M}{\mu} R T_{0}
$$

得出从 $t$ 到 $(t+\mathrm{d} t)$ 时间内，气体质量的改变为

$$
\mathrm{d} M=\frac{\mu V_{0}}{R T_{0}} \mathrm{~d} p
$$

由 $V_{Q}$ 定义，气体流出的质量 $-\mathrm{d} M$ 与 $V_{Q}$ 的关系为

$$
-\mathrm{d} M=\rho V_{Q} \mathrm{~d} t
$$

由状态方程，得

$$
\rho=\frac{M}{V_{0}}=\frac{\mu}{R T_{0}} p
$$

把（1）、（3）式代入（2）式，得

$$
-V_{0} \mathrm{~d} p=V_{Q} p \mathrm{~d} t
$$

式中的 $V_{Q}=V_{Q}(0)$ ，见下文。
如图，沿水平细圆管长度方向建立 $x$ 坐标， $x=0$ 处是细管与瓶口连接处，气体压强为 $p$ （即瓶内气体压强）； $x=L$ 处是细管与大气相通处，气体压强为 $p_{0}$ （即大气压强）；任意 $x$ 处的气体压强为 $p_{x}$ 。由理想气体状态方程，细管内任意 $x$ 处的气体密度 $\rho_{x}$ 为

$$
\rho_{x}=\frac{\mu}{R T_{0}} p_{x}
$$

在细管内任取从 $x$ 到 $(x+\mathrm{d} x)$ 的一小段，忽略在此小段内气体的可压缩性，在此小段内气体流速有径向分布，管壁附近流速为零，管轴处流速最大，由粘滞流体在水平圆管道中流动的泊肃叶公式，在管中任意 $x$ 处，气体的体积流量 $V_{Q}(x)$ 为

$$
V_{Q}(x)=\frac{\pi r^{4}}{8 \eta} \cdot \frac{\left(p_{x}-p_{x+\mathrm{d} x}\right)}{\mathrm{d} x}=-\frac{\pi r^{4}}{8 \eta} \frac{\mathrm{~d} p_{x}}{\mathrm{~d} x}
$$

![img-314.jpeg](img-314.jpeg)

热图3-21-1

内管细而并不很长，叮以认为在每一时刻管内气体近似作稳定流动，即气体的质量流量在管内处处为常量，故

$$
\rho_{x} V_{Q}(x)=C
$$

把（5），（6）式代入，得

$$
p_{x} \frac{\mathrm{~d} p_{x}}{\mathrm{~d} x}=C
$$

积分，得

$$
\int_{p}^{p_{x}} p_{x} \mathrm{~d} p_{x}=\int_{0}^{x} C \mathrm{~d} x
$$

式中 $p$ 和 $p_{x}$ 分别是 $x=0$ 处和 $x$ 处的压强，即

$$
\frac{1}{2}\left(p_{x}^{2}-p^{2}\right)=C x
$$

边条件为

$$
x=L \text { 处, } p_{x}=p_{0}
$$

代入，得

$$
C=\frac{p_{0}^{2}-p^{2}}{2 L}
$$

由（6）式， $x=0$ 处的体积流量为

$$
V_{Q}(0)=-\frac{\pi r^{4}}{8 \eta}\left(\frac{\mathrm{~d} p_{x}}{\mathrm{~d} x}\right)_{x=0}=-\frac{\pi r^{4}}{8 \eta}\left(\frac{C}{p_{x}}\right)_{x=0}=\frac{\pi r^{4}\left(p^{2}-p_{0}^{2}\right)}{16 \eta \mathrm{~d} p}
$$

（7）式的 $V_{Q}(0)$ 就是（4）式的 $V_{Q}$ ，把（7）式代入（4）式，得

$$
-\frac{\mathrm{d} p}{p^{2}-p_{0}^{2}}=\frac{\pi r^{4}}{16 \eta \mathrm{~d} V_{0}} \mathrm{~d} t
$$

从初态 $t=0, p=p_{b}$ 到终态 $t=\Delta t, p=p_{c}$ 作积分，得

$$
\int_{p_{b}}^{p_{c}} \frac{1}{2 p_{0}}\left(\frac{1}{p+p_{0}}-\frac{1}{p-p_{0}}\right) \mathrm{d} p=\int_{0}^{\Delta t} \frac{\pi r^{4}}{16 \eta L V_{0}} \mathrm{~d} t
$$

即

$$
\eta=\frac{\pi r^{4} p_{0} \Delta t}{8 L V_{0} \ln \frac{\left(p_{c}+p_{0}\right)\left(p_{b}-p_{0}\right)}{\left(p_{b}+p_{0}\right)\left(p_{c}-p_{0}\right)}}
$$

这就是气体粘滞系数 $\eta$ 的计算公式。
把二氧化碳气体的实验数据代入，得

$$
\eta=1.4 \times 10^{-5} \mathrm{~N} \cdot \mathrm{~s} / \mathrm{m}^{2}
$$

【题 22】 试证明两杯成分相同而体积和温度不同的液体混合后总体积不变，设该液体的体积随温度（ $\mathrm{C}^{\circ}$ ）线性地变化，且在混合过程中与外界绝热。
【分析】线性地变化意即 $V=V_{0}(1+\beta t)$ ，式中 $V_{0}$ 和 $V$ 分别是液体在 $0 \mathrm{C}^{\circ}$ 和 $t \mathrm{C}$ 的体积， $\beta$ 是体膨胀系数，因为混合过程与外界绝热，一杯吸热升温膨胀，另一杯放热降温收缩，热量只在两杯液体之间交换。由此，两杯液体的初始温度和质量将决定混合后的温度，从而决定混合后的体积。这样就将混合前和混合后的有关物理量联系了起来。证明过程中必然涉及许多未知量，只要适当归并，耐心地做下去，即可得出结论。
【解】设混合前两杯液体的体积、温度、质量分别为 $V_{1} 、 t_{1} 、 m_{1}$ 和 $V_{2} 、 t_{2} 、 m_{2}$ 。设两杯液体在 $0 \mathrm{C}^{\circ}$的体积分别为 $V_{10}, V_{20}$ ，密度均为 $d$ ，设混合后两杯液体的体积分别为 $V_{1}{ }^{\prime}, V_{2}{ }^{\prime}$ ，温度为 $t \mathrm{C}$ 。

因液体体积随温度（C）线性地变化，故

$$
V=V_{0}(1+\beta t)
$$

用于混合前的两杯液体，为

$$
\begin{aligned}
& V_{1}=V_{10}\left(1+\beta t_{1}\right) \\
& V_{2}=V_{20}\left(1+\beta t_{2}\right)
\end{aligned}
$$

用于混合后的两杯液体，为

$$
\begin{aligned}
& V_{1}^{\prime}=V_{10}(1+\beta t) \\
& V_{2}^{\prime}=V_{20}(1+\beta t)
\end{aligned}
$$

因混合过程绝热，与外界不交换热量，一杯所吸的热应等于另一杯所放的热。设液体比热为 $c$ ，则

$$
c m_{1}\left(t-t_{1}\right)=c m_{2}\left(t_{2}-t\right)
$$

或

$$
t=\frac{m_{1} t_{1}+m_{2} t_{2}}{m_{1}+m_{2}}
$$

又

$$
\left\{\begin{array}{l}
m_{1}=V_{10} d \\
m_{2}=V_{20} d
\end{array}\right\}
$$

混合后的体积为（以下运算用到上述（1）、（2）、（3）式）

$$
\begin{aligned}
V^{\prime} & =V_{1}^{\prime}+V_{2}^{\prime}=V_{10}(1+\beta t)+V_{20}(1+\beta t) \\
& =V_{10}+V_{20}+\beta\left(V_{10}+V_{20}\right) t=V_{10}+V_{20}+\beta \frac{\left(m_{1}+m_{2}\right)}{d} \cdot \frac{\left(m_{1} t_{1}+m_{2} t_{2}\right)}{\left(m_{1}+m_{2}\right)} \\
& =V_{10}+V_{20}+\beta V_{10} t_{1}+\beta V_{20} t_{2}=V_{10}\left(1+\beta t_{1}\right)+V_{20}\left(1+\beta t_{2}\right) \\
& =V_{1}+V_{2}
\end{aligned}
$$

【题 23】冬季湖面上的冰经两天的时间，厚度从 20 mm 增为 40 mm ，在此期间冰层底部与顶部的平均温差为 8.0 K 。设冰的密度为 $920 \mathrm{~kg} / \mathrm{m}^{3}$ ，冰的熔解热为 $3.20 \times 10^{5} \mathrm{~J} / \mathrm{kg}$ 。试估算冰的热传导率 $k$.【分析】冬季湖面冰层上方空气温度低，冰层下方水的温度高，水通过冰层的热传导，向上方空气不断传输热量，导致水不断结冰，使冰层加厚，理解上述物理过程，本题不难求解。
【解】设 $t=0$ 时刻冰厚 $h_{0}=20 \mathrm{~mm} ， t$ 时刻冰厚 $h$ ，经 $\mathrm{d} t$ 时间冰厚增加 $\mathrm{d} h$ ，故热量为

$$
\mathrm{d} Q=L \mathrm{~d} m=L \rho S \mathrm{~d} h
$$

式中 $L$ 为冰的熔解热， $\rho$ 为冰的密度， $S$ 为湖面面积. $\mathrm{d} Q$ 通过冰层传送到上方的低温空气中去，近似假设这些热量是在同一时间内传递的，则有

$$
\mathrm{d} Q=k \frac{\Delta T}{h} S \mathrm{~d} t
$$

式中 $\Delta T$ 是冰的底部与顶部的温差，可用平均值代替。由以上两式，得

$$
\left(k \frac{\Delta T}{L \rho}\right) \mathrm{d} t=h \mathrm{~d} h
$$

积分,得

$$
k \frac{\Delta T}{L \rho} t=\frac{1}{2}\left(h^{2}-h_{0}^{2}\right)
$$

即

$$
k=\frac{L \rho\left(h^{2}-h_{0}^{2}\right)}{2 t \Delta T}
$$

把 $h=40 \mathrm{~mm}, t=2 \mathrm{~d}$ ，以及其他数据代入，得

$$
k=0.13 \mathrm{~W} /(\mathrm{m} \cdot k)
$$

【题 24】 用同一种物质铸造出质量相同的实心球 A 和立方体 B ，将它们加热到 $220^{\circ} \mathrm{C}$ ，然后都在 $20^{\circ} \mathrm{C}$ 的环境中冷却。设 A 和 B 的热损耗率（单位时间向外散发的热量）均与表面积以及各自与环境的温度差成正比，且比例系数相同。试用 A 在降温过程中的温度 $\tau_{\mathrm{A}}$ 来表述 B 在降温过程中的温度 $\tau_{\mathrm{B}}$ 。
【分析】由题设，A或B的热损耗率为

$$
-\frac{\mathrm{d} Q}{\mathrm{~d} t}=k S\left(\tau-\tau_{\text {年 }}\right)
$$

式中 $S$ 和 $\tau$ 是 A 或 B 的表面积和温度， $\tau_{\text {年 }}$ 是环境温度， $t$ 是时间。因 A 或 B 为同种物质且质量 $m$ 相同，故有

$$
-\mathrm{d} Q=m c(-\mathrm{d} \tau)
$$

式中 $c$ 是比热。于是可知 $\tau_{\mathrm{A}}$ 或 $\tau_{\mathrm{B}}$ 随时间 $t$ 的变化，消去 $t$ ，即可用 $\tau_{\mathrm{A}}$ 表述 $\tau_{\mathrm{B}}$ 。
【解】 A 和 B 的热损耗率为

$$
-\frac{\mathrm{d} Q}{\mathrm{~d} t}=k S\left(\tau-\tau_{\text {年 }}\right)
$$

式中 $-\mathrm{d} Q=-\mathrm{d} Q_{\mathrm{A}}$ 或 $-\mathrm{d} Q_{\mathrm{B}}$ ，是 A 或 B 在 $\mathrm{d} t$ 时间散发的热量， $\tau=\tau_{\mathrm{A}}$ 或 $\tau_{\mathrm{B}}$ 是 A 或 B 的温度， $\tau_{\text {年 }}=20^{\circ} \mathrm{C}$ 是环境温度， $S=S_{\mathrm{A}}$ 或 $S_{\mathrm{B}}$ 是 A 或 B 的表面积， $k$ 是共同的比例系数。

A 和 B 是同种物质，具有相同的比热 $c$ ，它们的质量也相同，为 $m$ ，当 A 或 B 降温 $-\mathrm{d} \tau$ 时，散发的热量 $-\mathrm{d} Q$ 为

$$
-\mathrm{d} Q=m c(-\mathrm{d} \tau)
$$

由（1）、（2）式消去 $\mathrm{d} Q$ ，得 A 或 B 的温度 $\tau$ 随时间 $t$ 的变化为

$$
\frac{\mathrm{d} \tau}{\tau-\tau_{\text {年 }}}=-\frac{k S}{m c} \mathrm{~d} t
$$

积分, 得

$$
\tau-\tau_{\text {年 }}=\left(\tau_{0}-\tau_{\text {年 }}\right) \mathrm{e}^{\frac{k S}{m c} t}
$$

式中 $\tau_{0} \approx 220^{\circ} \mathrm{C}$ 是 A 或 B 的初始温度， $\tau_{\text {年 }}=20^{\circ} \mathrm{C}$ 是环境温度，即

$$
\left\{\begin{array}{l}
\tau_{\mathrm{A}}-\tau_{\mathrm{*}}=\left(\tau_{0}-\tau_{\mathrm{*}}\right) \mathrm{e}^{\frac{k S_{\mathrm{B}}}{m c} t}=\left(\tau_{0}-\tau_{\mathrm{*}}\right)\left(\mathrm{e}^{\frac{k}{m c} t}\right)^{S_{\mathrm{A}}} \\
\tau_{\mathrm{B}}-\tau_{\mathrm{*}}=\left(\tau_{0}-\tau_{\mathrm{*}}\right) \mathrm{e}^{\frac{k S_{\mathrm{B}}}{m c} t}=\left(\tau_{0}-\tau_{\mathrm{*}}\right)\left(\mathrm{e}^{\frac{k}{m c} t}\right)^{S_{\mathrm{B}}}
\end{array}\right\}
$$

消去 $t$ ，得

$$
\tau_{\mathrm{B}}-\tau_{\mathrm{*}}=\left(\tau_{0}-\tau_{\mathrm{*}}\right)\left(\mathrm{e}^{\frac{k}{m c} t}\right)^{S_{\mathrm{B}}}=\left(\tau_{0}-\tau_{\mathrm{*}}\right)\left(\frac{\tau_{\mathrm{A}}-\tau_{\mathrm{*}}}{\tau_{0}-\tau_{\mathrm{*}}}\right)^{\frac{S_{\mathrm{B}}}{S_{\mathrm{A}}}}
$$

设 A 球半径为 $R, \mathrm{~B}$ 立方体边长为 $a$ ，因 A 和 B 体积相同，有

$$
V=a^{3}, \text { 或 } V=\frac{4}{3} \pi R^{3}
$$

即

$$
a=V^{\frac{1}{3}}, \text { 或 } R=\sqrt{\frac{2}{4 \pi}} V
$$

故 A 或 B 的表面积分别为

$$
\begin{aligned}
& S_{\mathrm{A}}=4 \pi R^{2}=4 \pi \sqrt{\frac{9}{16 \pi^{2}} V^{2}}=\sqrt[3]{36 \pi} V^{\frac{2}{3}} \\
& S_{\mathrm{B}}=6 a^{2}=6 V^{\frac{2}{3}} \\
& \frac{S_{\mathrm{B}}}{S_{\mathrm{A}}}=\frac{6}{\sqrt[3]{36 \pi}}=\frac{6}{4.84}=1.24
\end{aligned}
$$

代入(3) 式, 得

$$
\begin{aligned}
\tau_{\mathrm{B}} & =20+200\left(\frac{\tau_{\mathrm{A}}-20}{200}\right)^{1.24} \\
& =20+(200)^{-0.24}\left(\tau_{\mathrm{A}}-20\right)^{1.24}=20+0.28\left(\tau_{\mathrm{A}}-20\right)^{1.24} \mathrm{C}
\end{aligned}
$$

【题 25】 半径为 $R_{1}$ 的球体内有供能装置，使之成为高温热源。在球体之外包着导热的匀质球壳层A，它的内半径为 $R_{1}$ ，外半径为 $R_{2}$ ，导热系数处处相同，为常量 $k$ 。球壳层外是另一均匀热介质。当达到稳定的热传导时，内球温度恒为 $T_{1}$ ，球壳层 $A$ 外的温度恒为 $T_{2}$ ，且 $T_{2}<T_{1}$ 。

1. 试确定球壳层 A 中温度的径向分布.
2. 试求单位时间内，内球中的供能装置应提供的能量。
【分析】 导热系数等于单位长度上温度相差 $1^{\circ} \mathrm{C}$ 时，单位时间内通过单位横截面的热量。热传导达到稳定时，单位时间通过 $A$ 中任一球面的热量应与该球面的半径无关。由此即可确定 $A$ 中温度的径向分布，以及内球在单位时间内应提供的能量。【解】 热传导公式为

$$
\mathrm{d} Q=-k\left(\frac{\mathrm{~d} T}{\mathrm{~d} z}\right) \mathrm{d} S \mathrm{~d} t
$$

在本题中 $z$ 应为内球或球壳层中任意处的半径，即为

$$
\mathrm{d} Q=-k\left(\frac{\mathrm{~d} T}{\mathrm{~d} r}\right) \mathrm{d} S \mathrm{~d} t
$$

式中 $t$ 为时间， $S$ 为垂直于径向的横截面积。因此单位时间通过 $\Lambda$ 中任一半径为 $r$ 的球面 $S_{1}$ 的热量为

$$
\frac{\mathrm{d} Q}{\mathrm{~d} t}=-k\left(\frac{\mathrm{~d} T}{\mathrm{~d} r}\right) \mathrm{S}_{r}=-k\left(\frac{\mathrm{~d} T}{\mathrm{~d} r}\right) \cdot 4 \pi r^{2}
$$

热传导达到稳定时， $\frac{\mathrm{d} Q}{\mathrm{~d} t}$ 与 $r$ 无关，令

$$
\frac{\mathrm{d} Q}{\mathrm{~d} t}=C_{0}
$$

代入上式，得

$$
\left(\frac{\mathrm{d} T}{\mathrm{~d} r}\right) r^{2}=-\frac{C_{0}}{4 \pi k}=C
$$

式中 $C$ 为另一常量. 上式可写为

$$
\mathrm{d} T=\frac{C}{r^{2}} \mathrm{~d} r
$$

积分,得

$$
\int_{T_{1}}^{T} \mathrm{~d} T=\int_{R_{1} r^{2}}^{r} \frac{C}{\mathrm{~d} r}
$$

或

$$
T=T_{1}+C\left(\frac{1}{R_{1}}-\frac{1}{r}\right), \quad R_{1} \leqslant r \leqslant R_{2}
$$

式中 $T$ 是球壳层 $r$ 处的温度. 因 $r=R_{2}$ 处的温度 $T=T_{2}$, 故上式中的常量 $C$ 为

$$
C=\frac{R_{1} R_{2}}{R_{2}-R_{1}}\left(T_{2}-T_{1}\right)<0
$$

代入，得出球壳层 A 中温度的径向分布为

$$
T=T_{1}+\frac{R_{1} R_{2}}{R_{2}-R_{1}}\left(T_{2}-T_{1}\right)\left(\frac{1}{R_{1}}-\frac{1}{r}\right)
$$

此式的其他表述形式为

$$
\begin{aligned}
T & =T_{1}+\frac{R_{2}\left(r-R_{1}\right)}{\left(R_{2}-R_{1}\right) r}\left(T_{2}-T_{1}\right) \\
T & =\frac{R_{1}\left(R_{2}-r\right)}{\left(R_{2}-R_{1}\right) r} T_{1}+\frac{R_{2}\left(r-R_{1}\right)}{\left(R_{2}-R_{1}\right) r} T_{2} \\
T & =\frac{1}{R_{2}-R_{1}}\left[R_{2} R_{1}\left(T_{1}-T_{2}\right) \frac{1}{r}-\left(R_{1} T_{1}-R_{2} T_{2}\right)\right]
\end{aligned}
$$

以上四式完全等价。
单位时间内，内球供能装置提供的能量为

$$
\frac{\mathrm{d} Q}{\mathrm{~d} t}=C_{0}=-4 \pi k C=4 \pi k \frac{R_{1} R_{2}}{R_{2}-R_{1}}\left(T_{1}-T_{2}\right)>0
$$

【题 26】 如图，长为 $2 l$ ，半径为 $r$ 的圆柱形保险丝与电路中的两个电阻块 A 和 B 连接，设 A 和 B 与周围环境具有相同的恒定温度 $T_{c}$ 。设保险丝中通过稳恒电流 $I$ ，保险丝已达到热稳定状态。设保险丝中任一正截面上的温度都相同，记为 $\left(T_{c}+T\right)$ ，不同正截面上的温度不同，若某正截面与 A 相距为 $x$ ，它的温度表为 $T(x)$ 。设保险丝的电阻率为 $\rho$ ，设保险丝沿其长度方向（即 $x$ 方向）的热传导率为 $\lambda$ ，设保险丝单位时间通过其侧面单位面积向外界散发的热量为 $C T$ ，其中 $C$ 为常量。

试求保险丝上的温度分布，即求 $T(x)$ 函数，试就 $l \gg$
$\left(\frac{\lambda r}{2 C}\right)^{\frac{1}{2}}$ 的所谓长保险丝情形，计算能使长保险丝熔断的电流强
![img-315.jpeg](img-315.jpeg)

热图3-26-1

度，设保险丝材料的熔点为 $T_{m}$ 。
【分析】 在热稳定条件下，保险丝中因有电流通过所产生的焦耳热，将通过保险丝的侧面和两个端面向外界和向 A，B 稳定地散发，保险丝内部也有稳定的热传导，同时，在保险丝各处应形成稳定的温度分布（不难猜想，保险丝中间 $x=l$ 处的温度最高，向两侧对称地减少，两端面的温度与 A 和 B 相同，为 $T_{c}$ ）。由于保险丝内部的热传导规律，保险丝通过侧面向外散热的规律，以及电流产生焦耳热的规律均为已知，不妨在保险丝中任取一一厚为 $\mathrm{d} r$ 的薄层，由稳定条件，流人与流出该薄层的热量之和应为零，于是可得出该薄层的温度 $T(x)$ 所遵循的方程。解方程，用边条件定积分常数，即可求出温度分布 $T(x)$ 。

当保险丝中最高的温度达到熔点 $T_{m}$ 时，保险丝便将熔断。
【解】 如图，取 $x$ 轴沿保险丝长度方向，原点 $O$ 在与 A 交界的左端面。在保险丝中任取从 $x$ 到 $(x+\mathrm{d} x)$ 的一薄层，截面积为 $\pi r^{2}$ 。其中因有电流通过所产生的焦耳热为

$$
Q_{1}=l^{2} \rho \frac{\mathrm{~d} x}{\pi r^{2}}
$$

式中 $\rho$ 是保险丝的电阻率。因保险丝沿长度方向的热传导率为 $\lambda$ ，故从薄层左端面 $x$ 处流人薄层的热量为

$$
Q_{2}=-\lambda \pi r^{2} \frac{\mathrm{~d} T}{\mathrm{~d} x}
$$

式中 $\frac{\mathrm{d} T}{\mathrm{~d} x}=\frac{\mathrm{d}}{\mathrm{d} x}\left(T+T_{c}\right),\left(T+T_{c}\right)$ 是 $x$ 处的温度， $T$ 即 $T(x)$ 从薄层右端面 $(x+\mathrm{d} x)$ 处流出的热量为

$$
Q_{3}=-\lambda \pi r^{2} \frac{\mathrm{~d}}{\mathrm{~d} x} T(x+\mathrm{d} x)
$$

因保险丝通过侧面单位时间从单位面积向外界散发的热量为 $C T$ ，故薄层从侧面流失的热量为

$$
Q_{4}=(2 \pi r \mathrm{~d} x) C T
$$

在热稳定时，流人与流出薄层的热量相等，即有

$$
Q_{1}+Q_{2}=Q_{3}+Q_{4}
$$

将各量代入，得

$$
\begin{aligned}
\frac{l^{2} \rho}{\pi r^{2}} \mathrm{~d} x-\lambda \pi r^{2} \frac{\mathrm{~d} T}{\mathrm{~d} x} & =-\lambda \pi r^{2} \frac{\mathrm{~d}}{\mathrm{~d} x}\left(T+\frac{\mathrm{d} T}{\mathrm{~d} x} \mathrm{~d} x\right)+2 \pi r C T \mathrm{~d} x \\
& =-\lambda \pi r^{2}\left(\frac{\mathrm{~d} T}{\mathrm{~d} x}+\frac{\mathrm{d}^{2} T}{\mathrm{~d} x^{2}} \mathrm{~d} x\right)+2 \pi r C T \mathrm{~d} x
\end{aligned}
$$

即

$$
\frac{l^{2} \rho}{\pi r^{2}}=-\lambda \pi r^{2} \frac{\mathrm{~d}^{2} T}{\mathrm{~d} x^{2}}+2 \pi r C T
$$

或

$$
\frac{\mathrm{d}^{2} T}{\mathrm{~d} x^{2}}=\frac{2 C}{\lambda r}\left(T-\frac{l^{2} \rho}{2 C \pi^{2} r^{3}}\right)
$$

这就是保险丝中温度分布的微分方程. 为解此方程，引入辅助量，令

$$
\begin{aligned}
a^{2} & =\frac{2 C}{\lambda r} \\
\beta & =\frac{l^{2} \rho}{2 C \pi^{2} r^{3}}
\end{aligned}
$$

令

$$
y=T-\beta
$$

则上述微分方程化为

$$
\frac{\mathrm{d}^{2} y}{\mathrm{~d} x^{2}}=a^{2} y
$$

解出

$$
y=a \mathrm{e}^{a x}+b \mathrm{e}^{-a x}
$$

式中 $a$ 和 $b$ 是两个待定的积分常量. 由边条件

$$
\left\{\begin{array}{l}
x=0 \text { 处, } \quad T=0 \\
x=2 l \text { 处, } \quad T=0
\end{array}\right\}
$$

得

$$
\left\{\begin{array}{l}
-\beta=a+b \\
-\beta=a \mathrm{e}^{2 a l}+b \mathrm{e}^{-2 a l}
\end{array}\right\}
$$

故

$$
\left\{\begin{array}{l}
a=-\frac{\mathrm{e}^{-2 a l}}{1+\mathrm{c}^{-2 a l}} \beta \\
b=-\frac{1}{1+\mathrm{e}^{-2 a l}} \beta
\end{array}\right\}
$$

代入 $y$ 表达式，得

$$
y=-\frac{\mathrm{e}^{-2 a l}}{1+\mathrm{e}^{-2 a l}} \beta \mathrm{e}^{a x}+\frac{1}{1+\mathrm{e}^{-2 a l}} \beta \mathrm{e}^{-a x}=T-\beta
$$

即

$$
T=\beta\left\{1-\frac{\mathrm{e}^{-a l}}{1+\mathrm{e}^{-2 a l}}\left[\mathrm{e}^{a(x-l)}+\mathrm{e}^{-a(x-l)}\right]\right\}
$$

引入双曲余弦函数

$$
\cosh (z)=\frac{1}{2}\left(\mathrm{e}^{z}+\mathrm{e}^{-z}\right)
$$

可将上述 $T(x)$ 函数表为

$$
T(x)=\beta\left|1-\frac{2 \mathrm{e}^{-a t}}{1+\mathrm{e}^{-2 a t}} \cosh [\alpha(x-l)]\right|
$$

这就是保险丝中的温度分布[保险丝中任意 $x$ 处的温度为 $T_{c}+T(x)$ ]。
因双曲余弦函数 $\cosh (z)$ 是一个偶函数，故 $T(x)$ 曲线（即保险丝中的温度分布）在 $x=l$ 两侧具有对称性。因在 $x=l$ 处, $\cosh [\alpha(x-l)]=1$ 为极小值,故由上式在 $x=l$ 处, $T(x)$ 取极大值, 即

$$
T_{\max }=T(x=l)=\beta\left(1-\frac{2 \mathrm{e}^{-a l}}{1+\mathrm{e}^{-2 a l}}\right)
$$

由题设,若

$$
l \gg\left(\frac{\lambda r}{2 C}\right)^{\frac{1}{2}}
$$

即若

$$
l \gg \frac{1}{\alpha} \text { 或 } \alpha l \gg 1
$$

则

$$
T_{\max } \approx \beta
$$

当温度的极大值达到

$$
T_{\max }=T_{m}-T_{c}
$$

时, 即当保险丝 $x=l$ 处的温度达到熔点 $T_{m}$ 时, 保险丝就会在 $x=l$ 处熔断、设相应的电流强度为 $I_{m}$, 则由

$$
T_{m}=T_{\max }+T_{c}=\beta+T_{c}=\frac{I_{m}^{2} \rho}{2 C \pi^{2} r^{3}}+T_{c}
$$

得

$$
I_{m}=\sqrt{\frac{2 C \pi^{2} r^{3}}{\rho}\left(T_{m}-T_{c}\right)}
$$

【题 27】沿 $x$ 轴在 $x=0$ 到 $x=L$ 之间放一段长为 $L$ 截面积为 $S$ 的均匀柱体, 它与外界绝热, $t=0$ 时, $x=0$ 处的温度为 $T_{1}, x=L$ 处的温度为 $T_{2}$, 且 $T_{1}>T_{2}$, 其间温度 $T$ 线性地分布。设柱体的热传导率 $k$, 比热 $c$ 及密度 $\rho$ 均为常量, 各处的热膨胀均可略。试导出 $t$ 时刻 $x$ 处温度 $T(x, t)$ 的积分表达式。
【分析】柱体各部分因相互间的热传导而使温度随时间变化, 函数 $T(x, t)$ 描绘了这种变化.把柱体沿 $x$ 轴分割成一系列小段, 在 $\mathrm{d} t$ 时间内, 从 $x$ 到 $(x+\mathrm{d} x)$ 的小段从左侧吸收热量, 并向右侧放出热量, 吸热量多于放热量, 使其温度升高. 据此, 建立 $T(x, t)$ 遵循的偏微分方程, 其积分解即为所求。
【解】在柱体中取从 $x$ 到 $(x+\mathrm{d} x)$ 的一小段, 在 $t$ 到 $(t+\mathrm{d} t)$ 时间内, 该小段从左侧 (高温一侧)吸收的热量为

$$
\mathrm{d} Q_{1}=-k\left(\frac{\partial T}{\partial x}\right)_{x} S \mathrm{~d} t=-k T_{x}^{\prime}(x, t) S \mathrm{~d} t
$$

式中 $S$ 为柱体的截面积，同时，该小段向右侧（低温一侧）放出的热量为

$$
\mathrm{d} Q_{2}=-k\left(\frac{\partial T}{\partial x}\right)_{x+\mathrm{d} x} S \mathrm{~d} t=-k T_{x}^{\prime}(x+\mathrm{d} x, t) S \mathrm{~d} t
$$

总的吸热量为

$$
\begin{aligned}
\mathrm{d} Q & =\mathrm{d} Q_{1}-\mathrm{d} Q_{2}=-k\left[T_{x}^{\prime}(x, t)-T_{x}^{\prime}(x+\mathrm{d} x, t)\right] S \mathrm{~d} t \\
& =k\left[T_{x}^{\prime}(x+\mathrm{d} x, t)-T_{x}^{\prime}(x, t)\right] S \mathrm{~d} t
\end{aligned}
$$

吸收的热量使 $x$ 到 $(x+\mathrm{d} x)$ 小段在 $t$ 到 $(t+\mathrm{d} t)$ 时间升温 $\mathrm{d} T$ ，即

$$
\mathrm{d} Q=\operatorname{cp}(S \mathrm{~d} x) \mathrm{d} T
$$

由以上两式，得

$$
c \rho \mathrm{d} T \mathrm{~d} x=k\left[T_{x}^{\prime}(x+\mathrm{d} x, t)-T_{x}^{\prime}(x, t)\right] \mathrm{d} t
$$

即

$$
\left(\frac{\mathrm{d} T}{\mathrm{~d} t}\right)_{x \neq \varnothing}=\frac{k}{c \rho} \cdot \frac{T_{x}^{\prime}(x+\mathrm{d} x, t)-T_{x}^{\prime}(x, t)}{\mathrm{d} x}=\frac{k}{c \rho} T_{x x}^{\prime \prime}
$$

上式左边是 $T$ 对 $t$ 的偏微商，上式右边的 $T_{x x}^{\prime}$ 是 $T$ 对 $x$ 的二阶偏微商，即

$$
\left\{\begin{array}{l}
\frac{\partial T}{\partial t}=a^{2} \frac{\partial^{2} T}{\partial x^{2}} \\
a^{2}=\frac{k}{c \rho}
\end{array}\right\}
$$

这就是一维热传导的偏微分方程。
上述偏微分方程的解与 $T(x, t)$ 的初始分布 $T(x, t=0)$ 有关。由题设，初始分布为

$$
T(x, 0)=T_{1}-\frac{T_{1}-T_{2}}{L} x
$$

$T(x, t)$ 的积分解为

$$
T(x, t)=\frac{1}{2 a \sqrt{\pi t}} \int_{0}^{L} T\left(x^{\prime}, 0\right) \mathrm{e}^{-\left(x^{\prime}-x\right)^{2} \rho \mathrm{~d} x^{2} t} \mathrm{~d} x^{\prime}
$$

【题 28】 在温度为 $T$ 的恒温热源中有一导热容器，它被隔板分成体积均为 $V$ 的左、右两部分，隔板上有一小孔，面积为 $A$ ，开始时 $(t=0)$ ，左方装有摩尔质量为 $\mu_{1}$ 的 $\nu \mathrm{mol}$ 理想气体，右方装有另一种摩尔质量为 $\mu_{2}\left(\mu_{2} \neq \mu_{1}\right)$ 的 $\nu \mathrm{mol}$ 理想气体。由于孔很小，虽然板两侧不断有分子交换，但仍可假定在任一时刻系统都处于平衡态。

1. 试求隔板左、右两侧气体的密度 $\rho_{L}, \rho_{R}$ 各自随时间 $t$ 的变化关系。
2. 试计算最后达到 $\rho_{L}=\rho_{R}$ 时，气体系统的熵的增量。

【分析】 开始时 $(t=0)$ ，隔板两侧分别装有两种不同的理想气体，因体积 $V$ 和摩尔数 $\nu$ 相同，两种气体分子的数密度相同且可知。小孔 $A$ 使隔板两侧的不同分子能通过扩散互相交换，逐渐混杂起来。对于每一种气体分子而言，都是从高密度向低密度扩散。为计算由此引起的分子数密度的变化，可以认为向上、下、左、右、前、后运动的分子数各占总分子数的 $\frac{1}{6}$ ，而且都以平均速率 $\bar{v}$ 运动，这正是用气体分子运动论解释扩散等输运现象的典型做法。

最后必定是两种气体都均匀分布在隔板左、右体积为 $2 V$ 的空间内，利用理想气体的烧表达式即可算出从初态到终态由扩散引起的烧的增量。

在计算中应始终注意等温条件。
【解】 $t=0$ 时，第一种分子在左方的数密度和第二种分子在右方的数密度相同，均为

$$
n_{0}=\frac{v N_{A}}{V}
$$

式中 $N_{A}$ 为阿伏伽德罗常量。
考虑第一种分子。设任意 $t$ 时刻，在左方和右方的第一种分子的数密度分别为 $n_{1 L}(t)$ 和 $n_{1 R}(t)$ ，则

$$
n_{1 L}(t)+n_{1 R}(t)=n_{0}
$$

从 $t$ 时刻经过 $\mathrm{d} t$ 时间后，左方第一种分子数密度的减少量 $-\mathrm{d} n_{1 L}(t)$ 为

$$
-\mathrm{d} n_{1 L}(t)=\frac{1}{6} n_{1 L}(t) \bar{v}_{1} A \mathrm{~d} t-\frac{1}{6} n_{1 R}(t) \bar{v}_{1} A \mathrm{~d} t
$$

式中右第一项是在左方的第一种分子因热运动通过小孔 $A$ 扩散到右方的分子数，右第二项则是在右方的第一种分子因热运动通过小孔 $A$ 扩散到左方的分子数。其中已假设向上、下、左、右、前、后运动的分子数各占总分子数的 $\frac{1}{6}$ ，并且假设分子均以平均速率 $\bar{v}_{1}$ 运动、 $\bar{v}_{1}$ 为

$$
\bar{v}_{1}=\sqrt{\frac{8 N T}{\pi \mu_{1}}}
$$

由（2）、（3）式消去 $n_{1 R}(t)$ ，得

$$
-\mathrm{d} n_{1 L}(t)=\frac{1}{6} \bar{v}_{1} A \mathrm{~d} t\left[2 n_{1 L}(t)-n_{0}\right]
$$

即

$$
\frac{\mathrm{d} n_{1 L}(t)}{2 n_{1 L}(t)-n_{0}}=-\frac{1}{6} \bar{v}_{1} A \mathrm{~d} t
$$

从 $t=0$ 到 $t=t$ 积分，利用 $n_{1 L}(0)=n_{0}$ ，得

$$
\ln \left[\frac{2 n_{1 L}(t)-n_{0}}{n_{0}}\right]=-\frac{1}{3} \bar{v}_{1} A t
$$

故

$$
\left\{\begin{array}{l}
n_{1 L}(t)=\frac{1}{2} n_{0}\left(1+\mathrm{e}^{-\frac{1}{3} \bar{v}_{1} A t}\right) \\
n_{1 R}(t)=\frac{1}{2} n_{0}\left(1-\mathrm{e}^{-\frac{1}{3} \bar{v}_{1} A t}\right)
\end{array}\right\}
$$

其中第二式用到了（2）式。
对于第二种分子，设 $t$ 时刻，在左方和右方的第二种分子的数密度分别为 $n_{2 L}(t)$ 和 $n_{2 R}$ $(t)$ ，则可同样得出

$$
\left\{\begin{array}{l}
n_{2 L}(t)=\frac{1}{2} n_{0}\left(1-\mathrm{e}^{-\frac{1}{3} \mathrm{v}_{2} A t}\right) \\
n_{2 R}(t)=\frac{1}{2} n_{0}\left(1+\mathrm{e}^{-\frac{1}{3} v_{2} A t}\right)
\end{array}\right\}
$$

式中 $\bar{v}_{2}$ 是第二种分子的平均速率，为

$$
\bar{v}_{2}=\sqrt{\frac{8 R T}{\pi \mu_{2}}}
$$

因此，在 $t$ 时刻，左方和右方的气体质量密度分别为

$$
\left\{\begin{array}{l}
\rho_{L}(t)=m_{1} n_{1 L}(t)+m_{2} n_{2 L}(t) \\
\rho_{R}(t)=m_{1} n_{1 R}(t)+m_{2} n_{2 R}(t)
\end{array}\right\}
$$

式中 $m_{1}$ 和 $m_{2}$ 分别为两种分子的质量。把（5）、（6）式代入（8）式，得

$$
\left\{\begin{array}{l}
\rho_{L}(t)=\frac{1}{2} m_{1} n_{0}\left(1+\mathrm{e}^{-\frac{1}{3} v_{1} A t}\right)+\frac{1}{2} m_{2} n_{0}\left(1-\mathrm{e}^{-\frac{1}{3} v_{2} A t}\right) \\
\rho_{R}(t)=\frac{1}{2} m_{1} n_{0}\left(1-\mathrm{e}^{-\frac{1}{3} v_{1} A t}\right)+\frac{1}{2} m_{2} n_{0}\left(1+\mathrm{e}^{-\frac{1}{3} v_{2} A t}\right)
\end{array}\right\}
$$

由（1）式，

$$
\left\{\begin{array}{l}
m_{1} n_{0}=\frac{m_{1} \nu N_{A}}{V}=\frac{\mu_{1} \nu}{V} \\
m_{2} n_{0}=\frac{m_{2} \nu N_{A}}{V}=\frac{\mu_{2} \nu}{V}
\end{array}\right\}
$$

把（10）、（4）、（7）式代入（9）式，得

$$
\left\{\begin{array}{l}
\rho_{L}(t)=\frac{\nu}{2 V}\left[\mu_{1}+\mu_{2}+\mu_{1} \exp \left(-\frac{1}{3} \sqrt{\frac{8 R T}{\pi \mu_{1}}} A t\right)-\mu_{2} \exp \left(-\frac{1}{3} \sqrt{\frac{8 R T}{\pi \mu_{2}}} A t\right)\right] \\
\rho_{R}(t)=\frac{\nu}{2 V}\left[\mu_{1}+\mu_{2}-\mu_{1} \exp \left(-\frac{1}{3} \sqrt{\frac{8 R T}{\pi \mu_{1}}} A t\right)+\mu_{2} \exp \left(-\frac{1}{3} \sqrt{\frac{8 R T}{\pi \mu_{2}}} A t\right)\right]
\end{array}\right\}
$$

经过足够长的时间后，即当 $t=\infty$ 时，由（5）、（6）、（11）式，得

$$
n_{1 L}(\infty)=n_{1 R}(\infty), \quad n_{2 L}(\infty)=n_{2 R}(\infty), \quad \rho_{L}(\infty)=\rho_{R}(\infty)
$$

即两种气体各自均匀分布在体积为 $2 V$ 的全部容器内。
理想气体的熵表达式为

$$
S=\nu C_{V} \ln T+\nu R \ln V+C
$$

第一种气体从体积 $V$ 扩散到 $2 V$ (温度 $T$ 不变)，它的熵增量为

$$
\Delta S_{1}=\nu R \ln 2 V-\nu R \ln V=\nu R \ln 2
$$

同理，第二种气体从 $V$ 扩散到 $2 V$ (温度 $T$ 不变)，它的熵增量为

$$
\Delta S_{2}=\nu R \ln 2
$$

因此，系统总的熵增量为

$$
\Delta S=\Delta S_{1}+\Delta S_{2}=2 \nu R \ln 2
$$

【图29】利用布朗运动的实验可以粗略测量阿伏伽德罗常数 $N_{A}$ 。
作布朗运动的微粒系统可以看作是在计及浮力的重力场中达到平衡态的巨分子系统，其数密度遵循玻尔兹曼分布律。设在某实验中，半径 $r=2.12 \times 10^{-7} \mathrm{~m}$ ，质量密度 $\rho=1.194 \times 10^{3}$ $\mathrm{kg} / \mathrm{m}^{3}$ 的球形布朗粒子，悬浮在密度 $\rho_{0}=1.0 \times 10^{3} \mathrm{~kg} / \mathrm{m}^{3}$ 、温度 $T=273 \mathrm{~K}$ 的液体中。在高度相距为 $\Delta h=3.0 \times 10^{-5} \mathrm{~m}$ 的两处，测得布朗粒子的数密度之比为 $n_{1}: n_{2}=2.08$ 。

试计算 $N_{A}$ 。
【分析】玻尔兹曼分布是在势场中物质系统的粒子数按能量的分布规律。在本题中，重力与浮力的合力构成了势场，在其中，布朗粒子的数密度随高度的分布由玻尔兹曼分布给出。由不同高度处测出的 $n_{1}$ 和 $n_{2}$ 及有关数据可得出玻尔兹曼常量 $k$ ，再由 $k=\frac{R}{N_{A}}$ 即可得出 $N_{A}(R$ 是气体常数)。这是比较粗略地测同伏伽德罗常量 $N_{A}$ 的一种方法。
【解】布朗粒子的质量为

$$
m=\frac{4}{3} \pi r^{2} \rho
$$

它受到重力 $m g$ (向下)和液体浮力 $m g \frac{\rho_{0}}{\rho}$ (向上)的作用，合力向下，为

$$
F=m g-m g \frac{\rho_{0}}{\rho}=m g\left(1-\frac{\rho_{0}}{\rho}\right)
$$

取 $z$ 轴垂直向上，规定布朗粒子在由上述合力构成的力场中势能 $\varphi=0$ 处，为坐标原点 $z=0$ 。则布朗粒子在任意 $z$ 处的势能为

$$
\varphi=m g\left(1-\frac{\rho_{0}}{\rho}\right) z
$$

由玻尔兹曼分布，布朗粒子的数密度 $n$ 随高度 $z$ 的变化规律为

$$
n=n_{0} \mathrm{e}^{-m g\left(1-\frac{\rho_{0}}{\rho}\right) z / k T}
$$

式中 $n_{0}$ 为 $z=0$ 处的数密度。设在 $z_{1}$ 和 $z_{2}$ 处测出的数密度分别为 $n_{1}$ 和 $n_{2}$ ，则有

$$
\frac{n_{1}}{n_{2}}=\mathrm{e}^{-m g\left(1-\frac{\rho_{0}}{\rho}\right)\left(z_{1}-z_{2}\right) / k T}
$$

因

$$
\frac{n_{1}}{n_{2}}=2.08>1
$$

由上两式可知 $\left(z_{1}-z_{2}\right)$ 应为负值, 即

$$
z_{2}-z_{1}=\Delta h
$$

代入，得

$$
\frac{n_{1}}{n_{2}}=\mathrm{e}^{2 \pi r^{3}} g\left(\rho-\rho_{0}\right) \Delta h / 3 k T}
$$

式中已用到 $m=\frac{4}{3} \pi r^{3} \rho$ 。由上式解出玻尔兹曼常量 $k$ 为

$$
k=\frac{4 \pi r^{3} g\left(\rho-\rho_{0}\right) \Delta h}{3 T \ln \frac{n_{1}}{n_{2}}}
$$

因

$$
k=\frac{R}{N_{A}}
$$

式中 $R$ 为气体常量,故

$$
N_{A}=\frac{3 R T \ln \frac{n_{1}}{n_{2}}}{4 \pi r^{3} g\left(\rho-\rho_{0}\right) \Delta h}=7.29 \times 10^{23} \mathrm{~mol}^{-1}
$$

所得 $N_{A}$ 的数量级正确，但数值相当不精确。
[題 30] 流体中悬浮小颗粒的布朗运动尽管很复杂，但它在不断被碰撞中像一个大分子一样按能量均分定理获得了自己的运动能量，这就为讨论它的位移方均量提供了基础。

为讨论方便，考虑在 $x$ 方向的一维布朗运动。小颗粒在 $x$ 方向的碰撞净作用力 $F(t)$ 和阻尼力 $f(t)$ 的作用下运动。若 $t=0$ 时刻小颗粒处于 $x=0$ 位置，那么可以肯定，在尔后任何时刻 $t$ 都有 $\overline{x(t)}=0$ ，但 $\overline{x^{2}(t)}$ 必不为零。由于热平衡是动态平衡， $F(t)$ 将在零值左右波动，但必有 $\overline{F(t)}=0$ 。设小颗粒是半径为 $R$ 的球体，它所受流体的粘滞阻力为 $f(t)=-6 \pi R \eta v_{x}$ ，其中 $v_{x}$是小颗粒在 $x$ 方向的运动速度， $\eta$ 是流体的粘滞系数。设实验中所采用的布朗运动小颗粒的质量 $m \ll 6 \pi R \eta$ 。

1. 试用牛顿第二定律，证明在温度为 $T$ 时有很好的近似解

$$
\overline{x^{2}(t)}=\frac{k T}{3 \pi R \eta} t
$$

式中 $k$ 为玻尔兹曼常量。
2. 取 $R=5.0 \times 10^{-6} \mathrm{~m}$ 的细小油珠，测量它悬浮在氮气中时沿水平方向 $x$ 的布朗运动。每隔 5 s 测量一次油珠的 $x$ 坐标，每两个相邻的 $x$ 值之差记为 $\Delta x$ 。实验中测出 695 个 $\Delta x$ 值，按 $\Delta x$ 的大小分为 27 组，每一组中的 $\Delta x$ 相同，每一组中 $\Delta x$ 的个数记为 $n$ ，详如下表。

| $\Delta x /\left(10^{-6} \mathrm{~m}\right)$ | -13 | -12 | -11 | -10 | -9 | -8 | -7 | -6 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $n$ | 0 | 2 | 4 | 5 | 10 | 14 | 22 | 26 |
| $\Delta x /\left(10^{-6} \mathrm{~m}\right)$ | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 |
| $n$ | 29 | 35 | 45 | 49 | 63 | 75 | 60 | 54 |
| $\Delta x /\left(10^{-6} \mathrm{~m}\right)$ | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| $n$ | 45 | 37 | 31 | 27 | 20 | 16 | 9 | 8 |
| $\Delta x /\left(10^{-6} \mathrm{~m}\right)$ | 11 | 12 | 13 |  |  |  |  |  |
| $n$ | 6 | 3 | 0 |  |  |  |  |  |

实验是在 $15^{\circ} \mathrm{C}$ 下进行的，此时氮气的粘滞系数 $\eta=1.73 \times 10^{-5} \mathrm{~Pa} \cdot \mathrm{~s}$ 。
试计算玻尔兹曼常量 $k$ 的值。
【分析】布朗运动是悬浮在液体或气体中的宏观小颗粒所作的不停顿的无规则运动。它是由于小颗粒受周围分子碰撞的不均衡而引起的一种起伏运动。

本题是一维布朗运动，小颗粒受 $F(t)$ 和 $f(t)$ 作用，由牛顿第二定律可列出其运动方程。为了求小颗粒位移的方均值 $\overline{x^{3}}$ ，可将运动方程的形式适当改写，然后取平均值。利用 $\bar{x}=0, \bar{F}=0$ ，$\overline{x^{2}} \neq 0$ ，以及小颗粒按能量均分定律获得运动能量（即小颗粒的每一个自由度都具有相同的平均动能 $\frac{1}{2} k T$ ，由此， $\frac{1}{2} m \overline{v_{x}^{2}}=\frac{1}{2} m \overline{x^{2}}=\frac{1}{2} k T$ ）的条件，即可证明 $\overline{x^{2}}$ 的公式。

由实验测出的 695 个 $\Delta x$ 值，可以算出 $\overline{x^{2}}$ 值，再利用已经证明的 $\overline{x^{2}}$ 公式即可计算波尔兹曼常量 $k$ 的值。
【解】1. 小颗粒 $m$ 作一维运动，受 $F(t)$ 及 $f(t)$ 的作用，由牛顿第二定律，利用

$$
f(t)=-6 \pi R \eta v_{x}
$$

得出小颗粒的运动方程为

$$
m \ddot{x}=-6 \pi R \eta \dot{x}+F(t)
$$

乘以 $x$ ，得

$$
m x \ddot{x}=-6 \pi R \eta x \dot{x}+x F(t)
$$

利用

$$
\left\{\begin{array}{l}
x \dot{x}=\frac{1}{2} \frac{\mathrm{~d}\left(x^{2}\right)}{\mathrm{d} t} \\
x \ddot{x}=\frac{\mathrm{d}}{\mathrm{~d} t}(x \dot{x})-\dot{x}^{2}=\frac{1}{2} \frac{\mathrm{~d}^{2}\left(x^{2}\right)}{\mathrm{d} t^{2}}-\dot{x}^{2}
\end{array}\right\}
$$

把运动方程改写为

$$
\frac{1}{2} \frac{\mathrm{~d}^{2}}{\mathrm{~d} t^{2}}\left(m x^{2}\right)-m \dot{x}^{2}=-3 \pi R \eta \frac{\mathrm{~d}}{\mathrm{~d} t}\left(x^{2}\right)+x F(t)
$$

取平均值，得

$$
\frac{1}{2} \frac{\mathrm{~d}^{2}}{\mathrm{~d} t^{2}}\left(m \overline{x^{2}}\right)-m \ddot{x}^{2}=-3 \pi R \eta \frac{\mathrm{~d}}{\mathrm{~d} t}\left(\overline{x^{2}}\right)+\ddot{x} \cdot \overline{F(t)}
$$

即

$$
\frac{1}{2} \frac{\mathrm{~d}^{2}}{\mathrm{~d} t^{2}}\left(m \overline{x^{2}}\right)-m \ddot{x}^{2}=-3 \pi R \eta \frac{\mathrm{~d}}{\mathrm{~d} t}\left(\overline{x^{2}}\right)+\ddot{x} \cdot \overline{F(t)}
$$

由于 $x$ 与 $F(t)$ 彼此独立，故有 $\overline{x F(t)}=\ddot{x} \cdot \overline{F(t)}$ 。在上式中

$$
\begin{aligned}
\ddot{x} & =0 \\
\overline{F(t)} & =0
\end{aligned}
$$

又因小颗粒的运动遵循能量均分定律，故

$$
\frac{1}{2} m \ddot{x}^{2}=\frac{1}{2} k T
$$

把以上三式代入运动方程，得

$$
\frac{\mathrm{d}^{2}}{\mathrm{~d} t^{2}}\left(\overline{x^{2}}\right)+\frac{6 \pi R \eta}{m} \cdot \frac{\mathrm{~d}}{\mathrm{~d} t}\left(\overline{x^{2}}\right)-\frac{2 k T}{m}=0
$$

这就是由牛顿第二定律得出的小颗粒位移方均值 $\overline{x^{2}}$ 所遵循的微分方程。它相当丁下述形式，即

$$
\ddot{z}+a \dot{z}-\beta=0
$$

式中

$$
z=\overline{x^{2}}, \quad a=\frac{6 \pi R \eta}{m}, \quad \beta=\frac{2 k T}{m}
$$

其中 $a$ 和 $\beta$ 为常量. 此徽分方程的通解为

$$
z=\frac{\beta}{\alpha} t+C_{1} \mathrm{e}^{-\alpha t}+C_{2}
$$

故 $\overline{x^{2}}$ 的解为

$$
\overline{x^{2}}=\frac{k T}{3 \pi R \eta} t+C_{1} \mathrm{e}^{-\frac{6 \pi R \eta}{m} t}+C_{2}
$$

因 $t=0$ 时, $\overline{x^{2}}=0$,故积分常量

$$
C_{2}=-C_{1}
$$

代入,得

$$
\overline{x^{2}}=\frac{k T}{3 \pi R \eta} t+C_{1}\left(\mathrm{e}^{-\frac{6 \pi R \eta}{m}}-1\right)
$$

因题设 $m \ll 6 \pi R \eta$,故上式中的指数项很快衰减, 可略, 于是

$$
\overline{x^{2}}=\frac{k T}{3 \pi R \eta^{t}}-C_{1}
$$

但在 $t$ 接近零时, 仍要求 $\overline{x^{2}}$ 接近于零,故 $C_{1}$ 应为小量, 可略. 最后得出

$$
\overline{x^{2}}=\frac{k T}{3 \pi R \eta} t
$$

2. 由 $\overline{x^{2}}$ 的, 利用实验数据, 有

$$
\begin{aligned}
\overline{x^{2}}= & \frac{\sum n_{i}\left(\Delta x_{i}\right)^{2}}{\sum n_{i}} \\
= & {\left[0 \times(-13)^{2}+2 \times(-12)^{2}+4 \times(-11)^{2}+5 \times(-10)^{2}+10 \times(-9)^{2}+14 \times\right.} \\
& (-8)^{2}+22 \times(-7)^{2}+26 \times(-6)^{2}+29 \times(-5)^{2}+35 \times(-4)^{2}+45 \times(-3)^{2} \\
& +49 \times(-2)^{2}+63 \times(-1)^{2}+75 \times 0^{2}+60 \times 1^{2}+54 \times 2^{2}+45 \times 3^{2}+37 \times 4^{2}+ \\
& 31 \times 5^{2}+27 \times 6^{2}+20 \times 7^{2}+16 \times 8^{2}+9 \times 9^{2}+8 \times 10^{2}+6 \times 11^{2}+3 \times 12^{2}+0 \times \\
& \left.13^{2}\right] /\left[0+2+4+5+10+14+22+26+29+35+45+49+63+75+60+54+\right. \\
& 45+37+31+27+20+16+9+8+6+3+0]=21.08 \times 10^{-12} \mathrm{~m}^{2}
\end{aligned}
$$

故玻尔兹曼常量 $k$ 为

$$
k=\frac{3 \pi R \eta}{T t} \overline{x^{2}}
$$

把 $R=5.0 \times 10^{-8} \mathrm{~m}, \eta=1.73 \times 10^{-5} \mathrm{~Pa} \cdot \mathrm{~s}, T=273.15+15=288.15 \mathrm{~K}, t=5 \mathrm{~s}, \overline{x^{2}}=21.08 \times$ $10^{-12} \mathrm{~m}^{2}$ 等数据代入, 得

$$
k=1.19 \times 10^{-23} \mathrm{~J} / \mathrm{K}
$$

大家知道, $k$ 的精确值为 $k=1.380662 \times 10^{-23} \mathrm{~J} / \mathrm{K}$, 可见上述布朗运动的实验结果尚嫌粗略, 但数量级是对的。

# 第四章 范德瓦耳斯气体 液体 固体 相变 

【题1】试求 1 mol 范德瓦耳斯气体由温度 $T_{1}$, 体积 $V_{1}$ 自由膨胀到体积 $V_{2}$ 时摘的增量, 设气体的 $C_{V}, a, b$ 均为已知的常量。
【分析】为了计算摘的增量，需要知道初态和终态的状态参量，现已知 $T_{1}, V_{1}$ 和 $V_{2}$ ，问题在于未知的 $T_{2}$ 。由于从初态到终态经历的自由膨胀是非静态不可逆过程，无法写出相应的过程方程并由此求 $T_{2}$. 然而，自由膨胀意味着在膨胀过程中不受约束，无阻碍，完全是气体分子热运动的结果，所以既不对外作功，也不吸热。换言之，自由膨胀的特点是气体的内能不变，即 $U(T, V)$ $=$ 常量. 因此, 可以设计一个内能不变的准静态可逆过程来连接同样的初态和终态. 这个可逆过程的方程 $T(V)$ 可由 $U(T, V)=$ 常量以及范氏气体的状态方程得出, 由此即可求出 $T_{2}$. 于是问题迎刃而解。

补充两点：1. 设计的可逆过程只要求内能不变，不要求对外不作功和不吸热，所以显然它并不描述自由膨胀，只是连接同样的初态和终态。
2. 如果是理想气体，因内能 $U=U(T)$ ，内能不变，则温度不变，可设计可逆的等温膨胀过程来连接自由膨胀的初态和终态。但本题涉及的是范氏气体，因 $U=U(V, T)$ ，内能不变并不意味着温度一定不变，所以设计的连接自由膨胀初态和终态的可逆过程并非简单的可逆等温膨胀过程。
【解】设终态温度为 $T_{2}$. 因由初态 $\left(T_{1}, V_{1}\right)$ 经自由膨胀到达终态 $\left(T_{2}, V_{2}\right)$ ，内能不变，故设计一个连接同样的态和终态的可逆过程，在此过程中内能不变，即

$$
U(T, V)=\text { 常量 }
$$

范氏气体的状态方程为

$$
p=\frac{R T}{V-b}-\frac{a}{V^{2}}
$$

利用内能的微分表达式，以及由热学第二定律导出的内能与状态方程的关系，有

$$
\begin{gathered}
\mathrm{d} U=\left(\frac{\partial U}{\partial T}\right)_{V} \mathrm{~d} T+\left(\frac{\partial U}{\partial V}\right)_{T} \mathrm{~d} V=C_{V} \mathrm{~d} T+\left(\frac{\partial U}{\partial V}\right)_{T} \mathrm{~d} V \\
\left(\frac{\partial U}{\partial V}\right)_{T}=T\left(\frac{\partial p}{\partial T}\right)_{V}-p
\end{gathered}
$$

由（1）、（2）、（3）、（4）式可得出可逆过程的过程方程 $T(V)$ 及终态的 $T_{2}$ 如下. 把（2）式代入 (4)式, 得

$$
\left(\frac{\partial U}{\partial V}\right)_{T}=\frac{a}{V^{2}}
$$

把上式代入(3)式, 得

$$
\mathrm{d} U=C_{V} \mathrm{~d} T+\frac{a}{V^{2}} \mathrm{~d} V
$$

由（1）式

$$
\mathrm{d} U=0
$$

由以上两式，得

$$
C_{V} \mathrm{~d} T+\frac{a}{V^{2}} \mathrm{~d} V=0
$$

积分，得

$$
T=T_{1}+\frac{a}{C_{V}}\left(\frac{1}{V}-\frac{1}{V_{1}}\right)
$$

这就是可逆过程的过程方程。取任意状态的 $(T, V)$ 为终态的 $\left(T_{2}, V_{2}\right)$ ，得

$$
T_{2}=T_{1}+\frac{a}{C_{V}}\left(\frac{1}{V_{2}}-\frac{1}{V_{1}}\right)
$$

由初态经自由膨胀到达终态的熵的增量，与经上述可逆过程到达同一终态的熵的增量相同，为

$$
\Delta S=\int_{\text {初态 }}^{\text {敒态 }} \mathrm{d} S=\int_{\text {初态 }}^{\text {敒态 }} \frac{\mathrm{d} Q}{T}
$$

在该可逆过程中，内能不变， $\Delta U=0$ ，故 $\mathrm{d} Q=\mathrm{d} W=p \mathrm{~d} V$ ，代入，得

$$
\Delta S=\int_{\text {初态 }}^{\text {敒态 }} \frac{p \mathrm{~d} V}{T}
$$

把（2）式代入，得

$$
\Delta S=\int_{\text {初态 }}^{\text {敒态 }} \cdot\left(\frac{R}{V-b}-\frac{a}{T V^{2}}\right) \mathrm{d} V
$$

由（5）式，

$$
-\frac{a}{V^{2}} \mathrm{~d} V=C_{V} \mathrm{~d} T
$$

代入，得

$$
\Delta S=\int_{V_{1}}^{V_{2}} \frac{R}{V-b} \mathrm{~d} V+\int_{T_{1}}^{T_{2}} C_{V} \frac{\mathrm{~d} T}{T}=R \ln \frac{V_{2}-b}{V_{1}-b}+C_{V} \ln \frac{T_{2}}{T_{1}}
$$

把（6）式的 $T_{2}$ 代入，得

$$
\Delta S=R \ln \frac{V_{2}-b}{V_{1}-b}+C_{V} \ln \left[1+\frac{a}{C_{V} T_{1}}\left(\frac{1}{V_{2}}-\frac{1}{V_{1}}\right)\right]
$$

【题 2】 1 mol 氧气在节流过程中体积由高压一边的 $4.0 \times 10^{-3} \mathrm{~m}^{3}$ 增大到低压一边的 $1.2 \times$ $10^{-2} \mathrm{~m}^{3}$ 。已知氧气为范围瓦耳斯气体，范氏常量为 $a=0.138 \mathrm{~N} \cdot \mathrm{~m}^{3} / \mathrm{mol}^{2} ， b=3.2 \times 10^{-5} \mathrm{~m}^{3} / \mathrm{mol}$ ，摩尔定体热容量恒定，为 $C_{V}=20.8 \mathrm{~J} /(\mathrm{mol} \cdot \mathrm{K})$ 。试计算节流过程前后氧气的温度变化。
【分析】节流过程亦称焦耳一话姆孙过程，气体从压强较大的空间经多孔塞绝热膨胀到压强较小的空间，多孔塞的作用是在其两侧维持恒定的压强差。节流过程的特点是过程中焓 $H=U+$ $p V$ 保持不变，为等焓过程，气体经节流后，一般温度会降低，从而提供了一种致冷的方法。同时表明，真实气体与理想气体模型有差异，因为理想气体经节流过程后温度是不变的，通过本题的计算应加深上述认识。节流过程等给，给出了 $U, p, V$ 的关系。结合范氏方程，可给出 $U, T, V$ 的关系。利用由内能微分表达式和内能与状态方程（范氏方程）的关系可得出 $U(T, V)$ 。综上，可得出用 $(T, V)$表示的范氏气体经节流过程的过程方程，于是温度变化可求。
【解】节流过程是等给过程，故有

$$
H_{2}=H_{1}
$$

或

$$
U_{2}+p_{2} V_{2}=U_{1}+p_{1} V_{1}
$$

即

$$
p_{2} V_{2}-p_{1} V_{1}=U_{1}-U_{2}
$$

式中的下标 1 和 2 分别表示膨胀前和膨胀后的物理量。
范氏气体的状态方程为

$$
\left(p+\frac{a}{V^{2}}\right)(V-b)=R T
$$

即

$$
p=\frac{R T}{V-b}-\frac{a}{V^{2}}
$$

把（2）式代入（1）式，消去 $p_{1}$ 和 $p_{2}$ ，得

$$
\left(\frac{R V_{2} T_{2}}{V_{2}-b}-\frac{R V_{1} T_{1}}{V_{1}-b}\right)-\left(\frac{a}{V_{2}}-\frac{a}{V_{1}}\right)=U_{1}-U_{2}
$$

由题给数据， $V_{1}$ 和 $V_{2} \gg b$ ，上式简化为

$$
R\left(T_{2}-T_{1}\right)-a\left(\frac{1}{V_{2}}-\frac{1}{V_{1}}\right)=U_{1}-U_{2}
$$

把范氏气体的内能表为 $(T, V)$ 的函数，即

$$
U=U(T, V)
$$

其微分式为

$$
\mathrm{d} U=\left(\frac{\partial U}{\partial T}\right)_{V} \mathrm{~d} T+\left(\frac{\partial U}{\partial V}\right)_{T} \mathrm{~d} V=C_{V} \mathrm{~d} T+\left(\frac{\partial U}{\partial V}\right)_{T} \mathrm{~d} V
$$

由热力学第二定律导出内能与状态方程之间有下述关系

$$
\left(\frac{\partial U}{\partial V}\right)_{T}=T\left(\frac{\partial p}{\partial T}\right)_{V}-p
$$

由范氏方程（2）式，得

$$
\left(\frac{\partial p}{\partial T}\right)_{V}=\frac{R}{V-b}
$$

把（6）式代入（5）式，得

$$
\left(\frac{\partial U}{\partial V}\right)_{T}=\frac{R T}{V-b}-p=\frac{a}{V^{2}}
$$

再把（7）式代入（4）式，得

$$
\mathrm{d} U=C_{V} \mathrm{~d} T+\frac{a}{V^{2}} \mathrm{~d} V
$$

积分, 得

$$
U=U_{0}+C_{V} T-\frac{a}{V}
$$

此即范氏气体的 $U(T, V)$ ，于是

$$
U_{1}-U_{2}=C_{V}\left(T_{1}-T_{2}\right)-\left(\frac{a}{V_{1}}-\frac{a}{V_{2}}\right)
$$

代入(3)式, 得

$$
\left(R+C_{V}\right)\left(T_{2}-T_{1}\right)=2 a\left(\frac{1}{V_{2}}-\frac{1}{V_{1}}\right)
$$

故

$$
T_{2}-T_{1}=\frac{2 a}{R+C_{V}}\left(\frac{1}{V_{2}}-\frac{1}{V_{1}}\right)=-1.6 \mathrm{~K}
$$

可见，在题设条件下范氏气体氧气经节流膨胀后温度降低了。
【题 3】一定量的乙醚封装在玻璃管内，一部分呈液态，另一部分呈气态，管内无其他杂质。若管内体积恰好为这些乙醚的临界体积，那么在缓慢加热到临界温度时，因气、液两相不再有差别而使液面消失，这就是临界现象的演示实验。假设 1 mol 乙醚的状态方程为 $\left(p+\frac{a}{V^{2}}\right)(V-b)=$ $R T$ ，即为范德瓦耳斯方程，如图所示。

1. 已知乙醚的摩尔临界体积为 $V_{\mathrm{K}}$ ，在温度为 $T$ ，压强为饱和蒸汽压时，气相和液相的摩尔体积为 $V_{g}$ 和 $V_{l}$ 。试确定在该温度时玻璃管中气相和液相各占总体积的百分比 $B_{g}$ 和 $B_{l}$ 。
2. 在 $V_{g} \gg V_{l}$ 的条件下, 试用 $a 、 b 、 T$ 来表述 $V_{l}$ 。
3. 若在 $20^{\circ} \mathrm{C}$ 封装乙醚，那么应取 $B_{l}$ 为何值？已知乙醚临
![img-316.jpeg](img-316.jpeg)

热图 4-3-1

界点的 $T_{\mathrm{K}}=466.95 \mathrm{~K}, p_{\mathrm{K}}=34.60 \mathrm{~atm}$.
【分析】 范氏气体的等温线如图中实线所示，实际气体的等温线如图中平直虚线所示，实线被平直虚线分割的两块的面积相同。以温度为 $T$ 的等温线为例，摩尔体积为 $V_{g}$ 时为气相，再压缩便开始液化， $V_{l}$ 时为液相， $V_{g}$ 与 $V_{l}$ 之间两相共存。图中 $K$ 点为临界点，是气、液两相平衡共存的临界状态，这时液体密度和相应饱和蒸汽的密度相等，其间的分界面消失。 $T_{\mathrm{K}} 、 p_{\mathrm{K}} 、 V_{\mathrm{K}}$ 称为临界温度、临界压强和临界摩尔体积。因此，如本题为了通过等体加温达到临界状态，需使总体积为 $V_{\mathrm{K}}$ 。
【解】1. 取 1 mol 乙醚，其等温曲线如上图，为演示临界现象，总体积应为 $V_{\mathrm{K}}$ ，以便随着温度的升高，等体线能通过临界点 $K$ 。设温度为 $T$ 时，气相和液相的摩尔数分别为 $\alpha(T)$ 和 $\beta(T)$ ，则

$$
\begin{gathered}
\alpha+\beta=1 \\
\alpha V_{g}+\beta V_{l}=V_{\mathrm{K}}
\end{gathered}
$$

气相和液相各占总体的百分数为

$$
\begin{aligned}
& B_{g}=\frac{a V_{g}}{V_{\mathrm{K}}} \\
& B_{l}=\frac{\beta V_{l}}{V_{\mathrm{K}}}
\end{aligned}
$$

由以上四式，得

$$
\left\{\begin{array}{l}
B_{g}=\frac{\left(V_{\mathrm{K}}-V_{l}\right) V_{g}}{\left(V_{g}-V_{l}\right) V_{\mathrm{K}}} \\
B_{l}=\frac{\left(V_{g}-V_{\mathrm{K}}\right) V_{l}}{\left(V_{g}-V_{l}\right) V_{\mathrm{K}}}
\end{array}\right\}
$$

如果所取乙醚不是 1 mol ，而是 $\nu \mathrm{mol}$ ，则上述推导中的 $\alpha+\beta=1$ 应改为 $\alpha+\beta=\nu$ ，玻璃管的容积也应从 $V_{\mathrm{K}}$ 改为 $\nu V_{\mathrm{K}}$ ，但（1）式不变，即 $B_{g}$ 和 $B_{l}$ 与 $\nu$ 无关。
2. 如图, 设温度为 $T$ 时的饱和蒸汽压为 $p_{0}$, 由等面积法则, 得

$$
\int_{V_{l}}^{V_{g}} p \mathrm{~d} V=p_{0}\left(V_{g}-V_{l}\right)
$$

范氏方程为

$$
p=\frac{R T}{V-b}-\frac{a}{V^{2}}
$$

代入, 积分, 得

$$
R T \ln \frac{V_{g}-b}{V_{l}-b}-a\left(\frac{1}{V_{l}}-\frac{1}{V_{g}}\right)=p_{0}\left(V_{g}-V_{l}\right)
$$

又，在 $V_{g}$ 和 $V_{l}$ 两点，由范氏方程，有

$$
\left\{\begin{array}{l}
\left(p_{0}+\frac{a}{V_{g}^{2}}\right)\left(V_{g}-b\right)=R T \\
\left(p_{0}+\frac{a}{V_{l}^{2}}\right)\left(V_{l}-b\right)=R T
\end{array}\right\}
$$

以上三式联立，消去 $p_{0}$ ，得出 $V_{g}$ 和 $V_{l}$ 满足的方程组为

$$
\left\{\begin{array}{l}
R T \ln \frac{V_{g}-b}{V_{l}-b}=a\left(\frac{1}{V_{l}}-\frac{1}{V_{g}}\right)\left(\frac{V_{g}-b}{V_{g}}+\frac{V_{l}-b}{V_{l}}\right) \\
R T\left(\frac{1}{V_{l}-b}-\frac{1}{V_{g}-b}\right)=a\left(\frac{1}{V_{l}^{2}}-\frac{1}{V_{g}^{2}}\right)
\end{array}\right\}
$$

在 $V_{g} \gg V_{l}$ 的条件下，简化为

$$
\left\{\begin{array}{l}
R T \ln \frac{V_{g}-b}{V_{l}-b}=\frac{a}{V_{l}}\left(2-\frac{b}{V_{l}}\right) \\
\frac{R T}{V_{l}-b}=\frac{a}{V_{l}^{2}}
\end{array}\right\}
$$

解出

$$
V_{l}=\frac{1}{2 R T}[a \pm \sqrt{a(a-4 b R T)}]
$$

(3)式中的正、负号由下述条件确定，即应有

$$
3 b=V_{\mathrm{K}}>V_{i}>b
$$

3. 由 $T_{\mathrm{K}}=466.95 \mathrm{~K}, p_{\mathrm{K}}=34.60 \mathrm{~atm}$, 得出

$$
\begin{aligned}
& b=\frac{R T_{\mathrm{K}}}{8 p_{\mathrm{K}}}=1.385 \times 10^{4} \mathrm{~m}^{3} / \mathrm{mol} \\
& a=27 p_{\mathrm{K}} b^{2}=1.792 \times 10^{-5} \mathrm{~m}^{6} \cdot \mathrm{~atm} / \mathrm{mol}^{2} \\
& V_{\mathrm{K}}=3 b=4.155 \times 10^{-4} \mathrm{~m}^{3} / \mathrm{mol}
\end{aligned}
$$

当 $T=273.15+20=293.15 \mathrm{~K}$ 时, 由 (3) 式, 利用上述 $a$ 和 $b$ 值, 得

$$
V_{i}=1.90 \times 10^{-4} \mathrm{~m}^{3} / \mathrm{mol}
$$

由(2)式

$$
\begin{aligned}
V_{g} & =\left(V_{i}-b\right) \exp \left[\frac{a}{V_{i} R T}\left(2-\frac{b}{V_{i}}\right)\right]+b=\left(V_{i}-b\right) \exp \left[\frac{a}{V_{i} R T}\left(1+\frac{V_{i}-b}{V_{i}}\right)\right]+b \\
& =\left(V_{i}-b\right) \exp \left[\frac{a}{V_{i} R T}\left(1+\frac{R T V_{i}}{a}\right)\right]+b=\left(V_{i}-b\right) \exp \left[1+\frac{a}{V_{i} R T}\right]+b \\
& =7.18 \times 10^{-3} \mathrm{~m}^{3} / \mathrm{mol}
\end{aligned}
$$

把上述 $V_{\mathrm{K}}, V_{i}, V_{g}$ 代入(1)式, 得

$$
B_{i}=\frac{\left(V_{g}-V_{\mathrm{K}}\right) V_{i}}{\left(V_{g}-V_{i}\right) V_{\mathrm{K}}}=44.1 \%
$$

【题4】一种所谓的第二类永动机装置如图所示，图中水平放置的大容器密封但与大气导热，容器左侧 A 处被固出一个毛细管区域，上方直通容器顶部，右方是实物 B，B 的外面有相当大的空间 C. 图中 D 为一导通管，内有活塞 E 可以无摩擦地左右移动 . F 和 G 是两个活门， F 可在一定的压差作用下打开，直到压差几乎为零时才关闭；G则在一定的压差作用下关闭，直到压差几乎为零时又打开，使 D 与 C 导通。图中水平虚线区域代表某种液体，它与图中所有固体部分均为完全润湿，空白部分只有该液体的饱和蒸汽。

设计者依据：第一，图中用点标出的两处饱和蒸汽压 $p_{1}$ 和 $p_{2}$相同. 第二，气体内部因高度差引起的附加压强、推证出该装置能往复地从单一热源（大气）吸取热量全部转化为机械功，而不产生其
![img-317.jpeg](img-317.jpeg)

热图4-4-1

他影响。

1. 试完成设计者的推证过程.
2. 通过对这个永动机装置的否定，导出 $p_{1}$ 与 $p_{2}$ 之间的定量关系，所需参量可自行设取。
【解】1. 设计者的两个依据是

$$
\left\{\begin{array}{l}
p_{1}=p_{2} \\
p_{2}=p_{0}+\rho_{\mathrm{R}} g h
\end{array}\right\}
$$

故

$$
p_{1}>p_{0}
$$

式中 $p_{0}$ 和 $h$ 的含义如图所示。因 $p_{1}>p_{0}$ ，活门 $F$ 打开，活门 $G$ 关闭，活塞 $E$ 被向右推动从而对外作机械功. 压差降为零时, F 关闭, G 打开, 可不作功地使 E 自动向左退回原处, 尔后 C 处部分蒸汽液化, 毛细管中部分液体气化, 使系统复原, 重新形成 $p_{1}$ 与 $p_{0}$ 之阅的压差. 由热力学第一定律, 系统在整个过程中对外作功只能来源于从外界 (大气) 吸热, 现在外界是单一热源, 并且系统复原，所以违背了热力学第二定律，这是一个第二类永动机。
2. 设计者的第二条依据即 $p_{2}=p_{0}+\rho_{\kappa} g h$ 是万有引力定律的结果, 毋容置疑、问题在于第一条依据即 $p_{1}=p_{2}$ 并不成立, 应为

$$
p_{1} \neq p_{2}
$$

也就是说，液面附近的饱和蒸汽压不仅与温度有关，而且还必定与液面的几何形状有关。设计者的失误正在于此. 定量分析如下.

设毛细管半径为 $r$ ，在完全润湿条件下 $r$ 是球形液面的半径。设 $p_{A}$ 为毛细管液面内侧的液体压强，设 $\alpha$ 为液体的表面张力系数，设 $h$ 为毛细管液面升高的高度. 则有

$$
\begin{gathered}
p_{1}=p_{A}+\frac{2 \alpha}{r}, \quad p_{A}=p_{2}-\rho_{\text {■ }} g h, \quad p_{2}=p_{0}+\rho_{\kappa} g h, \\
p_{1}=p_{0} \quad \text { (确保永动机动不起来) }
\end{gathered}
$$

由以上四式，解出

$$
h=\frac{2 \alpha}{\left(\rho_{\text {■ }}-\rho_{\kappa}\right) g r}
$$

故

$$
p_{1}-p_{2}=\frac{2 \alpha}{r}-\rho_{\text {■ }} g h
$$

或

$$
p_{1}=p_{2}-\frac{2 \alpha p_{A}}{\left(\rho_{\text {■ }}-\rho_{\kappa}\right) r}
$$

【题 5】 如图, 在一根两端开口、内直径为 1.0 mm 的圆柱形毛细管中, 滴入一滴水, 然后将它坚直放置. 若这滴水在毛细管中分别形成 $1.2 .00 \mathrm{~cm}, 2.4 .00 \mathrm{~cm}, 3.2 .98 \mathrm{~cm}$ 的水柱. 试问在这三种情况下水柱下端的液面是平面, 还是向液体内部凹陷的或向液体外部凸出的曲面? 设毛细管能完全润湿水，已知水的表面张力系数 $\alpha=0.073 \mathrm{~N} / \mathrm{m}$ 。
【分析】 坚直毛细管中液柱的上液面是凹陷的曲面, 因题设完全润湿, 接触角为零, 故为半球面、于是上液面内一点 $A$ 的压强 $p_{A}$ 为大气压与表面张力之差. 同样,下液面内一点 $B$ 的压强 $p_{B}$ 亦为大气压与下液面表面张力之差. 而 $p_{B}$ 又等于 $p_{A}$ 与液柱重叠之和、换言之，上、下液面表面张力之差支承着毛细管内的液柱. 由此下液面的表面张力及下液面的形状可知. 由于上液面的表面张力方向坚直向上, 不难设想, 当液柱较短时, 下液面为凹面 (上液面表面张力一部分支承液柱, 另一部分与液体表面张力抵消); 随着液柱的增长, 当下液面表面张力刚好等于液柱重量时,下液面为平面; 液柱再增长,下液面应为凸面, 以便上、下液面的表面张力同方向, 共同支承液柱。
【解】 上液面凹陷的曲面, 题设毛细管完全润湿水, 故接触角为零, 且因液柱长度至少为 2 cm ,几乎是毛细管直径 1 mm 的 20 倍, 因此上液面可作球面近似, 为半球面, 其半径为

$$
R_{A}=5 \times 10^{-4} \mathrm{~m}
$$

上液面内一点 $A$ (如图) 的压强为

$$
p_{A}=p_{0}-\frac{2 \alpha}{R_{A}}
$$

下液面在图中用虚线表示，同理可作球面近似，但不能断定是否为半球面，其半径表为 $R_{B}$ ，规定

$$
R_{B}>0, \text { 为凹球面, } \quad R_{B}<0, \text { 为凸球面, } \quad R=\infty, \text { 为平面 }
$$

于是，下液面内一点 $B$ （如图）的压强为

$$
p_{B}=p_{0}-\frac{2 \alpha}{R_{B}}
$$

显然

$$
p_{B}=p_{A}+\rho g h
$$

式中 $\rho=10^{3} \mathrm{~kg} / \mathrm{m}^{3}$ 为水的密度， $h$ 为水柱高度。
(1)、(2)、(3)式联立,得

$$
\frac{1}{R_{B}}=-\frac{\rho g h}{2 \alpha}+\frac{1}{R_{A}}
$$

当 $h=2.00 \times 10^{-2} \mathrm{~m}$ 时, 得

$$
\frac{1}{R_{B}}=-1.34 \times 10^{3}+2 \times 10^{3}=0.66 \times 10^{3} \mathrm{~m}>0
$$

即

$$
R_{B}>0
$$

故下液面为凹面。
当 $h=4.00 \times 10^{-2} \mathrm{~m}$ 时，

$$
\frac{1}{R_{B}}=-2.68 \times 10^{3}+2 \times 10^{3}=-0.68 \times 10^{3} \mathrm{~m}<0
$$

即 $R_{B}<0$, 故下液面为凸面.
当 $h=2.98 \times 10^{-2} \mathrm{~m}$ 时，

$$
\frac{1}{R_{B}}=2.0 \times 10^{-3}-2 \times 10^{-3}=0
$$

即 $R_{B}=\infty$,故下液面为平面.

【题 6】如图，有一总长度为 $L$ ，粗细均匀的 $U$ 型毛细管，将它的两个开口端竖直向下稍稍侵入两个容器的等高液面之中。因毛细作用，液体 1 和液体 2 分别在毛细管中上升了 $h_{1}$ 和 $h_{2}$ 的高度。设液体 1 和 2 的密度分别为 $\rho_{1}$ 和 $\rho_{2}$ ，它们与毛细管壁的接触角均为 $0^{\circ}$ ，设液体在毛细管中上升时管内气体无外漏，大气压强为 $p_{0}$ 。

试求液体 1 与液体 2 的表面张力系数的比值。
【分析】如图，毛细管插入后，因毛细作用，两边液体分别上升了 $h_{1}$ 和 $h_{2}$ 的高度。管内的气体插入前为大气压强 $p_{0}$ ，插入后经等温压缩升为 $p$ 。由理想气体状态方程可得出 $p$ 与 $h_{1}$ 和 $h_{2}$ 的关系。左边毛细管内的压强 $p$ 与 $\rho_{1} 、 \alpha_{1}$ 有关，右边的 $p$ 则与 $\rho_{2} 、 \alpha_{2}$ 有关。利用上述关系，即可求出两液体表面张力系数之比 $\frac{\alpha_{1}}{\alpha_{2}}$ 。
【解】毛细管插入前，其中气体压强为大气压强 $p_{0}$ ，插入后，气体被封闭，经等温压缩，升为 $p$ 。由理想气体状态方程，有

$$
p\left(L-h_{1}-h_{2}\right)=p_{0} L
$$

左边毛细管中液面内的压强 $p_{1}$ 与液面外的压强 $p$ 的关系为

$$
p_{1}=p-\frac{2 \alpha_{1}}{R}
$$

又

$$
p_{1}=p_{0}-\rho_{1} g h_{1}
$$

由以上三式，得

$$
p_{0}-\rho_{1} g h_{1}=p-\frac{2 \alpha_{1}}{R}=\frac{L}{L-h_{1}-h_{2}} p_{0}-\frac{2 \alpha_{1}}{R}
$$

![img-318.jpeg](img-318.jpeg)

执图 $4-6-1$

其中 $R$ 为毛细管半径。
同理，由右边毛细管中液面内、外压强关系可得

$$
p_{0}-\rho_{2} g h_{2}=\frac{L}{L-h_{1}-h_{2}} p_{0}-\frac{2 \alpha_{2}}{R}
$$

把以上两式改写为

$$
\begin{aligned}
& \frac{2 \alpha_{1}}{R}=\frac{h_{1}+h_{2}}{L-h_{1}-h_{2}} p_{0}+\rho_{1} g h_{1} \\
& \frac{2 \alpha_{2}}{R}=\frac{h_{1}+h_{2}}{L-h_{1}-h_{2}} p_{0}+\rho_{2} g h_{2}
\end{aligned}
$$

相除，得两种液体表面张力系数之比为

$$
\frac{\alpha_{1}}{\alpha_{2}}=\frac{\left(h_{1}+h_{2}\right) p_{0}+\rho_{1} g h_{1}\left(L-h_{1}-h_{2}\right)}{\left(h_{1}+h_{2}\right) p_{0}+\rho_{2} g h_{2}\left(L-h_{1}-h_{2}\right)}
$$

【题 7】 已知水在 1 atm 和 $4 \mathrm{C}$ 时的表面张力系数 $\alpha=7.24 \times 10^{-2} \mathrm{~N} / \mathrm{m}$ ，等温压缩系数 $\beta=$ $-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_{T}=4.75 \times 10^{-5} \mathrm{~atm}^{-1}$. 若在 1 atm 和 $4 \mathrm{~V}$ 时, 水平液面下附近水的密度为 $\rho_{0}$. 试问在 1 atm 和 $4 \mathrm{~V}$ 时，半径 $r=1.0 \times 10^{-6} \mathrm{~cm}$ 的小水滴密度为多大?
【分析】由等温压缩系数 $\beta$ 可知，在等温条件下，水的体积随压强而变，即水的密度随压强而变。小水滴中的压强与水平液面内附近水压强的差别是由表面张力引起的，可由 $\alpha$ 和 $r$ 求出。于是小水滴密度 $\rho$ 与水密度 $\rho_{0}$ 的关系可知。
【解】水的等温压缩系数为

$$
\beta=-\frac{1}{V}\left(\frac{\mathrm{~d} V}{\mathrm{~d} p}\right)_{T}
$$

在等温条件下，有

$$
\beta \mathrm{d} p=-\frac{\mathrm{d} V}{V}
$$

积分、得

$$
\ln \frac{V_{0}}{V}=\beta\left(p-p_{0}\right)
$$

对于同样质量的水，当其体积由 $V_{0}$ 变为 $V$ 时，其密度由 $\rho_{0}$ 变为 $\rho$ ，显然

$$
\frac{\rho}{\rho_{0}}=\frac{V_{0}}{V}
$$

由以上两式，得

$$
\ln \frac{\rho}{\rho_{0}}=\beta\left(p-p_{0}\right)
$$

即

$$
\rho=\rho_{0} \mathrm{e}^{\beta\left(p-p_{0}\right)}
$$

以下标" 0 "标志水平液面下附近的水，无下标的量表示小水滴中的水，则小水滴内、外的压强差是由表面张力引起的，为

$$
p=p_{0}+\frac{2 a}{r}
$$

由以上两式，得

$$
\rho=\rho_{0} \mathrm{e}^{\frac{2 a \beta}{r}}
$$

式中

$$
\frac{2 a \beta}{r}=6.9 \times 10^{-3} \ll 1
$$

故

$$
\rho \approx \rho_{0}\left(1+\frac{2 a \beta}{r}\right)=1.0069 \rho_{0}
$$

【题 8】在连通管的两端吹出两个相同的球形肥㕰泡 A 和 B 后，如热图 $4-8-1$ ，关闭活检 K ，活检 $\mathrm{K}_{\mathrm{A}}$ 和 $\mathrm{K}_{\mathrm{B}}$ 则依旧打开，两泡内的空气经管相通，两泡相对平衡。

1. 如热图 4-8-2,若 A 泡和 B 泡的形状小于半球, 试证明 A 泡和 B 泡之间的平衡是稳定
![img-319.jpeg](img-319.jpeg)

热图 4-8-1
![img-320.jpeg](img-320.jpeg)

热图 4-8-2
![img-321.jpeg](img-321.jpeg)

热图 4-8-3的. 如热图 4-8-3, 若 A 泡和 B 泡的形状大于半球, 试证明 A 泡和 B 泡之间的平衡是不稳定的.
2. 若 A 泡和 B 泡的形状大于半球, 设两管口的半径均为 $r_{1}=2.00 \mathrm{~cm}$, A 泡和 B 泡的半径均为 $r_{2}=2.50 \mathrm{~cm}$. 试问当 A 泡和 B 泡分别变化或何种形状时, 两泡能再次达到平衡. 设空气因压缩或膨胀所引起的密度变化可以忽略.
【分析】 1. 球形肥㿝泡 A 和 B 在吹大的过程中, 泡半径不断变化, 泡面实际上是球的一部分.开始时 A 泡和 B 泡大小相同, 达到平衡, 两泡内气体压强相同.

如热图 4-8-2, 若 A 泡和 B 泡的形状相同, 均小于半球, 泡半径应大于管半径. 若因扰动使得例如 A 泡稍稍缩小, 则泡半径稍稍增大, 表面张力相应稍稍减小, 因泡外大气压强不变, A泡内压强稍稍减小. 由于 A 泡与 B 泡经管连通, A 泡内压强稍稍减小后, 气体将从 B 泡过来补充, 使 A 泡恢复扰动前的形状, 重新达到平衡. 对于 A 泡因扰动稍稍增大, 或 B 泡因扰动稍稍增大或缩小的情况可作同样分析.

总之, 当 A 泡和 B 泡的形状小于半球时, 扰动会自动消失, 其间的平衡是稳定的.
2. 如热图 4-8-3, 若 A 泡和 B 泡形状相同, 均大于半球, 达到平衡时, 两泡内气体压强相同. 若因扰动使 A 泡稍稍缩小, 则泡半径稍稍缩小 (与热图 4-8-2 情形相反), 表面张力相应稍稍增大, A 泡内压强稍稍增大, 使气体从 A 泡到 B 泡, B 泡增大. A 泡缩小和 B 泡增大后, 扰动将继续发展.

总之, 当 A 泡和 B 泡的形状大于半球时, 其间的平衡是不稳定的.
3. 值得注意的是, 当 A 泡缩小到半球形状时, 即当 $r_{2}=r_{1}$ 时, A 泡半径最小, 若再收缩使形状小于半球时, A 泡半径再度增大, 根据 1 中的分析, A 泡内的压强将再度下降. 当 A 泡小于半球, B 泡大于半球, 而两者的半球相同时, 两泡内的压强再次相同, 这是又一个新的平衡状态. [解] 1. 见分析 1 和分析 2.
2. 如分析 3 , 另一平衡态为 A 泡小于半球, B 泡大于半球, 而两者半径相同, 设为 $r$, 如热图 4 -8-4 所示. 这样, 两泡恰好合成一个半径为 $r$ 的球, 于是有
![img-322.jpeg](img-322.jpeg)

热图 4-8-4
![img-323.jpeg](img-323.jpeg)

热图 4-8-5

$$
\frac{4}{3} \pi r^{3}=2 V_{0}
$$

式中 $V_{0}$ 为开始 A 泡和 B 泡形状相同时各自的体积. 如热图 4-8-5, 利用球缺的体积公式, 有

$$
V_{0}=\pi h^{2}\left(r_{2}-\frac{h}{3}\right)
$$

式中 $h$ 如热图 4-8-5所示, 为

$$
h=r_{2}+\sqrt{r_{2}^{2}-r_{1}^{2}}
$$

代入(2)式, 得

$$
V_{0}=18.67 \pi \mathrm{~cm}^{3}
$$

代入(1)式,得

$$
\begin{aligned}
r & =\sqrt[3]{\frac{3}{2 \pi} V_{0}}=\sqrt[3]{\frac{3}{2 \pi} \pi h^{2}\left(r_{2}-\frac{h}{3}\right)} \\
& =\sqrt[3]{\frac{3}{2}\left(r_{2}+\sqrt{r_{2}^{2}-r_{1}^{2}}\right)^{2}\left[r_{2}-\frac{1}{3}\left(r_{2}+\sqrt{r_{2}^{2}-r_{1}^{2}}\right)\right]}=3.04 \mathrm{~cm}
\end{aligned}
$$

【题 9】 如图, 半径为 $R$, 密度为 $\rho$ 的匀质球浮在 $0^{\circ} \mathrm{C}$ 的某液体表面上, 球心高出液面 $h$. 设球的热膨胀可以忽略. 已知液体的热膨胀系数为 $\alpha$, 表面张力系数 $\sigma$ 随摄氏温度 $t$ 的变化关系为 $\sigma(t)=\sigma_{0}(1-\beta t)$, 其中 $\beta$ 为常量. 设液体对球为完全润湿、试证明, 当系统温度小幅度变化时, 球浸入液体部分体积不变的条件为

$$
\frac{\beta-\alpha}{\alpha}=\frac{2 R^{4} \rho g}{3 \sigma_{0}\left(R^{2}-h^{2}\right)}
$$

【分析】球浮在液体表面上, 所受的重力、浮力和表面张力达到平衡. 因液体对球为完全润湿, 表面张力沿球与液体交界点的切向, 并
![img-324.jpeg](img-324.jpeg)

热图 4-9-1

指向液体. 由于球与液体的交界点构成图中半径为 $r$ 的圆, 因此各处的表面张力的合力将竖直向下。

温度变化时, 球的体积和密度不变 (忽略球的热膨胀), 但液体的密度和表面张力系数变化,导致浮力与表面张力的变化. 根据给出的 $\alpha$ 和 $\sigma(t)$, 温度 $t$ 小幅度变化的条件以及球浸入液体部分体积不变的要求, 即可给予证明.
【解】球在重力、浮力、表面张力的作用下达到平衡、重力坚直向下, 为

$$
m g=\frac{4}{3} \pi R^{3} \rho g
$$

浮力坚直向上, 设球浸在液体中的体积为 $V_{L}$, 液体密度为 $\rho_{L}$, 则浮力为

$$
F=V_{L} \rho_{L} g
$$

因液体对球完全润湿, 表面张力方向如图. 设 $\mathrm{d} l$ 为液体表面与球接触的半径为 $r$ 的圆周上的一小段线元, 则通过 $\mathrm{d} l$ 作用在球上的表面张力 $\mathrm{d} f$ 的大小为

$$
\mathrm{d} f=\sigma \mathrm{d} l
$$

$\mathrm{d} f$ 坚直向下的分量为

$$
\mathrm{d} f_{y}=\mathrm{d} f \cdot \cos \theta=\frac{r}{R} \mathrm{~d} f=\frac{\sqrt{R^{2}-h^{2}}}{R} \sigma \mathrm{~d} l
$$

球所受表面张力为沿半径 $r$ 圆周各处的表面张力的竖直分量之和, 为

$$
f_{y}=\oint \mathrm{d} f_{y}=\frac{\sigma}{R} \sqrt{R^{2}-h^{2}} \oint \mathrm{~d} l
$$

$$
=\frac{\sigma}{R} \sqrt{R^{2}-h^{2}} \cdot 2 \pi r=\frac{2 \pi \sigma}{R}\left(R^{2}-h^{2}\right)
$$

以上三力平衡, 有

$$
F=f_{y}+m g
$$

即

$$
2 \pi \frac{\sigma}{R}\left(R^{2}-h^{2}\right)+\frac{4}{3} \pi R^{3} \rho_{R}=V_{L} \rho_{L} g
$$

温度 $t$ 变化时， $\rho$ 和 $R$ 不变， $\sigma$ 和 $\rho_{L}$ 变化， $h$ 和 $V_{L}$ 有相应变化。把上式对 $t$ 求导，得

$$
\frac{2 \pi}{R}\left(R^{2}-h^{2}\right) \frac{\mathrm{d} \sigma}{\mathrm{~d} t}-\frac{4 \pi \sigma h}{R} \frac{\mathrm{~d} h}{\mathrm{~d} t}=\rho_{L} g \frac{\mathrm{~d} V_{L}}{\mathrm{~d} t}+V_{L} g \frac{\mathrm{~d} \rho_{L}}{\mathrm{~d} t}
$$

当温度 $t$ 在 $0^{\circ} \mathrm{C}$ 附近小幅度变化时，要求球浸入液体部分的体积不变，即要求 $h$ 和 $V_{L}$ 不变，于是

$$
\left\{\begin{array}{l}
\frac{\mathrm{d} h}{\mathrm{~d} t}=0 \\
\frac{\mathrm{~d} V_{L}}{\mathrm{~d} t}=0
\end{array}\right\}
$$

因

$$
\sigma(t)=\sigma_{0}(1-\beta t)
$$

故有

$$
\frac{\mathrm{d} \sigma}{\mathrm{~d} t}=-\beta \sigma_{0}
$$

热膨胀系数 $\alpha$ 定义为

$$
\alpha=\frac{1}{V} \frac{\mathrm{~d} V}{\mathrm{~d} t}
$$

对本题的液体，取恒定的质量 $M$ ，当温度 $t$ 变化时，其体积 $V_{L}$ 和密度 $\rho_{L}$ 均变化，由

$$
M=\rho_{L} V_{L}
$$

求导，得

$$
\frac{\mathrm{d} V_{L}}{\mathrm{~d} t}=-\frac{M}{\rho_{L}^{2}} \frac{\mathrm{~d} \rho_{L}}{\mathrm{~d} t}
$$

代入 $\alpha$ 的定义式，得

$$
\alpha=\frac{1}{V_{L}} \frac{\mathrm{~d} V_{L}}{\mathrm{~d} t}=-\frac{M}{V_{L} \rho_{L}^{2}} \frac{\mathrm{~d} \rho_{L}}{\mathrm{~d} t}=-\frac{1}{\rho_{L}} \frac{\mathrm{~d} \rho_{L}}{\mathrm{~d} t}
$$

或

$$
\frac{\mathrm{d} \rho_{L}}{\mathrm{~d} t}=-a \rho_{L}
$$

把（3）、（4）、（5）式代入（2）式，得

$$
-2 \pi \beta \sigma_{0} \frac{R^{2}-h^{2}}{R}=-a V_{L} \rho_{L} g
$$

把上式与（1）式联立，消去 $V_{L} \rho_{L} g$ ，得

$$
2 \pi \beta \sigma_{0} \frac{R^{2}-h^{2}}{R}=a\left(2 \pi \sigma \frac{R^{2}-h^{2}}{R}+\frac{4}{3} \pi R^{3} \rho_{R}\right)
$$

因系统的温度 $t$ 在 $0^{\circ} \mathrm{C}$ 附近小幅度变化，故上式右第一项中的 $\sigma$ 应为 $\sigma_{0}$ ，于是

$$
2 \pi \sigma_{0} \frac{R^{2}-h^{2}}{R}(\beta-\sigma)=\frac{4}{3} \pi R^{3} \alpha \rho g
$$

即

$$
\frac{\beta-\alpha}{\alpha}=\frac{2 R^{4} \rho g}{3 \sigma_{0}\left(R^{2}-h^{2}\right)}
$$

【图10】同一液体的两个球形膜碰在一起后，形成如热图4-10-1所示的对称连体膜。连体膜的两个球面（实际上是两个超过半球面的部分球面）的半径均为 $R$ ，中间相连的圆膜的半径为 $r$ ，圆膜边缘用一匀质细线围住。已知液体的表面张力系数为 $\sigma$ ，不计重力。试求细线内的张力 $T$.
![img-325.jpeg](img-325.jpeg)

热图 4-10-1
![img-326.jpeg](img-326.jpeg)

热图 4-10-2
![img-327.jpeg](img-327.jpeg)

热图 4-10-3

【分析】细线呈圆环形，细线所受的两个球形液膜的表面张力左右对称，合力背离圆心向外，细线所受圆形连体液膜的表面张力指向圆心。所有这些表面张力的合力应与细线内的张力平衡，由此可求出细线内的张力 $T$ 。另外，应注意液膜都有两个表面，求解计算表面张力时请勿遗漏 2倍的因子。
【解】如热图 4-10-2，在细线上任取 $r \mathrm{~d} \phi$ —小段，它在热图 4-10-2 中用一点表示，该线元受到三个表面张力的作用，它们的方向已在热图 4-10-2 中标明，它们的大小相同，均为

$$
\mathrm{d} f=2[\sigma(r \mathrm{~d} \phi)]
$$

三个 $\mathrm{d} f$ 的合力为 $\mathrm{d} \boldsymbol{F}$ ，其方向沿圆形液膜的径向向外，如热图4-10-3所示，其大小为

$$
\mathrm{d} F=2 \mathrm{~d} f \cos \alpha-\mathrm{d} f=(2 \cos \alpha-1) \mathrm{d} f
$$

其中

$$
\cos \alpha=\frac{\sqrt{R^{2}-r^{2}}}{R}
$$

故

$$
\mathrm{d} F=2 \sigma \frac{r}{R}\left(2 \sqrt{R^{2}-r^{2}}-R\right) \mathrm{d} \phi
$$

因圆形细线内还有张力 $T$ 的作用，线元 $r \mathrm{~d} \phi$ 所受全部作用力如热图 4-10-3所示，平衡时，有

$$
2 T \sin \frac{\mathrm{~d} \phi}{2}=\mathrm{d} F
$$

由以上两式，得

$$
T=\frac{\mathrm{d} F}{\mathrm{~d} \phi}=2 \sigma \frac{r}{R}\left(2 \sqrt{R^{2}-r^{2}}-R\right)
$$

讨论、以上解答只适用于

$$
2 \sqrt{R^{2}-r^{2}} \geqslant R
$$

即只适用于

$$
r \leqslant \frac{\sqrt{3}}{2} R
$$

如果 $r>\frac{\sqrt{3}}{2} R$ ，则 $\mathrm{d} F$ 反向，而柔软细线中不可能形成与此 $\mathrm{d} F$ 平衡的挤压力，故细线将向连体圆形液膜内移动。一旦细线离开了连体圆形液膜的边缘，它所受液体的表面张力便处处平衡，于是细线内不存在张力，即 $T=0$ 。

【题11】将一竖直无限大平板部分地浸人与其有润湿作用的液体之中，两者之间的接触角为 $\theta$ ，液体密度为 $\rho$ ，表面张力系数为 $\alpha$ 。试求液体沿此板上升的高度。
【分析】如图，取 $x$ 轴表示水平液面， $y$ 轴表示竖直无限大平板。液体因与平板有润湿作用而上升形成的柱形曲面与 $x y$ 平面相交的曲线用 $y$ $(x)$ 表示. $y(x)$ 曲线与 $y$ 轴交点的坐标，就是所求的上升高度 $h . Q(x$ ， $y$ )是 $y(x)$ 曲线上的任意一点.

液体沿平板上升的原因是表面张力。平衡时，液体内靠近 $Q$ 点的压强应为大气压强 $p_{0}$ 与表面张力之和，它又等于 $p_{0}$ 与高为 $y$ 的液柱重量之差。因此，关键在于表面张力的计算。

Q 点的表面张力为 $\alpha\left(\frac{1}{R_{1}}+\frac{1}{R_{2}}\right), R_{1}$ 和 $R_{2}$ 是液面的两个主曲率半
![img-328.jpeg](img-328.jpeg)

热图 4-11-1

径，适当选取两个正交截面，则 $R_{1}$ 和 $R_{2}$ 可知，问题可解。

总之，本题在物理上无非是静力平衡，主要用到柱形曲面曲率半径的表达式，应注意记取。
【解】 如图，设液体内侧靠近 $Q$ 点的压强为 $p_{Q}$ ，则

$$
p_{Q}=p_{0}+\alpha\left(\frac{1}{R_{1}}+\frac{1}{R_{2}}\right)
$$

式中 $R_{1}$ 和 $R_{2}$ 是液面在 $Q$ 点的两个主曲率半径， $p_{0}$ 是大气压强，亦即水平液面的内侧压强，故又有

$$
p_{Q}=p_{0}-\rho Q y
$$

取第一正交截图为 $x y$ 平面，它与柱形液面的交线为 $y(x)$ ，则在 $Q$ 点的第一曲率半径 $R_{1}$为

$$
\left|R_{1}\right|=\left|\frac{\left(1+y^{\prime 2}\right)^{3 / 2}}{y^{\prime \prime}}\right|
$$

式中 $y^{\prime}=\frac{\mathrm{d} y}{\mathrm{~d} x}, y^{\prime \prime}=\frac{\mathrm{d}^{2} y}{\mathrm{~d} x^{2}}$ 。如图， $y^{\prime \prime}>0$ ，若规定曲率中心在液体内侧（即液面向空气凸出）时， $R_{1}$ 取为正；曲率中心在液体外侧（即液面是凹的）时， $R_{1}$ 取为负。则如图， $R_{1}$ 应为负，于是有

$$
R_{1}=-\frac{\left(1+y^{\prime 2}\right)^{3 / 2}}{y^{\prime \prime}}
$$

取第二正交截面为通过法线 $Q N$ (如图, $Q N$ 在 $x y$ 平面内, 通过 $Q$ 点且与 $y(x)$ 曲线垂直)且与 $x y$ 平面垂直的平面, 则它与液面的交线就是通过 $Q$ 点且与 $x y$ 平面垂直的直线. 因此, $Q$ 点的第二曲率半径为

$$
R_{2}=\infty
$$

(1)、(2)、(3)、(4)式联立, 得

$$
\frac{\partial \xi}{\partial} y=\frac{y^{\prime \prime}}{\left(1+y^{\prime 2}\right)^{3 / 2}}
$$

因

$$
y^{\prime \prime}=\frac{\mathrm{d} y^{\prime}}{\mathrm{d} x}=\frac{\mathrm{d} y^{\prime}}{\mathrm{d} y} \frac{\mathrm{~d} y}{\mathrm{~d} x}=y^{\prime} \frac{\mathrm{d} y^{\prime}}{\mathrm{d} y}
$$

代入(5)式, 得

$$
\frac{\partial \xi}{\partial} y \mathrm{~d} y=\frac{y^{\prime} \mathrm{d} y^{\prime}}{\left(1+y^{\prime 2}\right)^{3 / 2}}
$$

因在 $y=0$ 处, $y^{\prime}=0$ (水平液面), 积分, 得

$$
\int_{0}^{y} \frac{\partial \xi}{\partial} y \mathrm{~d} y=\int_{0}^{y^{\prime}} \frac{y^{\prime} \mathrm{d} y^{\prime}}{\left(1+y^{\prime 2}\right)^{3 / 2}}
$$

得

$$
\frac{\partial \xi}{2 \sigma} y^{2}=1-\frac{1}{\sqrt{1+y^{\prime 2}}}
$$

因在 $x=0$ 处, $y=h, y^{\prime}=-\cot \theta$, 代入上式, 得

$$
h=\sqrt{\frac{2 \sigma}{\beta \delta}(1-\sin \theta)}
$$

【题 12】 由同种原子组成的均匀-维晶体中，只有最相邻的原子之间有相互作用（余皆可略），作用势为 $V(x)=-\frac{A}{x^{6}}+\frac{B}{x^{13}}$, 其中 $x$ 是相邻原子的间距, $A$ 和 $B$ 是两个常量。

1. 试求平衡时原子间的平均距离.
2. 当此晶体在平衡位置附近的相对形变为单位值时, 试求其弹性偏强系数 (用 $A$ 和 $B$ 表示).
3. 将晶体慢慢拉伸, 试问当形变为多大时, 晶体会被拉断.
【分析】 由作用势 $V(x)$ 可得出相邻原子间的作用力随间距 $x$ 的变化, 因为 $f(x)=-\frac{\mathrm{d} V}{\mathrm{~d} x}$, 平衡时, $f\left(x_{0}\right)=0$, 于是原子间平均距离 $x_{0}$ 可求.
$f(x)$ 曲线表明, 只在 $x_{0}$ 附近虎克定律近似成立. 单位长度弹性偪强系数是在 $x_{0}$ 附近产生单位相对形变所需的作用力.
$f(x)$ 曲线表明, 相邻原子间的最大吸引力为 $f_{m}$, 相应的间距为 $x_{m}$. 当相对形变为 $\frac{x_{m}-x_{0}}{x_{0}}$时, 晶体会被拉断.
【解】1. 设平衡时原子间的平均距离为 $x_{0}$, 则

$$
\left(\frac{\mathrm{d} V}{\mathrm{~d} x}\right)_{x=x_{0}}=0
$$

即

$$
6 A x_{0}{ }^{7}=12 B x_{0}^{-13}
$$

故

$$
x_{0}=\left(\frac{2 B}{A}\right)^{\frac{1}{6}}
$$

2. 相邻原子间的作用力为

$$
f(x)=-\frac{\mathrm{d} V}{\mathrm{~d} x}=\frac{6 A}{x^{7}}-\frac{12 B}{x^{13}}
$$

![img-329.jpeg](img-329.jpeg)

扬图4-12-1
$f(x)$ 曲线如图所示， $f\left(x_{0}\right)=0, x_{0}$ 是平衡位置，在 $x_{0}$ 附近的一段曲线可近似看作直线，这是虎克定律成立的区域。若相邻原子的间距从平衡位置 $x_{0}$ 偏离小量 $\Delta x$ ，则作用力为

$$
\begin{aligned}
f & =\frac{6 A}{\left(x_{0}+\Delta x\right)^{3}}-\frac{12 B}{\left(x_{0}+\Delta x\right)^{13}} \\
& =\frac{6 A}{x_{0}^{7}}\left(1+\frac{\Delta x}{x_{0}}\right)^{-7}-\frac{12 B}{x_{0}^{13}}\left(1+\frac{\Delta x}{x_{0}}\right)^{-13} \approx \frac{6 A}{x_{0}^{7}}\left(1-7 \frac{\Delta x}{x_{0}}\right)-\frac{12 B}{x_{0}^{13}}\left(1-13 \frac{\Delta x}{x_{0}}\right)
\end{aligned}
$$

把（1）式代入，得

$$
f=\frac{6 A}{x_{0}^{7}}(-7+13) \frac{\Delta x}{x_{0}}=\frac{36 A}{x_{0}^{7}} \cdot \frac{\Delta x}{x_{0}}
$$

式中 $\frac{\Delta x}{x_{0}}$ 为相对形变. 因此, 单位长度的弹性系数为

$$
k=\frac{36 A}{x_{0}^{7}}
$$

把（2）式代入，得

$$
k=\frac{18 A^{2}}{B}\left(\frac{A}{2 B}\right)^{\frac{1}{6}}
$$

3. 由 $f(x)$ 曲线可知, 当 $x=x_{m}$ 时, $f(x)=f_{m}$ 为极大吸引力. 即当 $x<x_{0}$ 时, $f>0$ 为排斥力；当 $x>x_{0}$ 时， $f<0$ 为吸引力；当 $x=x_{m}$ 时， $f(x)=f_{m}$ 为极值。若外力（拉力）等于 $f_{m}$ ，则晶体将不断拉长，直至断裂。因此，晶体会被拉断时的相对形变为 $\frac{x_{m}-x_{0}}{x_{0}}$ 。因 $x_{m}$ 满足

$$
\left(\frac{\mathrm{d} f}{\mathrm{~d} x}\right)_{x=x_{m}}=0
$$

由（3）式，得

$$
-42 A x_{m}^{-8}+12 \times 13 B x_{m}^{-14}=0
$$

故

$$
x_{m}=\left(\frac{26 B}{7 A}\right)^{\frac{1}{6}}
$$

晶体会被拉断的相对形变为

$$
\frac{x_{m}-x_{0}}{x_{0}}=\frac{x_{m}}{x_{0}}-1=\left(\frac{13}{7}\right)^{\frac{1}{6}}-1=0.11
$$

【题 13】 NaCl 晶体在平衡态时 $\mathrm{Na}^{+}$和最邻近的 $\mathrm{Cl}^{-}$之间的距离为 $r_{0}=2.81 \times 10^{-10} \mathrm{~m}$ ，绝热压缩系数为 $k_{s}=-\frac{1}{V}\left(\frac{\mathrm{~d} V}{\mathrm{~d} p}\right)_{s}=3.3 \times 10^{-11} \mathrm{~m}^{2} / \mathrm{N}$ ，马德隆常量为 $\alpha=1.75$ 。试求平衡态时 1 mol NaCl晶体的结合能 $E_{\mathrm{P} 0}$ 。
【分析】结合能是把单个分子或原子结合成晶体时释放的能量，亦即把晶体拆散成单个分子或原子所需作的功。由 $N$ 个分子组成的 NaCl 晶体的结合能包括离子间的库仑能和由排斥力引起的能量两项，即 $E_{\mathrm{P}}=N\left(\frac{a_{m}}{r^{m}}-\frac{\alpha e^{2}}{4 \pi \varepsilon_{0} r}\right)$ ，式中 $r$ 是相邻离子的间距。可见为了求结合能，需要确定 $a_{m}$ 和 $m$ 两个常量。

平衡态时结合能为极小的条件即为 $\left(\frac{\mathrm{d} E_{\mathrm{P}}}{\mathrm{d} r}\right)_{r=r_{0}}=0$ ，它提供了 $a_{m}$ 与 $m$ 的一个关系，可将 $a_{m}$用 $m$ 来表示。

已知的绝热压缩系数提供了另一个关系。在绝热条件下，晶体结合能（近似等于内能）的变化等于外界所作的功，由此可得出平衡态的 $k_{s}$ 与 $m$ 的关系。

于是问题可解。
【解】由 $N \gg 1$ 个分子组成的 NaCl 晶体的结合能为

$$
E_{\mathrm{P}}=N\left(\frac{a_{m}}{r^{m}}-\frac{\alpha e^{2}}{4 \pi \varepsilon_{0} r}\right)
$$

在平衡态 $r=r_{0}$ ，对 1 mol 晶体 $N=N_{A}$ （阿伏伽德罗常量）。又马德隆常量 $\alpha$ 及电子电量 $e$ 均已知，故问题在于确定 $a_{m}$ 和 $m$ 。

在平衡态， $E_{\mathrm{P}}=E_{\mathrm{P} 0}$ 应为极小，需满足

$$
\left(\frac{\mathrm{d} E_{\mathrm{P}}}{\mathrm{~d} r}\right)_{r=r_{0}}=0
$$

把（1）式代入，得

$$
N\left(-\frac{m a_{m}}{r_{0}^{m+1}}+\frac{\alpha e^{2}}{4 \pi \varepsilon_{0} r_{0}^{2}}\right)=0
$$

故

$$
a_{m}=\frac{\alpha e^{2}}{4 \pi \varepsilon_{0} m} r_{0}^{m-1}
$$

于是，在平衡态， 1 mol NaCl 晶体的结合能为

$$
E_{\mathrm{P} 0}=N_{A}\left(\frac{a_{m}}{r^{m}}-\frac{\alpha e^{2}}{4 \pi \varepsilon_{0} r_{0}}\right)=\frac{N_{A} \alpha e^{2}}{4 \pi \varepsilon_{0} r_{0}}\left(\frac{1}{m}-1\right)
$$

通常， $E_{\mathrm{P}} \sim 10^{5} \mathrm{~J} / \mathrm{mol} ， E_{\mathrm{k}} \sim R T$ （室温） $-10^{3} \mathrm{~J} / \mathrm{mol}$ ，即 $E_{\mathrm{P}} \gg E_{\mathrm{k}}$ ，故晶体的总能量（内能）近似等于其结合能

$$
E=E_{\mathrm{P}}+E_{\mathrm{k}} \approx E_{\mathrm{P}}
$$

在绝热过程中

$$
\mathrm{d} E_{\mathrm{P}}=\mathrm{d} E=-p \mathrm{~d} V
$$

或

$$
p=-\frac{\mathrm{d} E_{\mathrm{P}}}{\mathrm{d} V}
$$

因而绝热压缩系数 $k_{r}$ 可表为

$$
\frac{1}{k_{s}}=-V \frac{\mathrm{~d} p}{\mathrm{~d} V}=V \frac{\mathrm{~d}^{2} E_{\mathrm{P}}}{\mathrm{d} V^{2}}
$$

式中

$$
\begin{aligned}
\frac{\mathrm{d}^{2} E_{\mathrm{P}}}{\mathrm{~d} V^{2}} & =\frac{\mathrm{d}}{\mathrm{~d} V}\left(\frac{\mathrm{~d} E_{\mathrm{P}}}{\mathrm{~d} r} \frac{\mathrm{~d} r}{\mathrm{~d} V}\right)=\frac{\mathrm{d}}{\mathrm{~d} r}\left(\frac{\mathrm{~d} E_{\mathrm{P}}}{\mathrm{~d} r} \frac{\mathrm{~d} r}{\mathrm{~d} V}\right)\left(\frac{\mathrm{d} r}{\mathrm{~d} V}\right) \\
& =\left(\frac{\mathrm{d}^{2} E_{\mathrm{P}}}{\mathrm{~d} r^{2}} \frac{\mathrm{~d} r}{\mathrm{~d} V}+\frac{\mathrm{d} E_{\mathrm{P}}}{\mathrm{~d} r} \frac{\mathrm{~d}^{2} r}{\mathrm{~d} r \mathrm{~d} V}\right)\left(\frac{\mathrm{d} r}{\mathrm{~d} V}\right)
\end{aligned}
$$

在平衡态，因

$$
\left(\frac{\mathrm{d} E_{\mathrm{P}}}{\mathrm{~d} r}\right)_{r=r_{0}}=0
$$

故

$$
\left(\frac{\mathrm{d}^{2} E_{\mathrm{P}}}{\mathrm{d} V^{2}}\right)_{r=r_{0}}=\left(\frac{\mathrm{d} r}{\mathrm{~d} V}\right)^{2}\left(\frac{\mathrm{~d}^{2} E_{\mathrm{P}}}{\mathrm{d} r^{2}}\right)_{r=r_{0}}
$$

代入(4)式,得

$$
\left(\frac{1}{k_{s}}\right)_{r=r_{0}}=V\left(\frac{\mathrm{~d} r}{\mathrm{~d} V}\right)^{2}\left(\frac{\mathrm{~d}^{2} E_{\mathrm{P}}}{\mathrm{d} r^{2}}\right)_{r=r_{0}}
$$

对于简单立方结构的 NaCl 晶体，其体积为

$$
V=2 N r^{3}
$$

故

$$
\frac{\mathrm{d} r}{\mathrm{~d} V}=\frac{1}{6 N r^{2}}
$$

代入(5)式,得

$$
\left(\frac{1}{k_{s}}\right)_{r=r_{0}}=\left(2 N r_{0}^{3}\right)\left(\frac{1}{6 N r_{0}^{2}}\right)^{2}\left(\frac{\mathrm{~d}^{2} E_{\mathrm{P}}}{\mathrm{~d} r^{2}}\right)_{r=r_{0}}=\frac{1}{18 N r_{0}}\left(\frac{\mathrm{~d}^{2} E_{\mathrm{P}}}{\mathrm{d} r^{2}}\right)_{r=r_{0}}
$$

由（1）、(2)式得，

$$
\left(\frac{\mathrm{d}^{2} E_{\mathrm{P}}}{\mathrm{~d} r^{2}}\right)_{r=r_{0}}=N\left[\frac{m(m+1) a_{m}}{r_{0}^{m+2}}-\frac{2 \alpha e^{2}}{4 \pi \varepsilon_{0} r_{0}^{3}}\right]=\frac{N(m-1) \alpha e^{2}}{4 \pi \varepsilon_{0} r_{0}^{3}}
$$

代入(6)式,得

$$
\left(\frac{1}{k_{s}}\right)_{r=r_{0}}=\frac{(m-1) \alpha e^{2}}{72 \pi \varepsilon_{0} r_{0}^{4}}
$$

把已知的各种数据代入上式,得

$$
m=9.4
$$

把 $m$ 代入(3)式，得

$$
E_{\mathrm{P} 0}=\frac{N_{A} \sigma e^{2}}{4 \pi \varepsilon_{0} r_{0}}\left(\frac{1}{m}-1\right)=-\frac{8.4}{9.4}\left(\frac{N_{A} \sigma e^{2}}{4 \pi \varepsilon_{0} r_{0}}\right)=-7.5 \times 10^{5} \mathrm{~J} / \mathrm{mol}
$$

【题 14】质量为 2.0 kg ，温度为 $-13^{\circ} \mathrm{C}$ ，体积为 $0.19 \mathrm{~m}^{3}$ 的氟利昂（其分子量为 121 ），在保持温度不变的条件下被压缩，体积减小为 $0.10 \mathrm{~m}^{3}$ 。试问在此过程中有多少千克的氟利昂被液化。已知在 $-13^{\circ} \mathrm{C}$ 时，液态氟利昂的密度为 $\rho=1.44 \times 10^{3} \mathrm{~kg} / \mathrm{m}^{3}$ ，饱和蒸汽压为 $p_{\text {鱼 }}=2.08 \times 10^{5} \mathrm{~Pa}$ ，又氟利昂的饱和蒸汽可近似看作理想气体。
【分析】 本题是氟利昂的等温压缩，使之部分液化，过程中氟利昂的饱和蒸汽可视为理想气体。利用理想气体的状态方程及题设已知条件，不难解出压缩后液态氟利昂的质量 $M_{1}$ 。问题在于，压缩前是否已有部分液态氟利昂，若有，应从 $M_{1}$ 中减去，若无， $M_{1}$ 全部是在压缩过程中生成的。为此，需计算压缩前气态氟利昂的压强，若小于饱和蒸汽压，则压缩前并无液态氟利昂。
【解】 设氟利昂经等温压缩后，液态部分的质量为 $M_{1}$ ，体积为 $V_{1}$ ，气态部分的质量为 $M_{2}$ ，体积为 $V_{2}$ ，压强当然是饱和蒸汽压 $p_{\text {鱼 }}$ 。因氟利昂饱和蒸汽可视为理想气体，故

$$
p_{\text {鱼 }} V_{2}=\frac{M_{2}}{\mu} R T
$$

式中 $\mu=121 \times 10^{-3} \mathrm{~kg} / \mathrm{mol}$ 是氟利昂的摩尔质量， $T=273-13=260 \mathrm{~K}$ 是它的温度、又

$$
V_{1}+V_{2}=V, \quad M_{1}+M_{2}=M, \quad M_{1}=\rho V_{1}
$$

式中 $V=0.10 \mathrm{~m}^{3}$ 为压缩后氟利昂的体积， $M=2.0 \mathrm{~kg}$ 为氟利昂的质量。
由以上四式，消去 $V_{1}, V_{2}, M_{2}$ ，解出压缩后液态氟利昂的质量为

$$
M_{1}=\frac{M \frac{R T}{\mu}-p_{\text {鱼 }} V}{\frac{R T}{\mu}-\frac{p_{\text {鱼 }}}{\rho}}=0.84 \mathrm{~kg}
$$

设压缩前氟利昂全部处于气态，其体积为 $V_{i}=0.19 \mathrm{~m}^{3}$ ，其压强为 $p_{i}$ ，由状态方程

$$
p_{i} V_{i}=\frac{M}{\mu} R T
$$

故

$$
p_{i}=\frac{M}{\mu} \frac{R T}{V_{i}}=1.87 \times 10^{5} \mathrm{~Pa}
$$

因氟利昂饱和蒸汽压（在 $-13^{\circ} \mathrm{C}$ 时）为 $p_{\text {鱼 }}=2.08 \times 10^{5} \mathrm{~Pa}$ ，故 $p_{i}<p_{\text {鱼 }}$ 。可见，压缩前氟利昂确实全部处于气态，并未部分液化，上述假设成立。因此，上面解出的 $M_{1}=0.84 \mathrm{~kg}$ 液态氟利昂全部是在等温压缩过程中被液化的。

【题 15】 液体 $A, B$ 互不相溶，它们的饱和蒸汽压 $p$ 与温度 $T$ （绝对温标）的关系为

$$
\ln \frac{p_{i}}{p_{0}}=\frac{a_{i}}{T}+b_{i}, i=A \text { 或 } B
$$

其中 $p_{0}$ 是标准大气压， $a 、 b$ 是由液体本身性质确定的常量。测出两个温度的 $\frac{p_{i}}{p_{0}}$ 值如下：

$$
\begin{aligned}
& 40 \mathrm{C} \cdot \frac{p_{\mathrm{A}}}{p_{0}}=0.284, \frac{p_{\mathrm{B}}}{p_{0}}=0.07278 \\
& 90 \mathrm{C} \cdot \frac{p_{\mathrm{A}}}{p_{0}}=1.476, \frac{p_{\mathrm{B}}}{p_{0}}=0.6918
\end{aligned}
$$

1. 在外部压强为 $p_{0}$ 时，试分别确定 $A$ 和 $B$ 的沸点。
2. 现将 100 g 液体 $A$ 和 100 g 液体 $B$ 先后注入容器内，并在 $B$ 的表面覆盖上一藩层非挥发性液体 $C, C$ 与 $A$ 和 $B$ 互不相溶， $C$ 的作用是防止 $B$ 的自由蒸发，如热图4-15-1，各液层都不湤，因此液体内因重力产生的附加压强均可忽略。已知液体 $A$ 和 $B$ 的分子质量之比为 $\gamma=\frac{p_{A}}{\mu_{B}}$ $=8$.

缓慢而持续地加热容器，液体的温度 $t$ （摄氏温标）随时间 $\tau$ 的变化关系如热图4-15-2所示。试求出热图 4-15-2 中的温度 $t_{1}$ 和 $t_{2}$ (精确到 1 C )，以及在 $\tau_{1}$ 时刻液体 A 和液体 B 的质量（精确到 0.1 g ）。
![img-330.jpeg](img-330.jpeg)

热图4 $15-1$
![img-331.jpeg](img-331.jpeg)

热图 $4-15-2$

设 A 和 B 的蒸汽均可看作理想气体，因而服从道尔顿分压定律。
【分析】沸点是液体沸腾的温度，也是气、液两相平衡共存的温度、液体沸腾的条件是饱和蒸汽压和外界压强相等。饱和蒸汽压与液体的性质有关，还与温度有强烈的依赖关系。由给定的 $p(T)$ 关系及数据，可以确定 $p(T)$ 中的待定常数 $a, b$ ，进而求出 A 和 B 的沸点。此即第 1 问。

第2 问的 $t-\tau$ 图（热图4-15-2）给出了加热过程中两种液体共同的温度 $t$ 随时间 $\tau$ 的变化。开始 $t$ 线性地增加，在液体 $\mathrm{A} 、 \mathrm{~B}$ 内部形成的气泡在 $\mathrm{A} 、 \mathrm{~B}$ 交界处混合，混合气泡内的压强等于 A.B 的饱和蒸汽压之和 $\left(p_{\mathrm{A}}+p_{\mathrm{B}}\right)$ （道尔顿分压定律）。在温度不够高， $\left(p_{\mathrm{A}}+p_{\mathrm{B}}\right)$ 小于外界大气压强 $p_{0}$ 时，不沸腾。当温度升高到 $t_{1}$ ，使 $\left(p_{\mathrm{A}}+p_{\mathrm{B}}\right)=p_{0}$ 时，在 $\mathrm{A} 、 \mathrm{~B}$ 交界处，两种气体将共同沸腾，由此 $t_{1}$ 可求。显然， $t_{1}$ 应低于 $\mathrm{A} 、 \mathrm{~B}$ 各自单独沸腾时的沸点。

达到温度 $t_{1}$ 后，继续加热，两种液体不断沸腾，温度不变。经过一段时间后，A、B 中必有一种液体首先全部沸腾掉，只剩下另一种液体。在 $t_{1}$ 温度下，剩下液体的饱和蒸汽压将小于 $p_{0}$ ，沸腾停止。于是随着加热，温度再次线性地上升。当温度达到了剩下液体的沸点（即该液体的饱和蒸汽压达到 $p_{0}$ 时），再次沸腾，温度不再上升，因此， $t-\tau$ 曲线中第二段平行直线的温度 $t_{2}$ 必为液体 A 或液体 B 单独存在时的沸点。

在 $t_{1}$ 温度，两种液体在交界处共同沸腾。在由两种液体的饱和蒸汽混合而成的气泡内，A、 B蒸汽的体积相同，温度相同，压强分别是各自的饱和蒸汽压 $p_{\mathrm{A}}$ 和 $p_{\mathrm{B}}$ 。利用理想气体状态方程及题目给定的 $\frac{p_{\mathrm{A}}}{\mu_{\mathrm{B}}}$ 值，可确定气泡内两种蒸汽的密度比成质量比。从而得出在共同沸腾过程中，两种液体损失的质量之比，这样，当其一全部涉腾殆尽时，另一还剩下多少即可求得，当温度从 $t_{1}$ 线性地增加到 $t_{2}$ 时，剩下的液体还未涉腾，其质量不变。
【解】 1. 沸点是

$$
\frac{p_{i}}{p_{0}}=1
$$

时的温度，表为 $T_{b}$ 或 $t_{b}$ 。由题设

$$
\ln \frac{p_{i}}{p_{0}}=\frac{a_{i}}{T}+b_{i}, i=\mathrm{A} \text { 或 B }
$$

当

$$
\ln \frac{p_{i}}{p_{0}}=\ln 1=0
$$

时, 有

$$
T_{b i}=-\frac{a_{i}}{b_{i}}
$$

由题目所给数据，对于液体 A ，有

$$
\left\{\begin{array}{l}
\ln 0.284=\frac{a_{\mathrm{A}}}{273.15+40}+b_{\mathrm{A}} \\
\ln 1.476=\frac{a_{\mathrm{A}}}{273.15+90}+b_{\mathrm{A}}
\end{array}\right\}
$$

解出

$$
\left\{\begin{array}{l}
a_{\mathrm{A}}=-3748.49 \mathrm{~K} \\
b_{\mathrm{A}}=10.711
\end{array}\right\}
$$

对于液体 $B$, 有

$$
\left\{\begin{array}{l}
\ln 0.07278=\frac{a_{\mathrm{B}}}{273.15+40}+b_{\mathrm{B}} \\
\ln 0.1918=\frac{a_{\mathrm{B}}}{273.15+90}+b_{\mathrm{B}}
\end{array}\right\}
$$

解出

$$
\left\{\begin{array}{l}
a_{\mathrm{B}}=-5121.64 \mathrm{~K} \\
b_{\mathrm{B}}=13.735
\end{array}\right\}
$$

把（2）、（3）式代入（1）式，得 A、B 的沸点为

$$
\begin{gathered}
T_{b \mathrm{~A}}=349.95 \mathrm{~K}, \text { 或 } t_{b \mathrm{~A}}=77 \mathrm{C} \\
T_{b \mathrm{~B}}=372.89 \mathrm{~K}, \text { 或 } t_{b \mathrm{~B}}=99.74 \mathrm{C} \approx 100 \mathrm{C}
\end{gathered}
$$

2. 温度 $t_{1}$ 是两种液体 A 和 B 在交界处共同涉腾的温度，共同涉腾的条件是，在两种蒸汽混合的气泡内，A、B 的泡和蒸汽压之和等于大气压强，即

$$
p_{\mathrm{A}}+p_{\mathrm{B}}=p_{0}
$$

或

$$
\frac{p_{\mathrm{A}}+p_{\mathrm{B}}}{p_{0}} \approx 1
$$

由题设

$$
\ln \frac{p_{i}}{p_{0}}=\frac{a_{i}}{T}+b_{i}
$$

得

$$
\frac{p_{i}}{p_{0}}=\mathrm{e}^{\frac{a_{i}}{T}+b_{i}}
$$

把（5）式代入（4）式，得

$$
y\left(t_{1}\right)=\exp \left(\frac{a_{\mathrm{A}}}{t_{0}+t_{1}}+b_{\mathrm{A}}\right)+\exp \left(\frac{a_{\mathrm{B}}}{t_{0}+t_{1}}+b_{\mathrm{B}}\right)=1
$$

式中 $t_{0} \approx 273.15 \mathrm{C}$ 。上式是 $t_{1}$ 的超越方程，难以求解析解，可以求数值解。办法是取不同的 $t_{1}$ ，计算相应的 $y\left(t_{1}\right)$ 值。根据 $y\left(t_{1}\right)$ 与 1 的偏离，调整 $t_{1}$ 的取值，从 $y\left(t_{1}\right)$ 大于 1 和小于 1 两头逼近，即可求出满足 $y\left(t_{1}\right)=1$ 的 $t_{1}$ 值。

| $t_{1} \mathrm{C}$ |  | $y\left(t_{1}\right)$ |
| :--: | :--: | :--: |
| $40 \mathrm{C} \quad 0.356<1$ | （利用题目给的数据） |  |
| $90 \mathrm{C} \quad 2.168>1$ | （利用题目给的数据） |  |
| $59 \mathrm{C} \quad 0.749<1$ |  |  |
| $70 \mathrm{C} \quad 1.113>1$ |  |  |
| $66 \mathrm{C} \quad 0.966<1$ |  |  |
| $67 \mathrm{C} \quad 1.001>1$ |  |  |
| $66.5 \mathrm{C} \quad 0.983<1$ |  |  |

因此，由上表，在题目要求的精度范围内，可取

$$
t_{1}=67 \mathrm{C}
$$

在 $t_{1}$ 温度， A 和 B 液体在交界处共同沸腾，取由 A 和 B 的饱和蒸汽混合而成的任一气泡，其体积为 $V$ ，温度为 $T_{1}$ ， A 和 B 饱和蒸汽的压强分别为 $p_{\mathrm{A}}$ 和 $p_{\mathrm{B}}$ ，质量分别为 $m_{\mathrm{A}}$ 和 $m_{\mathrm{B}}$ ，由理想气体状态方程

$$
\left\{\begin{array}{l}
p_{\mathrm{A}} V=\frac{m_{\mathrm{A}}}{\mu_{\mathrm{A}}} R T_{1} \\
p_{\mathrm{B}} V=\frac{m_{\mathrm{B}}}{\mu_{\mathrm{B}}} R T_{1}
\end{array}\right\}
$$

相除，并利用题设的

$$
\gamma=\frac{\mu_{\mathrm{A}}}{\mu_{\mathrm{B}}}=8
$$

得

$$
\frac{m_{\mathrm{A}}}{m_{\mathrm{B}}}=\frac{p_{\mathrm{A}} \mu_{\mathrm{A}}}{p_{\mathrm{B}} \mu_{\mathrm{B}}}=8 \frac{p_{\mathrm{A}}}{p_{\mathrm{B}}}
$$

式中 $p_{\mathrm{A}}=p_{\mathrm{A}}\left(t_{1}\right), p_{\mathrm{B}}=p_{\mathrm{B}}\left(t_{1}\right)$ ，分别是温度 $t_{1}$ 时 A 和 B 的饱和蒸汽压，由（5）式，并利用（2）、 （3）式，得

$$
p_{\mathrm{A}}=p_{0} \exp \left(\frac{a_{\mathrm{A}}}{273.15+t_{1}}+b_{\mathrm{A}}\right)
$$

$$
\begin{aligned}
& =p_{0} \exp \left(-\frac{3748.49}{273.15+67}+10.711\right)=0.734 p_{0} \\
p_{\mathrm{B}} & =p_{0} \exp \left(\frac{a_{\mathrm{B}}}{273.15+t_{1}}+b_{\mathrm{B}}\right) \\
& =p_{0} \exp \left(-\frac{5121.64}{273.15+67}+13.735\right)=0.267 p_{0}
\end{aligned}
$$

因此，

$$
\frac{m_{\mathrm{A}}}{m_{\mathrm{B}}}=22.0
$$

上式表明，在温度为 $t_{1}$ 时， A 和 B 液体在交界面上共同沸腾，液体 A 损失的质量为液体 B 的 22倍，因液体 A 和 B 都是 100 g ，故当液体 A 因沸腾而损失殆尽时，液体 B 只损失了

$$
\frac{100}{22} \mathrm{~g}=4.5 \mathrm{~g}
$$

因此，在温度从 $t_{1}$ 线性地增加到 $t_{2}$ 过程中的任一时刻 $\tau_{1}$ ，液体 A 的质量为零，液体 B 的质量为

$$
(100-4.5) \mathrm{g}=95.5 \mathrm{~g}
$$

$t_{2}$ 是液体 B 单独存在时的沸点，已在第 1 问中求出，为

$$
t_{2}=t_{\mathrm{BB}}=100 \mathrm{C}
$$

【本题是1989年第20届IPhO（国际中学生物理奥林匹克竞赛）试题．】
【题 16】 在一密闭容器内有冰、水和水蒸汽各 1 g ，三态共存达到平衡，系统的温度为 $t=0.01$ $\mathrm{C}$ ，压强为 $p=4.58 \mathrm{mmHg}$ ，容器内别无其他物质。现在保持容器体积不变的条件下，对此系统缓慢加热，输入热量 $Q=0.255 \mathrm{~kJ}$ 。试估算此系统再次达到平衡后，冰、水和水蒸汽各自的质量。已知冰的升华热 $L_{\text {升 }}=2.83 \mathrm{~kJ} / \mathrm{g}$ ，水的汽化热 $L_{\text {气 }}=2.49 \mathrm{~kJ} / \mathrm{g}$ 。
【分析】首先，大致判断一下经缓慢加热系统再次达到平衡后的状况。由 $L_{\text {缓 }}=L_{\text {吾 }}-L_{\text {气 }}=$ $0.34 \mathrm{~kJ} / \mathrm{g}$ ，得出冰熔解热 $L_{\text {㭗 }}$ ，因冰原有 1 g ，输入热量 $Q=0.255 \mathrm{~kJ}$ ，可见冰不致全部熔化。换言之，在缓慢加热过程中，系统将始终保持三态共存，并再次达到平衡。因此，在此过程中，出现的是物态的变化，可以认为系统的温度和压强均保持不变。

利用理想气体状态方程算出初态水蒸汽的密度，并把它与已知的水和冰的密度相比较（注意，初态时冰、水、水蒸汽的质量相同），可知初态的容器内绝大部分体积被水蒸汽占据了。

由于缓慢加热过程中系统经历的是物态变化，温度和压强均不变，因此过程中水蒸汽的密度应不变。由于初态时水蒸汽已占据绝大部分体积，而过程中因水、冰增减导致的体积变化又可忽略不计，因此过程中水蒸汽的体积也应大致保持不变。于是，在过程中，水蒸汽的质量可认为没有变化，换言之，系统吸收的热量只能用于使冰熔化为水，不难求解。
【解】冰的熔解热 $L_{\text {㭗 }}$ 近似为

$$
L_{\text {㭗 }}=L_{\text {升 }}-L_{\text {气 }}=0.34 \mathrm{~kJ} / \mathrm{g}
$$

初态有 1 g 冰，全部熔解需吸热 0.34 kJ 。加热过程输入的热量只有 $Q=0.255 \mathrm{~kJ}$ ，不足使冰全部熔化。所以，在加热过程中，始终三态共存，出现的是物态变化。系统的 $t$ 和 $p$ 应保持不变。

由理想气体状态方程，初态水蒸汽的密度为

$$
\rho_{\kappa}=\frac{\mu \rho}{K T}
$$

式中 $\mu=18 \times 10^{-3} \mathrm{~kg} / \mathrm{mol}, p=4.58 \mathrm{mmHg}=610 \mathrm{~Pa}, T=273 \mathrm{~K}$, 代入, 得

$$
\rho_{\kappa}=5 \times 10^{-3} \mathrm{~kg} / \mathrm{m}^{3}
$$

同样条件下,水、冰的密度分别为

$$
\begin{aligned}
& \rho_{\mathrm{水}}=1 \times 10^{3} \mathrm{~kg} / \mathrm{m}^{3} \\
& \rho_{\mathrm{水}}=0.9 \times 10^{3} \mathrm{~kg} / \mathrm{m}^{3}
\end{aligned}
$$

可见， $\rho_{\mathrm{水}}$ 和 $\rho_{\mathrm{水}} \gg \rho_{\mathrm{r}}$ 。因初态水、冰、水蒸汽均为 1 g ，质量相同，故初态水蒸汽体积远大于水和冰的体积，几乎占据了全部容器。

在缓慢加热过程中，水蒸汽的温度和压强均不变，故其密度不变。同时因冰、水增减导致的体积变化可略，并且也不可能有相当多的水蒸汽转化为水或冰（这要放热），故水蒸汽体积不变，始终占据绝大部分容器。由此，在物态变化过程中，水蒸汽质量保持不变，为

$$
m_{\mathrm{r}}=1 \mathrm{~g}
$$

所以物态变化几乎就是冰熔化为水（吸热）。设终态冰、水质量分别为 $m_{\text {冰 }}$ 和 $m_{\text {水 }}$ ，则因

$$
m_{\mathrm{水}}+m_{\mathrm{水}}=2 \mathrm{~g}
$$

及

$$
Q=\left(1 \mathrm{~g}-m_{\mathrm{水}}\right) L_{\text {暞 }}
$$

得出

$$
m_{\mathrm{水}}=0.25 \mathrm{~g}, \quad m_{\mathrm{水}}=1.75 \mathrm{~g}
$$

【图17】地球深处 35 km 到 2900 km 之间的区域为固态地幔，地幔的主要成分是固态硅酸盐、设硅酸盐的熔解热为 $L_{m}$ ，其液态密度与固态密度之比为 $\alpha$ 。试求地幔中硅酸盐岩石的熔点 $T_{m}$随 $r$ 的变化率， $r$ 是岩石与地心的距离。

若已知地幔较上部位某处的 $T_{m}=1300 \mathrm{C}, \alpha=0.9, L_{m}=10^{5} \mathrm{cal} / \mathrm{kg}$ 。试估算从该处往地心深人 1000 m 后， $T_{m}$ 变化了多少？
【分析】晶体物质熔解时的温度叫熔点，它也是该物质固、液两相平衡共存的温度、固相物质在熔解过程中吸收的热量称为熔解热。克拉珀龙方程确定了两相平衡条件下压强与温度的关系，对于蒲、液相变，它确定了熔点随压强的变化关系。克拉珀龙方程是求解本题的根据。

在地幔中任取以地心为中心的一薄层固态硅酸盐，它在引力和上、下压强差的作用下达到平衡。随着向地心深入，重力加速度的变化使薄层所受引力发生了变化，从而导致其上、下压强差的变化。压强的变化引起了熔点的变化，其间的变化关系遵循克拉珀龙方程。
【解】在固态硅酸盐地幔中，以地心为中心，任取半径从 $r$ 到 $(r+\mathrm{d} r)$ 的一薄层，其底面积为 $S$ ，则该薄层在万有引力和上、下压强差的作用下达到平衡，即

$$
\left[p(r)-p(r+\mathrm{d} r)\right] S=\rho_{c}(S \mathrm{~d} r) g_{r}
$$

式中 $\rho_{c}$ 是固态硅酸盐的质量密度， $g_{r}$ 是离地心 $r$ 处的重力加速度。由万有引力定律

$$
g_{r}=G \frac{M_{r}}{r^{2}}
$$

式中 $M_{r}$ 是地球内部以 $r$ 为半径的那部分球的质量. 设地球质量均匀分布, 则

$$
M_{r}=\frac{M}{R^{3}} r^{3}
$$

式中 $M$ 和 $R$ 分别是地球的质量和半径. 把 $M_{r}$ 代入 $g_{r}$, 得

$$
g_{r}=G \frac{M}{R^{3}} r=g \frac{r}{R}
$$

式中 $g$ 是地球表面的重力加速度, $g=G \frac{M}{R^{2}}$, 把 $g_{r}$ 代入(1)式, 得

$$
\mathrm{d} p=-\rho_{s} g_{r} \mathrm{~d} r=-\rho_{s} g \frac{r}{R} \mathrm{~d} r
$$

克拉珀龙方程确定了熔点 $T_{m}$ 随压强 $p$ 的变化关系, 为

$$
\frac{\mathrm{d} T_{m}}{T_{m} \mathrm{~d} p}=\frac{v_{l}-v_{s}}{L_{m}}
$$

式中 $v_{l}$ 和 $v_{s}$ 分别是物质的液态比容和固态比容 (单位质量的体积), 即

$$
\left\{\begin{array}{l}
v_{l}=\frac{1}{\rho_{l}}=\frac{1}{\alpha \rho_{s}} \\
v_{s}=\frac{1}{\rho_{s}}
\end{array}\right\}
$$

式中 $\rho_{l}$ 为液态硅酸盐的密度. 把 $v_{l}$ 和 $v_{s}$ 代入 (3) 式, 得

$$
\frac{\mathrm{d} T_{m}}{T_{m} \mathrm{~d} p}=\frac{1-g}{\alpha \rho_{s} L_{m}}
$$

把（2）式代入，得

$$
\frac{\mathrm{d} T_{m}}{\mathrm{~d} r}=\frac{\alpha-1}{\alpha} \cdot \frac{T_{m}}{L_{m}} g \frac{r}{R}
$$

这就是地幔中固态硅酸盐熔点 $T_{m}$ 随它到地心距离 $r$ 的变化关系。
对于地幔较上部位, 近似有

$$
r \approx R
$$

又因往地心深入的距离

$$
\Delta r=-1000 \mathrm{~m} \ll R
$$

可作为小量处理. 这样, 由 (4) 式, 得

$$
\Delta T_{m} \approx \frac{\alpha-1}{\alpha} \cdot \frac{T_{m}}{L_{m}} g \Delta r
$$

把有关数据代入，得

$$
\Delta T_{m}=4 \mathrm{C}
$$

可见, 从地球表面附近的地幔较上部向地心深人 1000 m 后, 由于压强增大, 将使地幔中固态硅酸盐的熔点升高约 $4 \mathrm{C}$.物理学难题集萃 (增订本)
![img-332.jpeg](img-332.jpeg)

# 电 微 学 

![img-333.jpeg](img-333.jpeg)

## 1

1物理学难题集萃（增订本）

# 第一章 静电场，导体与介质 

【题1】真空中有两个点电荷 $q_{1}$ 和 $q_{2}$ ，它们的质量分别为 $m_{1}$ 和 $m_{2}$ ，位置矢量分别为 $r_{1}$ 和 $r_{2}$ ，只考虑其间的库仑相互作用。

1. 引入相对位矢 $r=r_{2}-r_{1}$ ，试建立 $r(t)$ 的微分方程。
2. 设 $t=0$ 时刻，两点电荷均静止，相互间距为 $r_{0}$ 。若两点电荷电量异号，试问它们何时相碰。
【分析】根据库仑定律和牛顿第二定律，分别建立 $m_{1}$ 和 $m_{2}$ 的运动方程，相减，即得 $r(t)$ 的微分方程。

在 $t=0$ 时刻， $q_{1}$ 与 $q_{2}$ 相对静止，则尔后两点电荷将只沿它们的连线作直线运动，这是一维情形，方程大为简化。积分，利用初条件（ $t=0$ 时， $r=r_{0}$ ）及电荷异号的条件，即可求解。
【解】1. 如图， $q_{1}$ 和 $q_{2}$ 的运动方程为

$$
\left\{\begin{array}{l}
m_{1} \ddot{r}_{1}=-\frac{q_{1} q_{2}}{4 \pi \varepsilon_{0} r^{3}} r \\
m_{2} \ddot{r}_{2}=\frac{q_{1} q_{2}}{4 \pi \varepsilon_{0} r^{3}} r
\end{array}\right\}
$$

相减，得

$$
\ddot{r}=\ddot{r}_{2}-\ddot{r}_{1}=\left(\frac{1}{m_{2}}+\frac{1}{m_{1}}\right)\left(\frac{q_{1} q_{2}}{4 \pi \varepsilon_{0} r^{3}} r\right)
$$

![img-334.jpeg](img-334.jpeg)

电图 $1-1-1$

即

$$
m \ddot{r}=\frac{q_{1} q_{2}}{4 \pi \varepsilon_{0} r^{2}} r
$$

其中 $m$ 为约化质量

$$
m=\frac{m_{1} m_{2}}{m_{1}+m_{2}}
$$

2. 因 $t=0$ 时, $q_{1}$ 和 $q_{2}$ 静止,尔后两点电荷将沿其连线作直线运动。于是, (1)式可简化为

$$
m \ddot{r}=\frac{q_{1} q_{2}}{4 \pi \varepsilon_{0} r^{2}}
$$

为求两点电荷相碰的时刻，即求 $r=0$ 的时刻，需求解 $t(r)$ 关系。为此，先寻找 $\dot{r}(r)$ 关系。利用

$$
\dot{r}=\frac{\mathrm{d} \dot{r}}{\mathrm{~d} t}=\frac{\mathrm{d} \dot{r}}{\mathrm{~d} r} \frac{\mathrm{~d} r}{\mathrm{~d} t}=\dot{r} \frac{\mathrm{~d} \dot{r}}{\mathrm{~d} r}
$$

由（2）式，得

$$
m \dot{r} \mathrm{~d} \dot{r}=\frac{q_{1} q_{2}}{4 \pi \varepsilon_{0} r^{2}} \mathrm{~d} r
$$

积分，因初条件为

$$
t=0 \text { 时, } r=r_{0}, \dot{r}=0
$$

得

$$
\dot{r}^{2}=-\frac{q_{1} q_{2}}{2 \pi \varepsilon_{0} m}\left(\frac{1}{r}-\frac{1}{r_{0}}\right)
$$

因 $q_{1}$ 与 $q_{2}$ 异号， $-q_{1} q_{2}>0$ ，有

$$
\dot{r}=\sqrt{\frac{-q_{1} q_{2}}{2 \pi \varepsilon_{0} m}} \sqrt{\frac{r_{0}-r}{r_{0} r}}
$$

这就是 $\dot{r}(r)$ 关系式。
把 $\dot{r}=\frac{\mathrm{d} r}{\mathrm{~d} t}$ 代入（3）式，积分，得

$$
\int_{r_{0}}^{r} \sqrt{\frac{r_{0} r}{r_{0}-r}} \mathrm{~d} r=\int_{0}^{t} \sqrt{\frac{q_{1} q_{2}}{2 \pi \varepsilon_{0} m}} \mathrm{~d} t
$$

式中

$$
\int_{r_{0}}^{r} \sqrt{\frac{r_{0} r}{r_{0}-r}} \mathrm{~d} r=\sqrt{r_{0}} \int_{r_{0}}^{r} \frac{\sqrt{\frac{r}{r_{0}}}}{\sqrt{1-\frac{r}{r_{0}}}} \mathrm{~d} r
$$

作变量替换，令

$$
u=\sqrt{\frac{r}{r_{0}}}
$$

有

$$
\mathrm{d} r=2 r_{0} u \mathrm{~d} u
$$

则得

$$
\begin{aligned}
\sqrt{r_{0}} \int_{r_{0}}^{r} \frac{\sqrt{\frac{r}{r_{0}}}}{\sqrt{1-\frac{r}{r_{0}}}} \mathrm{~d} r & =\sqrt{r_{0}} \int_{1}^{u} \frac{u \cdot 2 r_{0} u \mathrm{~d} u}{\sqrt{1-u^{2}}} \\
& =2 r_{0}^{\mathrm{M}} \int_{1}^{u} \frac{u^{2} \mathrm{~d} u}{\sqrt{1-u^{2}}}=2 r_{0}^{\mathrm{M}} \int_{1}^{u}(-u) \mathrm{d} \sqrt{1-u^{2}} \\
& =\left.r_{0}^{\mathrm{M}}\left(-u \sqrt{1-u^{2}}+\arcsin u\right)\right|_{1} ^{u} \\
& =r_{0}^{\mathrm{M}}\left[\left(-u \sqrt{1-u^{2}}+\arcsin u\right)-\frac{\pi}{2}\right]
\end{aligned}
$$

代入（4）式，得

$$
t(r)=\sqrt{\frac{2 \pi \varepsilon_{0} m}{-q_{1} q_{2}}} r_{0}^{\mathrm{M}}\left[\left(-\sqrt{\frac{r}{r_{0}}} \sqrt{1-\frac{r}{r_{0}}}+\arcsin \sqrt{\frac{r}{r_{0}}}\right)-\frac{\pi}{2}\right]
$$

设两点电荷相碰 $(r=0)$ 的时刻为 $t(0)$ ，由上式，得

$$
t(0)=\sqrt{\frac{2 \pi \varepsilon_{0} m}{-q_{1} q_{2}}} r_{0}^{\mathrm{M}}\left(\pi-\frac{\pi}{2}\right)=\pi r_{0} \sqrt{\frac{\pi \varepsilon_{0} r_{0} m}{-2 q_{1} q_{2}}}
$$

本题表明，在 $t=0$ 时两点电荷静止，尔后沿连线作直线运动的情况下，利用相对位矢 $\boldsymbol{r}$ 的微分方程计算求解比较方便，这是一条经验。

【题 2】 如图，在边长为 $a$ 的正方形的四个顶点分别有电量均为 $Q$ 的固定的点电荷。在正方形对角线交点上放置一个质量为 $m$ 、电量为 $q(q$ 与 $Q$ 同号)的自由点电荷。今将 $q$ 沿某一对角线移动一个很小的距离。试问 $q$ 是否将作周期性振动，若是，试求出振动周期。
【分析】如图，取 $x$ 轴，原点 $O$ 在正方形中心。当 $q$ 有小位移 $x(x \ll a)$ 时，左右两个 $Q$ 给予 $q$的作用力沿 $-x$ ，上下两个 $Q$ 给予 $q$ 的作用力沿 $x$ 。计算表明， $q$ 所受合力沿 $-x$ 且与 $x$ 成正比，即合力为线性回复力，故 $q$ 沿 $x$ 作简谐振动，周期 $T$ 可求。
【解】设 $q$ 沿 $x$ 轴有一小位移 $x(x \ll a)$ ，则左、右两个 $Q$ 给予 $q$ 的作用力为

$$
\begin{aligned}
F_{x}(1) & =\frac{Q q}{4 \pi \varepsilon_{0}(r+x)^{2}}-\frac{Q q}{4 \pi \varepsilon_{0}(r-x)^{2}} \\
& =\frac{Q q}{4 \pi \varepsilon_{0} r^{2}}\left[\left(1+\frac{x}{r}\right)^{-2}-\left(1-\frac{x}{r}\right)^{-2}\right]
\end{aligned}
$$

式中

$$
r=\frac{\sqrt{2}}{2} a
$$

为正方形对角线长度之半. 因 $x \ll a$, 故 $x \ll r$, 有

$$
F_{x}(1)=\frac{Q q}{4 \pi \varepsilon_{0} r^{2}}\left[\left(1-\frac{2 x}{r}\right)-\left(1+\frac{2 x}{r}\right)\right]=-\frac{Q q}{\pi \varepsilon_{0} r^{3}} x
$$

![img-335.jpeg](img-335.jpeg)

电图 $1-2-1$

上、下两个 $Q$ 给予 $q$ 的作用力为

$$
\begin{aligned}
F_{x}(2) & =\frac{2 Q q}{4 \pi \varepsilon_{0}\left(r^{2}+x^{2}\right)} \cos \varphi=\frac{2 Q q}{4 \pi \varepsilon_{0}\left(r^{2}+x^{2}\right)} \cdot \frac{x}{\sqrt{r^{2}+x^{2}}} \\
& =\frac{Q q}{2 \pi \varepsilon_{0}\left(r^{2}+x^{2}\right)^{3 / 2}} x \approx \frac{Q q}{2 \pi \varepsilon_{0} r^{3}} x
\end{aligned}
$$

$q$ 所受合力为

$$
F_{x}=F_{x}(1)+F_{x}(2)=-\frac{Q q}{2 \pi \varepsilon_{0} r^{3}} x
$$

这是一个线性回复力， $q$ 在它的作用下作简谐振动，振动的圆频率 $\omega$ 和周期 $T$ 为

$$
\omega=\sqrt{\frac{Q q}{2 \pi \varepsilon_{0} m r^{3}}}=\sqrt{\frac{\sqrt{2} Q q}{\pi \varepsilon_{0} m a^{3}}}, \quad T=\frac{2 \pi}{\omega}=\pi \sqrt{\frac{2 \sqrt{2} \pi \varepsilon_{0} m a^{3}}{Q q}}
$$

【题3】如图所示，在 $x$ 轴的 $\pm a$ 处分别有两个固定的点电荷，它们的电量均为 $Q(Q>0)$ 。在 $x$轴的 $\pm 2 a$ 处分别有另外两个固定的点电荷，它们的电量均为 $-8 Q$ 。在原点 $O$ 有一个电量为 $q$ $(q>0)$ 、质量为 $m$ 的带电质点。设带电质点只能在 $x$ 轴上运动。试分析带电质点所在的平衡位置原点 $O$ ，是否为稳定平衡位置。若原点 $O$ 为稳定平衡位置，将带电质点移到 $x=A$ 处从静止释放 $(0<A \ll a)$ ，试求其振动周期。
【分析】带电质点 $(m, q)$ 在原点 $x=0$ 处受力平衡。当它偏离平衡位置到达任意 $x$ 处时，可由库仑定律计算四个固定点电荷对它的合作用力 $F_{x}$ ，若此力为回复力（即与 $x$ 反向），则 $x=0$ 为稳定平衡位置。计算中可利 $\frac{-6 Q}{-2 a} \frac{Q}{-a} \frac{q_{1} m}{0} \frac{q}{a} \frac{-6 Q}{2 a}$用 $|x| \ll a$ （因 $A \ll a$ ）的条件，作相应的近似简化。

若 $x=0$ 为稳定平衡位置，则根据力学知识即可计算其振

电图1-3-1
动周期 T .
【解】 设带电质点在 $x$ 轴上偏离平衡位置 $x=0$ 的小位移为 $x$ ，则它所受四个固定点电荷的合力为

$$
\begin{aligned}
F_{x} & \approx \frac{q Q}{4 \pi \varepsilon_{0}}\left\{\left[\frac{1}{(x+a)^{2}}-\frac{1}{(x-a)^{2}}\right]-\left[\frac{8}{(x+2 a)^{2}}-\frac{8}{(x-2 a)^{2}}\right]\right\} \\
& =\frac{q Q}{4 \pi \varepsilon_{0} a^{2}}\left\{\left(1+\frac{x}{a}\right)^{-2}-\left(1-\frac{x}{a}\right)^{-2}-2\left(1+\frac{x}{2 a}\right)^{-2}+2\left(1-\frac{x}{2 a}\right)^{-2}\right\} \\
& =\frac{q Q}{4 \pi \varepsilon_{0} a^{2}}\left\{\left(1-2 \frac{x}{a}+3 \frac{x^{2}}{a^{2}}-4 \frac{x^{3}}{a^{3}}+\cdots\right)-\left(1+2 \frac{x}{a}+3 \frac{x^{2}}{a^{2}}+4 \frac{x^{3}}{a^{3}}+\cdots\right)\right. \\
& \left.\quad-2\left[1-2 \frac{x}{2 a}+3 \frac{x^{2}}{(2 a)^{2}}-4 \frac{x^{3}}{(2 a)^{3}}+\cdots\right]+2\left[1+2 \frac{x}{2 a}+3 \frac{x^{2}}{(2 a)^{2}}+4 \frac{x^{3}}{(2 a)^{3}}+\cdots\right]\right\}
\end{aligned}
$$

因 $A \ll a$ ，故可取 $|x| \ll a$ ，合力近似为

$$
F_{x}=-\left\{\frac{3 q Q}{2 \pi \varepsilon_{0} a^{3}}\right\} x^{3}
$$

这是一个回复力，故 $x=0$ 是稳定平衡位置。
然而，由于 $F_{x}$ 并非线性回复力，故带电质点将作非简谐性的周期振动。为了计算其振动周期 $T$ ，可将 $F_{x}$ 改写为

$$
F_{x}=-\beta x^{3}
$$

其中

$$
\beta=\frac{3 q Q}{2 \pi \varepsilon_{0} a^{3}}
$$

由于 $F_{x}$ 为保守力，可引入势能。取 $x=0$ 点为势能零点，则带电质点在 $x$ 处的势能为

$$
E_{\mathrm{p}}(x)=\frac{1}{4} \beta x^{4}
$$

因能量守恒，故带电粒子在 $A$ 处的势能（从 $A$ 处静止释放）应等于它在 $x$ 处的势能与动能之和，于是带电质点在 $x$ 处的动能为

$$
E_{\mathrm{k}}(x)=E_{\mathrm{p}}(A)-E_{\mathrm{p}}(x)=\frac{1}{4} \beta\left(A^{4}-x^{4}\right)
$$

带电质点在 $x$ 处的速度为

$$
v(x)=\sqrt{\frac{2 E_{\mathrm{k}}(x)}{m}}=\sqrt{\frac{\beta}{2 m}\left(A^{4}-x^{4}\right)}
$$

带电质点从 $x=A$ 处静止释放后，围绕原点往复振动的周期为

$$
T=2 \int_{-A}^{A} \frac{\mathrm{~d} x}{v}=2 \sqrt{\frac{2 m}{\beta}} \int_{-A}^{A} \frac{\mathrm{~d} x}{\sqrt{A^{4}-x^{4}}}
$$

由于被积函数为偶函数，故

$$
T=4 \sqrt{\frac{2 m}{\beta}} \int_{0}^{A} \frac{\mathrm{~d} x}{\sqrt{A^{2}-x^{4}}}
$$

由第一类椭圆积分公式

$$
\left\{\begin{array}{l}
\int_{x}^{b} \frac{d x}{\sqrt{\left(a^{2}+x^{2}\right)\left(b^{2}-x^{2}\right)}}=\frac{1}{\sqrt{a^{2}+b^{2}}} F\left(\sec \cos \frac{x}{b}, \frac{b}{\sqrt{a^{2}+b^{2}}}\right) \\
F(\Phi, k)=\int_{0}^{\Phi} \frac{d \Phi}{\sqrt{1-k^{2} \sin ^{2} \Phi}}
\end{array}\right\}
$$

得出

$$
\int_{0}^{A} \frac{d x}{\sqrt{A^{4}-x^{4}}}=\int_{0}^{A} \frac{d x}{\sqrt{\left(A^{2}+x^{2}\right)\left(A^{2}-x^{2}\right)}}=\frac{1}{\sqrt{2} A} F\left(\frac{\pi}{2}, \frac{1}{\sqrt{2}}\right)
$$

故带电质点的振动周期为

$$
T=\frac{4}{A} \sqrt{\frac{m}{\beta}} F\left(\frac{\pi}{2}, \frac{1}{\sqrt{2}}\right)=\frac{4}{A} \sqrt{\frac{2 \pi \varepsilon_{0} m a^{3}}{3 q Q}} F\left(\frac{\pi}{2}, \frac{1}{\sqrt{2}}\right)
$$

查表得出

$$
F\left(\frac{\pi}{2}, \frac{1}{\sqrt{2}}\right)=1.8541
$$

故

$$
T=\frac{7.4164}{A} \sqrt{\frac{2 \pi \varepsilon_{0} m a^{3}}{3 q Q}}
$$

本题的结果表明：1. 在稳定平衡位置附近的小振动，并非均为简谐振动，本题就不是简谐振动。2. 简谐振动的周期与振幅无关，非简谐性振动的周期则可能与振幅有关，本题中，回复力与位移的三次方成正比，振动周期 T 与振幅 A 成反比（有关）。

总之，不能把个别结论随意推广，以偏概全。

【题4】电力与距离平方成反比是库仑定律的主要内容。对此，迄今仍有人进行精确的实验检验。试证明，若电力反平方律是精确的，则孤立带电导体球壳达到静电平衡时，其电量将均匀分布在外球面上，球壳内电场强度处处为零。
【分析】库仑定律不仅是静电学而且是整个电磁学的基础，因此电力是否精确地与距离平方成反比，精度如何，一直是引入注目的重要课题。显然，诸如当年库仑扭杆实验之类的直接测量，难以达到很高的精度。卡文迪许和麦克斯韦提出了精确验证电力反平方律的方法，并设计完成了相应的间接示零实验，一直沿用至今。本题就是卡文迪许一麦克斯韦实验的基本想法：若电力是严格的反平方律力，则带电导体球壳内表面不带电；反之，内表面应带电。麦克斯韦从理论上导出了内表面电量与球壳电量， $\delta$ （偏离反平方律的修正数）、几何因素的定量关系，于是即可由实验确定 $\delta$ 应小到什么程度。

为了证明 $\delta=0$ 时，带电球壳内部处处场强为零，可采用反证法。即设 $\delta \neq 0$ ，计算球内（不在球心处）任一微小点电荷所受电力，然后得出 $\delta=0$ 时的结果，由于问题的对称性，球壳上的电荷分布是均匀的。【解】如图，设带电球壳的面电荷密度为 $\sigma$ ，由对称性， $\sigma$ 为常量。设球内任一点（非球心 $O$ ）有点电荷 $Q$ 。设电力偏离反平方律的修正数为 $\delta$ ，设 $\sigma$ 与 $Q$ 同号。则球面上任意一对面元 $\mathrm{d} S_{1}$ 和 $\mathrm{d} S_{2}$ 卜的电荷对 $Q$ 的作用力为

$$
\begin{aligned}
\mathrm{d} f & =k \frac{\sigma \mathrm{~d} S_{1} Q}{r_{1}^{2}}-k \frac{\sigma \mathrm{~d} S_{2} Q}{r_{2}^{2}} \\
& =k \sigma Q\left(\frac{\mathrm{~d} S_{1}}{r_{1}^{2}}-\frac{\mathrm{d} S_{2}}{r_{2}^{2}}\right)
\end{aligned}
$$

式中

$$
\alpha=2+\delta
$$

由于 $\mathrm{d} S_{1}$ 和 $\mathrm{d} S_{2}$ 对 $Q$ 点所张的可体角相同，均为

$$
\mathrm{d} \Omega=\frac{\mathrm{d} S_{1} \cos \theta}{r_{1}^{2}}=\frac{\mathrm{d} S_{2} \cos \theta}{r_{2}^{2}}
$$

代入 $\mathrm{d} f$ 表达式，得

$$
\mathrm{d} f=\frac{k \sigma Q \mathrm{~d} \Omega}{\cos \theta}\left(\frac{1}{r_{1}^{2}-2}-\frac{1}{r_{2}^{2}-2}\right)=\frac{k \sigma Q \mathrm{~d} \Omega}{\cos \theta}\left(\frac{1}{r_{1}^{2}}-\frac{1}{r_{2}^{2}}\right)
$$

如图， $r_{1}<r_{2}$ 。由上式，当 $\alpha=2, \delta=0$ 时， $\mathrm{d} f=0$ ；当 $\alpha>2, \delta>0$ 时， $\mathrm{d} f \neq 0, \mathrm{~d} \boldsymbol{f}$ 由 $Q$ 点指向较大较远的 $\mathrm{d} S_{2}$ ；当 $\alpha<2, \delta<0$ 时， $\mathrm{d} f \neq 0, \mathrm{~d} \boldsymbol{f}$ 由 $Q$ 点指向较小较近的 $\mathrm{d} S_{1}$ 。

对于整个球壳，总可以按上述方法分成一对对面元。由于对称性，当 $\alpha>2, \delta>0$ 时，点电荷 $Q$ 所受合力 $f \neq 0, f$ 的方向由 $Q$ 点指向球心 $O$ ；当 $\alpha<2, \delta<0$ 时， $f \neq 0, f$ 的方向由球心 $O$ 指向 $Q$ 点。

由此可见， $\delta=0$ 与 $\delta \neq 0$ 是根本不同的。当 $\delta=0$ 时，球壳内各点，球壳内表面处处场强为零，球壳内表面不带电。当 $\delta \neq 0$ 时，除球心外，各点场强均不为零，球壳内表面将带电，

【题 5】 在 $x y$ 平面上有一以坐标原点为圆心，以 $R$ 为半径的带电圆环。电荷线密度的分布为： $y<0, \lambda=\lambda_{0} ; y>0, \lambda=-\lambda_{0}$ 。试求 $\varepsilon$ 轴（通过圆环的圆心，与圆环所在平面垂直的轴）上的场强分布。
【分析】 关键在于对称性分析。如图所示，在 $\varepsilon$ 轴上任取一点，则在 $y<0$ 处的 $\lambda_{0}$ 半圆环在 $\varepsilon$点的场强矢量应位于 $y \varepsilon$ 平面（即无 $x$ 分量）并指向斜上方，这是因为 $\lambda_{0}$ 半圆环相对 $x$ 轴而言是对称的，且 $\lambda_{0}>0$ 。同样，在 $y>0$ 处的一 $\lambda_{0}$ 半圆环在 $\varepsilon$ 点的场强矢量也应位于 $y \varepsilon$ 平面并指向斜下方。由于两个半圆环相对 $x$ 轴对称，带电均匀且相同，只是一正一负，因此两个半圆环在 $\varepsilon$ 点的场强矢量的大小应相同，两个场强矢量的 $\varepsilon$ 分量抵消。于是得出， $\varepsilon$ 轴与任一点的电场强度 $\boldsymbol{E}=E_{y} f$ ，只有 $y$ 分量， $E_{y}$ 是 $+\lambda_{0}$ 半圆环贡献的两倍。
【解】如图，在 $+\lambda_{0}$ 半圆环上任取线元 $\mathrm{d} l=R \mathrm{~d} \theta$ ，它在 $\varepsilon$ 点的电场强度 $\mathrm{d} \boldsymbol{E}$ 的方向沿 $\mathrm{d} l$ 与 $\varepsilon$ 点的连线指向斜上方，大小为

$$
\mathrm{d} E=\frac{\lambda_{0} R \mathrm{~d} \theta}{4 \pi \varepsilon_{0} r^{2}}
$$

式中

$$
r=\sqrt{R^{2}+z^{2}}
$

$$\mathrm{d} \boldsymbol{E}$ 在 $x y$ 平面上的投影为 $\mathrm{d} \boldsymbol{E}_{r}$, 其方向跟 $O$ 与 $\mathrm{d} l$ 的连线平行, 其大小为

$$
\mathrm{d} E_{r}=\mathrm{d} E \sin \alpha=\frac{R}{r} \mathrm{~d} E
$$

$\mathrm{d} \mathbf{E}_{r}$ 在 $y$ 轴的投影为

$$
\mathrm{d} E_{y}=\mathrm{d} E_{r} \sin \theta=\frac{\lambda_{0} R^{2}}{4 \pi \varepsilon_{0} r^{3}} \sin \theta \mathrm{~d} \theta
$$

$+\lambda_{0}$ 半圆环对 $E_{y}$ 的总贡献为

$$
E_{y,+}=\int \mathrm{d} E_{y}=\frac{\lambda_{0} R^{2}}{4 \pi \varepsilon_{0} r^{3}} \int_{0}^{\pi} \sin \theta \mathrm{d} \theta=\frac{\lambda_{0} R^{2}}{2 \pi \varepsilon_{0} r^{3}}
$$

因此, 整个带电圆环在 $z$ 点的场强为

$$
\begin{aligned}
\boldsymbol{E} & =\left(0, E_{y}, 0\right)=\left(0,2 E_{y,+}, 0\right) \\
& =\left(0, \frac{\lambda_{0} R^{2}}{\pi \varepsilon_{0} r^{3}}, 0\right)
\end{aligned}
$$

![img-336.jpeg](img-336.jpeg)

电图 $1-S-1$

【题 6】一无限长均匀带电缩线弯成如电图 1-6-1所示的平面图形，其中 $\widehat{A B}$ 是半圆弧， $A A^{\prime}$和 $B B^{\prime}$ 是两平行直线， $A^{\prime}$ 和 $B^{\prime}$ 向右端无限延伸，试求圆心 $O$ 处的电场强度。
【解】本题求电场强度，然而竟未给出电荷线密度以及圆半径等通常必不可少的已知条件，明显地暗示所求 $O$ 点的场强似应为零，否则便无从求解。

均匀带电缩线由半圆弧 $\widehat{A B}$ 及两平行半无限长直线 $A A^{\prime}$ 和 $B B^{\prime}$ 构成，显然，它在平面上应产生确定的非零电场强度分布（在整个空间亦应如此）。但 $O$ 点似乎是平面中唯一具有某种对称性的特殊位置，在 $O$ 点的电场强度为零是可能的，并非不合理。

O 点的场强是四部分贡献的矢量和，即左上 $\frac{1}{4}$ 圆弧、左下 $\frac{1}{4}$ 圆弧、卜面的半无限长直线 $A A^{\prime}$ 、下面的半无限长直线 $B B^{\prime}$ ，它们在 $O$ 点产生的电场强度分别指向右下方、右上方、左上方、左下方（假设细线带正电），相互抵消是确有可能的。
![img-337.jpeg](img-337.jpeg)

电图 1-6-1
![img-338.jpeg](img-338.jpeg)

电图 $1-6-2$

为了检验上述猜测是否正确，如电图 1-6-2 所示，在左上 $\frac{1}{4}$ 圆弧中任取弧元 $\Delta l_{1}$ ，相应地在 $B B^{\prime}$ 中取线元 $\Delta l_{2}, \Delta l_{1}$ 和 $\Delta l_{2}$ 对 $O$ 点的张角 $\Delta \phi$ 相同，显然，当 $\Delta l_{1}$ 遍及左上 $\frac{1}{4}$ 圆弧时， $\Delta l_{2}$相应地遍及整个 $B B^{\prime}$ 直线、左下 $\frac{1}{4}$ 圆弧与 $A A^{\prime}$ 类似。现在来看 $\Delta l_{1}$ 和 $\Delta l_{2}$ 在 $O$ 点产生的电场强度 $\Delta \boldsymbol{E}_{1}$ 与 $\Delta \boldsymbol{E}_{2}$ 的关系。显然， $\Delta \boldsymbol{E}_{1}$ 与 $\Delta \boldsymbol{E}_{2}$ 刚好反向。关键是其大小是否相等。如电图 $1-6-2$ ，

$$
\Delta l_{1}=R \Delta \phi
$$

式中 $R$ 是半圆弧的半径。设缩线中电荷线密度为 $\lambda$, 则

$$
\Delta E_{1}=k \frac{\Delta Q_{1}}{R^{2}}=k \frac{\lambda \Delta l_{1}}{R^{2}}=k \frac{\lambda \Delta \phi}{R}
$$

其中 $\Delta Q_{1}$ 是 $\Delta l_{1}$ 上的电量. 类似地, 若 $\Delta l_{2}$ 上的电量为 $\Delta Q_{2}$, 则

$$
\Delta E_{2}=k \frac{\Delta Q_{2}}{r^{2}}=k \frac{\lambda \Delta l_{2}}{r^{2}}
$$

式中 $r$ 是 $\Delta l_{2}$ 到 $O$ 点的距离。由电图 $1-6-2$, 不难发现下述几何关系

$$
\Delta l_{2}=\frac{\Delta l_{2}^{\prime}}{\cos \phi}, \quad \Delta l_{2}^{\prime}=r \Delta \phi, \quad \cos \phi=\frac{R}{r}
$$

代入, 得

$$
\Delta E_{2}=k \frac{\lambda \Delta \phi}{R}
$$

故

$$
\Delta E_{2}=\Delta E_{1}
$$

可见，任意弧元 $\Delta l_{1}$ 及相应的线元 $\Delta l_{2}$ 在 $O$ 点产生的电场强度 $\Delta \boldsymbol{E}_{1}$ 与 $\Delta \boldsymbol{E}_{2}$ 刚好抵消。由于 $\Delta l_{1}$任选，且当 $\Delta l_{1}$ 遍及半圆弧时， $\Delta l_{2}$ 刚好遍及 $A A^{\prime}$ 及 $B B^{\prime}$ ，因此，圆心 $O$ 处的电场强度应为零，即

$$
E_{0}=0
$$

【图7】半径为 $R$ 的半圆环均匀带电，电荷线密度为 $\lambda$ ，试求圆心处的电场强度。
【分析】由本章题 6 可知，均匀带电的四分之一圆周在圆心处的电场强度，同与它在端点相切的半无限长直线（均匀带电且电荷线密度相同）在圆心处的电场强度刚好抵消，即相等、反向。因此均匀带电半圆环在圆心的电场强度，可由与它两端点相切的两条平行半无限长直线在圆心处的电场强度求出。后者由高斯定理容易解出。这是本题的一种解法。

另一种方法，是直接计算半圆周各弧元电荷在圆心处的电场强度，再用场强叠加原理求其矢量和。可充分利用题目的对称性简化计算。

下面只给出第二种解法。
【解】如图，以圆心 $O$ 为原点建立 $x$ 轴和 $y$ 轴。在半圆上任取弧元 $\mathrm{d} l$ ，它在 $O$ 点的电场强度 $\mathrm{d} \boldsymbol{E}$ 已在图中画出。因对称性，各 $\mathrm{d} \boldsymbol{E}$ 的 $y$分量互相抵消， $x$ 分量合成 $O$ 点的电场强度 $\boldsymbol{E}_{0}$ 。
$\mathrm{d} \boldsymbol{E}$ 的 $x$ 分量为

$$
\mathrm{d} E_{x}=\frac{\lambda \mathrm{d} l}{4 \pi \varepsilon_{0} R^{2}} \cos \alpha
$$

以弧元 $\mathrm{d} l$ 为斜边作成一个小直角三角形，两直角边分别与 $x$ 轴和 $y$轴平行。于是，

$$
\mathrm{d} y=\mathrm{d} l \cos \alpha
$$

![img-339.jpeg](img-339.jpeg)

电图 $1-7-1

$$\mathrm{d} y$ 即为弧元 $\mathrm{d} l$ 在 $y$ 轴上的投影。半圆环在圆心 $O$ 的电场强度指向 $x$ 方向, 即

$$
\begin{aligned}
E_{o} & =E_{o x}=\sum \mathrm{d} E_{x}=\frac{\lambda}{4 \pi \varepsilon_{0} R^{2}} \sum \mathrm{~d} y \\
& =\frac{\lambda}{4 \pi \varepsilon_{0} R^{2}} 2 R=\frac{\lambda}{2 \pi \varepsilon_{0} R}
\end{aligned}
$$

【题8】在空间 $A$ 点有电量为 $5 Q$ 的固定点电荷，在 $B$ 点有电量为 $12 Q$ 的固定点电荷 $. A$ 点和 $B$ 点相距 $13 a$ ，空间另 $-C$ 点与 $A$ 点和 $B$ 点分别相距 $5 a$ 和 $12 a$ 。

1. 以 $C$ 点为球心，以 $r=a$ 为半径作一球，试求在该球区域内，静电场电场强度 $\boldsymbol{E}$ 的平均值

$$
\overline{\boldsymbol{E}}=\frac{\sum_{i} \boldsymbol{E}_{i} \Delta V_{i}}{\sum_{i} \Delta V_{i}}
$$

的大小 $|\overline{\boldsymbol{E}}|$ ，式中 $\boldsymbol{E}_{i}$ 是在体积元 $\Delta V_{i}$ 处的电场强度。
2. 以 $C$ 点为球心，以 $r=10 a$ 为半径作一球，试求在该球区域内，静电场电场强度 $\boldsymbol{E}$ 的平均值的大小 $|\overline{\boldsymbol{E}}|$ 。
【分析】以 $C$ 点为中心的球形区域内任一点的电场强度是，在 $A$ 点和 $B$ 点的点电荷在该点的电场强度的矢量和。球形区域内的平均电场强度 $|\overline{\boldsymbol{E}}|$ 是 $A$ 点和 $B$ 点的点电荷在该区域内的平均场强的矢量和。因此，问题归结为求点电荷在球形区域内的平均电场强度。第1问和第2问的区别在于，前者的球形区域较小， $A$ 点和 $B$ 点均在球外，后者的球形区域较大， $A$ 点在球内， $B$ 点在球外。

为求任一点电荷 $Q$ 在某球形区域内的平均场强 $|\overline{\boldsymbol{E}}|$ ，可以设想在该球形区域内有均匀体电荷分布，电荷密度为 $\rho$ ，总电量为 $q$ 。则点电荷 $Q$ 对球电荷的作用力 $\boldsymbol{F}_{q}$ 应为 $Q$ 对球内各个 $\Delta q_{i}=$ $\rho \Delta V_{i}$ 作用力的矢量和，即等于 $q$ 与 $\bar{E}$ 的乘积 $\boldsymbol{F}_{q}=q \overline{\boldsymbol{E}}$ 。把球电荷 $q$ 对点电荷 $Q$ 的作用力表为 $\boldsymbol{F}_{Q}$ ，则因 $\boldsymbol{F}_{q}$ 与 $\boldsymbol{F}_{Q}$ 为一对作用力与反作用力，故 $\boldsymbol{F}_{Q}=-\boldsymbol{F}_{q} \cdot \boldsymbol{F}_{Q}$ 容易求得，于是 $\boldsymbol{F}_{q}$ 与 $\overline{\boldsymbol{E}}$ 均可求得。

以上讨论与点电荷 $Q$ 是否在球形区域内无关，即无论 $Q$ 在球外或球内，上述 $\boldsymbol{F}_{q}=q \overline{\boldsymbol{E}}$ 及 $\boldsymbol{F}_{q}=-\boldsymbol{F}_{Q}$ 的关系均成立。若 $Q$ 在球外， $\boldsymbol{F}_{Q}$ 相当于 $q$ 集中在球心 $O$ 点对 $Q$ 的作用力。若 $Q$ 在球内，则 $Q$ 与球心 $O$ 点的距离 $R$ 小于球半径 $r$ 时， $\boldsymbol{F}_{Q}$ 包括两部分。其一是半径为 $R$ 的小球电荷对 $Q$ 的作用力，这相当于 $\rho V_{R}\left(V_{R}\right.$ 是半径为 $R$ 的小球体积）集中在球心 $O$ 点对 $Q$ 的作用力；另一是内、外半径为 $R$ 和 $r$ 的球壳电荷对 $Q$ 的作用力，应为零。
【解】设点电荷 $Q$ 在一球形区域内的平均场强为 $\bar{E}$ 。设 $Q$ 与球心 $O$ 的距离为 $R_{Q O}$ ，球内均匀分布着电荷，电荷体密度为 $\rho$ ，总电量为 $q$ 。则当 $Q$ 在球外时，球内电荷 $q$ 对点电荷 $Q$ 的作用力 $\boldsymbol{F}_{Q}$为

$$
\boldsymbol{F}_{Q}=\frac{Q q}{4 \pi \varepsilon_{0} R_{O Q}^{3}} \boldsymbol{R}_{O Q}
$$

式中 $\boldsymbol{R}_{O Q}$ 是球心 $O$ 点到点电荷 $Q$ 的距离。由牛顿第三定律，点电荷 $Q$ 对球电荷 $q$ 的作用力 $\boldsymbol{F}_{q}$ 为

$$
\boldsymbol{F}_{q}=-\boldsymbol{F}_{Q}=-\frac{Q q}{4 \pi \varepsilon_{0} R_{O Q}^{3}} \boldsymbol{R}_{O Q}=\frac{Q q}{4 \pi \varepsilon_{0} R_{Q O}^{3}} \boldsymbol{R}_{Q O}=q \boldsymbol{E}_{0}
$$

式中

$$
\boldsymbol{E}_{0}=\frac{Q}{4 \pi \varepsilon_{0} R_{Q O}^{3}} \boldsymbol{R}_{Q O}
$$

$\boldsymbol{F}_{q}$ 是点电荷 $Q$ 对球内各元电荷 $\Delta q_{i}=\rho \Delta V_{i}$ 作用力的矢量和。设 $Q$ 在 $\Delta q_{i}$ 处的电场强度为 $\boldsymbol{E}_{i}$,则

$$
\boldsymbol{F}_{q}=\sum_{i} \Delta q_{i} \boldsymbol{E}_{i}=\sum_{i} \rho \Delta V_{i} \boldsymbol{E}_{i}=\sum_{i} \frac{q}{V} \Delta V_{i} \boldsymbol{E}_{i}=q \frac{\sum_{i} \boldsymbol{E}_{i} \Delta V_{i}}{\sum_{i} \Delta V_{i}}
$$

式中 $V=\sum_{i} \Delta V_{i}$ 是球的体积. 因

$$
\overrightarrow{\boldsymbol{E}}=\frac{\sum_{i} \boldsymbol{E}_{i} \Delta V_{i}}{\sum_{i} \Delta V_{i}}
$$

故

$$
\boldsymbol{F}_{q}=q \overrightarrow{\boldsymbol{E}}
$$

由（2）、（3）、（5）式，得

$$
\overrightarrow{\boldsymbol{E}}=\boldsymbol{E}_{0}=\frac{Q}{4 \pi \varepsilon_{0} R_{Q O}^{3}} \boldsymbol{R}_{Q O}
$$

可见，当点电荷 $Q$ 在球外时，它在球形区域内的平均电场强度即为它在球心处的电场强度，与球半径的大小无关。

若点电荷 $Q$ 在球内，设 $Q$ 与球心距离为 $R$ （即上述 $R_{Q O}$ ），并设球半径为 $r(r>R)$ ，则球电荷 $q$ 对点电荷 $Q$ 的作用力 $F_{Q}$ ，等于半径为 $R$ 的小球电荷 $\rho V_{R}\left(V_{R}\right.$ 是小球体积）对 $Q$ 的作用力，与内、外半径为 $R 、 r$ 的带电球壳对 $Q$ 的作用力之和，因后者为零，故

$$
\boldsymbol{F}_{Q}=\frac{\left(\rho V_{R}\right) Q}{4 \pi \varepsilon_{0} R_{O Q}^{3}} \boldsymbol{R}_{O Q}
$$

当 $Q$ 在球内时， $\boldsymbol{F}_{q}=-\boldsymbol{F}_{Q}$ 以及 $\boldsymbol{F}_{q}=q \overrightarrow{\boldsymbol{E}}$ 的关系仍成立。故当 $Q$ 在球内时，

$$
\begin{aligned}
\overrightarrow{\boldsymbol{E}} & =\frac{\boldsymbol{F}_{q}}{q}=-\frac{\boldsymbol{F}_{Q}}{q}=-\frac{1}{q} \cdot \frac{\rho V_{R} Q}{4 \pi \varepsilon_{0} R_{O Q}^{3}} \boldsymbol{R}_{O Q} \\
& =\frac{Q}{4 \pi \varepsilon_{0} R_{Q O}^{3}} \boldsymbol{R}_{Q O} \cdot \frac{1}{q} \cdot \frac{q}{\frac{4}{3} \pi r^{3}} \cdot \frac{4}{3} \pi R^{3} \\
& =\left\{\frac{Q}{4 \pi \varepsilon_{0} R_{Q O}^{3}} \boldsymbol{R}_{Q O}\right\} \frac{R^{3}}{r^{3}}=\frac{R^{3}}{r^{3}} \boldsymbol{E}_{0}<\boldsymbol{E}_{0}
\end{aligned}
$$

可见，当 $Q$ 在球内时，它在球形区域内的平均电场强度等于 $Q$ 在球心处的电场强度 $\boldsymbol{E}_{0}$ 乘上 $\frac{R^{3}}{r^{3}}$ 因子，其中 $r$ 是球半径， $R=R_{Q O}$ 是 $Q$ 与球心 $O$ 的距离。
![img-340.jpeg](img-340.jpeg)

1. 以 $C$ 为球心， $r=a$ 为半径作球时， $A$ 点和 $B$ 点均在球外，

$$
\overrightarrow{\boldsymbol{E}}=\overrightarrow{\boldsymbol{E}}_{A}+\overrightarrow{\boldsymbol{E}}_{B}=\boldsymbol{E}_{A C}+\boldsymbol{E}_{B C}
$$

![img-341.jpeg](img-341.jpeg)

电图 $1-8-1$如图所示，因 $A B C$ 为直角三角形， $\boldsymbol{E}_{A C} \perp \boldsymbol{E}_{B C}$ ，故

$$
\begin{aligned}
|\bar{E}| & =\sqrt{E_{A C}^{2}+E_{B C}^{2}}=\sqrt{\left(\frac{Q_{A}}{4 \pi \varepsilon_{0} R_{A C}^{2}}\right)^{2}+\left(\frac{Q_{B}}{4 \pi \varepsilon_{0} R_{B C}^{2}}\right)^{2}} \\
& =\frac{1}{4 \pi \varepsilon_{0}} \sqrt{\left[\frac{5 Q}{(5 a)^{2}}\right]^{2}+\left[\frac{12 Q}{(12 a)^{2}}\right]^{2}}=\left(\frac{1}{4 \pi \varepsilon_{0}}\right) \frac{13 Q}{60 a^{2}}
\end{aligned}
$$

2. 以 $C$ 为球心， $r-10 a$ 为半径作球时， $A$ 点在球内， $B$ 点在球外，故

$$
\bar{E}=\bar{E}_{A}+\bar{E}_{B}=E_{A C} \frac{(5 a)^{3}}{(10 a)^{3}}+E_{B C}
$$

即

$$
\begin{aligned}
|\bar{E}| & =\sqrt{\left[\frac{(5 a)^{3}}{(10 a)^{3}} E_{A C}\right]^{2}+E_{B C}^{2}} \\
& =\frac{1}{4 \pi \varepsilon_{0}} \sqrt{\left(\frac{1}{8} \cdot \frac{Q}{5 a^{2}}\right)^{2}+\left(\frac{Q}{12 a^{2}}\right)^{2}} \\
& =\left(\frac{1}{4 \pi \varepsilon_{0}}\right) \frac{\sqrt{109}}{120 a^{2}} Q<\left(\frac{1}{4 \pi \varepsilon_{0}}\right) \frac{13 Q}{60 a^{2}}
\end{aligned}
$$

【题9】 如电图1-9-1所示，在半径为 $R$ 、体电荷密度为 $\rho$ 的均匀带电球体内部挖去半径为 $R^{\prime}$的一个小球，小球球心 $O^{\prime}$ 与大球球心 $O$ 相距为 $a$ 。试求 $O^{\prime}$ 的电场强度，并证明空腔内电场均匀。
【分析】 把挖去空腔的带电球看作由带电大球 $(R, \rho)$ 与带异号电的小球 $\left(R^{\prime},-\rho\right)$ 构成。由高斯定理求出它们各自在 $O^{\prime}$ 的电场强度，再叠加即得 $\boldsymbol{E}_{O^{\prime}}$ 。这是利用不具有对称性的带电体的特点，把它凑成由若干具有对称性的带电体组成，使问题得以简化。

在小球内任取另一点 $P$ ，用同样方法求出 $\boldsymbol{E}_{p}$ ，比较 $\boldsymbol{E}_{p}$ 和 $\boldsymbol{E}_{O^{\prime}}$ ，即可证明空腔内电场是均匀的。采用矢量表述，可使证明简单明确。这是本题的启示。
![img-342.jpeg](img-342.jpeg)

电图 $1-9-1$
【解】 设均匀带电大球（无空腔）在 $O^{\prime}$ 点的电场强度为 $\boldsymbol{E}_{\text {大球， } O^{\prime}}$ ，作以 $O$ 点为中心以 $a$ 为半径的球形高斯面，由静电场的高斯定理，得

$$
\iint \boldsymbol{E}_{X \text { 球 }, O^{\prime}} \cdot \mathrm{d} \boldsymbol{S}=\left(E_{X \text { 球 }, O^{\prime}}\right) 4 \pi a^{2}=\frac{1}{\varepsilon_{0}} \cdot \frac{4 \pi}{3} a^{3} \rho
$$

故

$$
\boldsymbol{E}_{X \text { 球 }, O^{\prime}}=\frac{\rho}{3 \varepsilon_{0}} a
$$

式中 $a$ 是从 $O$ 点到 $O^{\prime}$ 点的矢量。
_ 同样，均匀带异号电的小球 $\left(R^{\prime},-\rho\right)$ 在球心 $O^{\prime}$ 点的电场强度为

$$
\boldsymbol{E}_{A \text { 球 }, O^{\prime}}=0
$$

$O^{\prime}$ 点的电场强度 $\boldsymbol{E}_{O^{\prime}}$ 为两者之和，即

$$
E_{O^{\prime}}=E_{\text {大球， } O^{\prime}}+E_{\text {小球， } O^{\prime}}=\frac{\rho}{3 \varepsilon_{0}} a
$$

如电图1-9-2所示，在小球内任取另一点 $P$ ，设 $O^{\prime} P$ 为 $\boldsymbol{b}, O P$ 为 $\boldsymbol{r}$ ，则 $P$ 点的电场强度 $\boldsymbol{E}_{P}$为

$$
\begin{aligned}
\boldsymbol{E}_{P} & =\boldsymbol{E}_{\text {大球, } P}+\boldsymbol{E}_{\text {小球 }, P}=\frac{\rho}{3 \varepsilon_{0}} \boldsymbol{r}+\frac{-\rho}{3 \varepsilon_{0}} \boldsymbol{b} \\
& =\frac{\rho}{3 \varepsilon_{0}}(\boldsymbol{r}-\boldsymbol{b})=\frac{\rho}{3 \varepsilon_{0}} \boldsymbol{a}
\end{aligned}
$$

可见

$$
\boldsymbol{E}_{P}=\boldsymbol{E}_{O}
$$

因 $P$ 点任取，故球形空腔内的电场是均匀的。
【讨论】值得注意的是，在均匀带电的介质球（大球）中完整地挖去一个球形空腔（小球），即使小球所在处成为无外加电荷的"电荷洞"，又使小球所在处成为无介质的"介质洞"。"电荷洞"中任一点的电场强度可看作带正电大球与带负电小球在该点产生的电场强度之和，利用 $\boldsymbol{D}$ 的高斯定理和 $\boldsymbol{D}=\varepsilon \boldsymbol{E}$ 得出"电荷洞"中各点的电场强度是均匀的，为 $\boldsymbol{E}_{1}=\frac{1}{3 \varepsilon} \rho \boldsymbol{a}$ ，式中 $\varepsilon$ 是介质的电容率（介电常数）， $\boldsymbol{a}$ 是大球和小球中心的距离， $\rho$ 是体电荷密度。 $\boldsymbol{E}_{1}$ 是考虑到小球所在处仍有介质的结果。再挖去介质，使小球所在处成为"介质洞"，由于有介质时极化电荷的影响是使小球所在处的电场强度减小，且小球所在处介质均匀极化，因此挖去"介质洞"后该处的电场强度应增大 $\varepsilon_{r}$ 倍，为 $\boldsymbol{E}=\varepsilon_{r} \boldsymbol{E}_{1}=\frac{1}{3 \varepsilon_{0}} \rho \boldsymbol{a}$ ，与本题答案一致。

顺便指出， $\boldsymbol{E}=\frac{1}{3 \varepsilon_{0}} \rho \boldsymbol{a}$ 的答案经验证，符合静电场的方程和边条件，是唯一正确的解。

【题10】 如电图1-10-1所示，把半径为 $R$ 的球体切为八等份，取其中一一份，使之均匀带电，电荷体密度为 $\rho$ 。试求此八分之一带电球体在球心 $O$ 处的电场强度大小 $E_{0}$ 。
【分析】带电球体可以看作是许多带电球面构成的。因此，求解本题时，可先讨论八分之一均匀带电球面在球心的电场强度，然后再通过叠加，计算八分之一均匀带电球体在球心的电场强度。

为了充分利用对称性，可将四个八分之一均匀带电球面拼成一个均匀带电半球面。通过空间对称性分析，设法建立每个八分之一均匀带电球面在球心的电场强度与均匀带电半球面在球心的电场强度之间的大小关系。

本章题 7 得出，均匀带电半圆在圆心的电场强度大小与半圆在直径方向的投影成正比，即与圆的直径成正比。由此产生联想，猜到均匀带电半球面在球心的电场强度大小与半球面在底平面上的投影成正比，即与底圆的面积成正比。

根据上述思路，本题即可求解。
顺便指出，本题是专为训练解题者如何将看似不对称的问题转化为对称的问题而设置的，因此，在求解过程中尽可能不使用积分运算。
【解】先讨论半径为 $r$ 、电荷面密度为 $\sigma(\sigma$ 为常量) 的半球面在球心 $O$ 的电场强度。

![img-343.jpeg](img-343.jpeg)

电图 $1-10-1$如电图 $1-10-2$ ，由于对称性，均匀带电半球面在球心 $O$ 的电场强度 $\boldsymbol{E}_{\circ}$ 必定沿 $x$ 方向。因此， $\boldsymbol{E}_{\circ}$ 可由半球面上各部分电荷在 $O$ 点的电场强度的 $x$ 分量求和得出。

在半球面上任取面积为 $\mathrm{d} S$ 的面元，其上的电量为 $\sigma \mathrm{d} S$ ，它在 $O$ 点产生的电场强度表为 $\mathrm{d} \boldsymbol{E}$ 。如电图 1-10-2，将半球面绕 $x$ 轴旋转，总可以使得 $\mathrm{d} \boldsymbol{E}$ 刚好落在电图 $1-10-2$ 的纸平面上，于是相应的面元 $\mathrm{d} S$ 在电图 $1-10-2$ 中便可用一小段圆弧代表，整个半球面相应地用半圆代表。设电场强度 $\mathrm{d} \boldsymbol{E}$ 与 $x$ 轴的夹角为 $\phi$ ，则它的 $x$ 分量 $\mathrm{d} E_{x}$ 为

$$
\mathrm{d} E_{x}=\mathrm{d} E \cos \phi=\frac{\sigma \mathrm{d} S}{4 \pi \varepsilon_{0} r^{2}} \cos \phi
$$

由于面元极小，可视为平面的一部分，根据立体几何中的"面积投影定理"， $\mathrm{d} S$ 在半球底圆面上的投影 $\mathrm{d} S_{/ /}$为

$$
\mathrm{d} S_{/ /}=\mathrm{d} S \cos \phi
$$

于是

$$
\mathrm{d} E_{x}=\frac{\sigma}{4 \pi \varepsilon_{0} r^{2}} \mathrm{~d} S_{/ /}
$$

均匀带电半球面在 $O$ 点的电场强度 $\boldsymbol{E}_{\circ}$ 的大小，等于各面元在 $O$ 点电场强度的 $x$ 分量之和，即

$$
\begin{aligned}
E_{\circ}^{\prime \prime} & =\sum \mathrm{d} E_{x} \\
& =\frac{\sigma}{4 \pi \varepsilon_{0} r^{2}} \sum \mathrm{~d} S_{/ /}
\end{aligned}
$$

![img-344.jpeg](img-344.jpeg)

电图 $1-10-2$
![img-345.jpeg](img-345.jpeg)

电图 $1-10-3$

其中 $\sum \mathrm{d} S_{/ /}$就是半球面在底圆面上的投影，即为底圆面积，故

$$
\sum \mathrm{d} S_{/ /}=\pi r^{2}
$$

代入，得

$$
E_{\circ}^{\prime \prime}=\frac{\sigma}{4 \varepsilon_{0}}
$$

上式表明，均匀带电半球面在球心 $O$ 点的电场强度的大小与其半径的大小无关。
半球面可由四个八分之一球面拼成。每一个均匀带电的八分之一球面在球心 $O$ 的电场强度方向对称，大小相同，它们的矢量和就是上面解出的 $\boldsymbol{E}_{\circ}$ 。如电图 $1-10-3$ 所示，一个八分之一球面在 $O$ 点的电场强度表为 $\boldsymbol{E}_{0}^{\prime}$ ，则 $\boldsymbol{E}_{0}^{\prime}$ 的 $x$ 分量 $\boldsymbol{E}_{0 x}^{\prime}$ 与 $\boldsymbol{E}_{0}^{\prime}$ 的大小 $\boldsymbol{E}_{\circ}^{\prime}$ 之间应有下述关系，

$$
E_{0}^{\prime}=4 E_{0 x}^{\prime}
$$

由电图 $1-10-3$ ，因对称性， $\boldsymbol{E}_{0}^{\prime}$ 与 $x 、 y 、 z$ 轴的夹角应相同，即 $\boldsymbol{E}_{0}^{\prime}$ 的三个分量 $\boldsymbol{E}_{0 x}^{\prime} 、 \boldsymbol{E}_{0 y}^{\prime} 、 \boldsymbol{E}_{0 z}^{\prime}$应相同。因此， $\boldsymbol{E}_{0}^{\prime}$ 与 $\boldsymbol{E}_{0 x}^{\prime}$ 的关系相当于立方体对角线与边长的关系，为

$$
E_{0}^{\prime}=\sqrt{3} E_{0 x}^{\prime}
$$

由以上三式，得

$$
E_{0}^{\prime}=\frac{\sqrt{3} \sigma}{16 \varepsilon_{0}}
$$

这就是均匀带电的电荷面密度为 $\sigma$ 的八分之一球面在其球心 $O$ 的电场强度 $\boldsymbol{E}_{0}^{\prime}$ 的大小。上式表明， $E_{0}^{\prime}$ 与球面半径的大小无关。

最后，把半径为 $R$ 、电荷体密度为 $\rho$ 的八分之一球体（ $\rho$ 为常量），看作由一系列很薄的八分之一球壳组成。各球壳的内半径统一表为 $r$ ，厚度表为 $\mathrm{d} r$ ，面积表为 $S(r)$ ，其中 $r$ 的变化范围为从 $O$ 到 $R$ ，则球壳的体积为

$$
\mathrm{d} V=S(r) \mathrm{d} r
$$

球壳所带电量为

$$
\mathrm{d} Q=\rho \mathrm{d} V=\rho S(r) \mathrm{d} r
$$

把很薄的八分之一球壳当作八分之一球面，则球面的电荷面密度应为

$$
\sigma(r)=\frac{\mathrm{d} Q}{S(r)}=\rho \mathrm{d} r
$$

由上面的结果，这些八分之一球面在球心 $O$ 的电场强度的大小为

$$
\begin{aligned}
\mathrm{d} E_{0} & =\frac{\sqrt{3} \sigma(r)}{16 \varepsilon_{0}} \\
& =\frac{\sqrt{3} \rho \mathrm{~d} r}{16 \varepsilon_{0}}
\end{aligned}
$$

所有这些 $\mathrm{d} \boldsymbol{E}_{0}$ 的方向相同，因此，均匀带电的八分之一球体在球心 $O$ 的电场强度的大小为

$$
E_{0}=\sum \mathrm{d} E_{0}=\frac{\sqrt{3} \rho}{16 \varepsilon_{0}} \sum_{r=0}^{R} \mathrm{~d} r=\frac{\sqrt{3} \rho R}{16 \varepsilon_{0}}
$$

上式表明， $E_{0}$ 与球半径 $R$ 成正比。
【题11】在惯性系 S 中有匀强电场E，其方向如图所示。在电场中与E平行的一条几何直线（图中圆虚线）上，有两个静止的小球A和B。两小球的质量均为 $m$ ， A 球所带电量为 $Q(Q>0)$ ， B 球不带电，开始时两球相距为 $l$ 。在电场的作用下， A 球开始沿直线运动，并与 B 球发生弹性正碰撞，从而使 B 球也参与运动。设在各次碰撞过程中，A球和B球之间并无电量的转移。设万有引力可略去不计。

试证明，A 球与 B 球相邻两次碰撞之间的时间间隔相同，并求出该时间间隔 $T$ 。
【分析】在惯性系 $S$ 中，带电小球 A 在电场力的作用下，从静止开始沿电场方向（即向右）以加速度 $a$ 作匀加速直线运动，经过 $t$ 的时间，走过 $l$ 的距离后，速度达到 $v$ 时，与静止的不带电小球 B 相碰，这是第一次碰撞。由于两球质量相同且为弹性正碰撞，最后交换速度，即 A 球静止，B 球以 $v$ 沿电场方向向右运动，磁后，B 球以 $v$ 作匀速直线运动， A 球则再次从静止开始，以 $a$ 作匀加速直线运动，先加速到 $v$ ，尔后继续加速直至追上 B球，发生第二次碰撞，磁后依然交换速度，然后 A 球以 $v$ 开始加速运动， B球则以 $v_{1}$ （A球追上 B 球作第二次碰撞前 A 球的速度）作匀速运动，直至 A球追上 B 球，发生第三次碰撞。如此等等，无须赘述。根据以上分析，可以逐一计算第一次与第二次碰撞之间的时间间隔，第二次与第三次碰撞之间的时间间隔，等等，并注意计算结果的规律性，即可完成本题的证明，但这

![img-346.jpeg](img-346.jpeg)

电图1-11-1

种做法太繁，有没有更简明的证法呢？

不难发现，在惯性系 $S$ 中，在任意两次相邻的碰撞之间，A 球总是以相同的加速度 $a$ 作匀加速直线运动，B球则总是作匀速直线运动，但是，在不同次碰撞后，A球的初、终速度以及B球的速度有所不同，而这正是计算的麻烦所在。

由此想到，在第一次碰撞后，若改取随 B 球一起运动的惯性系 $S_{1}$ ，则在 $S_{1}$ 系中，B球静止；A球以初速 $v$ 向左（与 $E$ 反向）运动，而向右的加速度 $a$ 不变，即 A 球以初速 $v$ 向左以 $a$ 作匀减速运动（注意，在不同惯性系中，A球的加速度相同）。这样，经过 $t$ 时间后，A 球速度减为零，与 B 球相距 $l$ （上述 $v, a, t, l$ 的含义见第一段）。然后，A球再从静止向右以 $a$ 加速运动，再经 $t$ 时间后，速度达到 $v$ ，走过 $l$ 的距离，与 B 球第二次碰撞。所以，第一次和第二次碰撞之间的时间间隔是 $2 t$ 。第二次碰撞后，A 球与 B 球仍交换速度，即在 $S_{1}$ 系中，B 球以 $v$ 向右运动，A球静止。如法炮制，再改取随 B 球一起运动的惯性系 $S_{2}$ ，就会出现与上面完全相同的情形。重复上述讨论，可知 A 球与 B 球将再经 $t+t=2 t$ 的时间后，第三次碰撞，即第二次和第三次碰撞之间的时间间隔亦是 $2 t$ 。总之，A 球与 B 球任意两次相邻碰撞之间的时间间隔是相同的，均为 $2 t$ 。

把选定的作为参照的惯性系，从 $S$ 系变换到 $S_{1}$ 系，再变换到 $S_{2}$ 系，等等，究竟起了什么作用呢？它实际上是把在 $S$ 系中经各次碰撞后，A球的不同初速和终速的匀加速直线运动以及 B 球的不同速度的匀速直线运动，依次变换到 $S_{1}$ 系和 $S_{2}$ 系等等。结果是出现了雷同的简单情形，即在 $S_{1}$ 和 $S_{2}$ 系中，B 球总是静止，A球则先以 $v$ 反向减速为零，然后再加速返回作下一次碰撞。于是问题迎刃而解。由此题，可以体会参照系变换的威力以及如何变换才能使问题简化。
【解】A 球带电 $Q>0$ ，在电场力 $Q E$ （指向右方）的作用下，其加速度的方向指向右方，即与 $E$同向，加速度的大小为

$$
a=\frac{Q E}{m}
$$

在 $S$ 系中，A 球从静止开始，以 $a$ 作匀加速直线运动，经 $t$ 时间，走过 $l$ 的路程，速度达到 $v$ ，与 B球第一次碰撞，

$$
\begin{gathered}
t=\sqrt{\frac{2 l}{a}}=\sqrt{\frac{2 m l}{Q E}} \\
v=a t=\sqrt{\frac{2 Q E l}{m}}
\end{gathered}
$$

磁后，A 球与 B 球交换速度，即在 $S$ 系中，A 球静止，B 球以 $v$ 向右匀速直线运动。
变换到随 B 球一起运动的惯性系 $S_{1}$ ，则在 $S_{1}$ 系中，第一次碰撞后，B 球静止，A 球以 $v$ 向左减速运动，经 $t$ 时间后，A 球速度减为零，与 B 球相距 $l$ ，然后 A 球从静止加速返回，又经 $t$ 时间，速度增为 $v$ (向右), 走过 $l$ 路程, 与 B 球第二次碰撞、故第一次与第二次碰撞之间的时间间隔为

$$
T=2 t=2 \sqrt{\frac{2 m l}{Q E}}
$$

第二次碰撞后，再变换到随 B 球一起运动的惯性系 $S_{2}$ ，同样的讨论得出，第二次与第三次碰撞之间的时间间隔也是上述 $T$ 。如此重复，可知 A 球和 B 球任意两次相邻碰撞之间的时间间隔相同，均为 $T$ 。

【题 12】 在 $-d \leqslant x \leqslant d$ 的空间区域内，电荷体密度 $\rho>0$ 为常量、其他区域均为真空。若在 $x=2 d$ 处将质量为 $m$ 、电量为 $q(q<0)$ 的带电质点自静止释放。试问经多长时间它能到达 $x=0$ 位置、设带电质点只受电力，其余引力、阻力等均可忽略。
【分析】带电质点的运动决定于所受电力，首先要弄清楚电场的分布。从 $-d$ 到 $d$ 的全部有电荷区域相当于无穷大均匀带电平板，其面电荷密度可由 $\rho$ 和 $d$ 得出，它在 $x>d$ 区域（以及 $x<$ $-d$ 区域）产生均匀电场，因此带电质点从 $2 d$ 到 $d$ 的运动是初速为零的匀加速直线运动，所需时间 $t_{1}$ 易求。

当带电质点进入 $0 \leqslant x \leqslant d$ 区域，例如到达其中任意位置 $x$ 时，可将全部有电荷的区域分为从 $-d$ 到 $x$ 的区域 I 以及从 $x$ 到 $d$ 的区域 II 。它们相当于两个无穷大均匀带电平板，区域 I 与区域 II 对带电质点的作用力反向，前者较大后者较小，随着带电质点不断接近 $x=0$ ，前者减小后者增大（均指绝对值），换言之，在 $0 \leqslant x \leqslant d$ 区域，带电质点受到变力的作用，继续加速。

由于从 $-d$ 到 $x$ 的区域 I 和从 $x$ 到 $d$ 的区域 II 相当于两个无穷大均匀带电平板，前者的面电荷密度 $\sigma_{\mathrm{I}}$ 与 $\rho$ 和 $(d+x)$ 成正比，后者的 $\sigma_{\text {II }}$ 则与 $\rho$ 和 $(d-x)$ 成正比， $r$ 点的电场强度是两者之和，应与 $x$ 成正比且指向 $x$ 减小的方向。因此，带电质点从 $d$ 到 0 受到的非均匀电力是线性回复力，带电质点应作简谐振动，由此从 $d$ 到 0 所需时间 $t_{2}$ 可求。

在求解时，请注意两阶段的"衔接"。由于带电质点到达 $x=d$ 处的速度不为零，在写出简谐振动表达式时，应注意时间零点的选择及相应的初始条件，不要搞错。
【解】设 $x>d$ 区域的电场强度为 $E_{1}$ ，从 $-d$ 到 $d$ 的全部有电荷的区域相当于无穷大均匀带电平板，在平板上取单位面积 $S_{0}=1$ ，则带电平板的面电荷密度为

$$
\sigma=2 d S_{0} \rho=2 d \rho
$$

于是 $E_{1}$ 的方向指向 $x$ 轴的正方向，大小为

$$
E_{1}=\frac{\sigma}{2 \varepsilon_{0}}=\frac{\rho d}{\varepsilon_{0}}
$$

设 $0 \leqslant x \leqslant d$ 区域的电场强度为 $E_{2}$ 。如图，把从 $-d$ 到 $d$ 的全部有电荷的区域分为从 $-d$ 到 $x$ 的区域 I 和从 $x$ 到 $d$ 的区域 II 。区域 I 和区域 II 分别相当于面电荷密度为

$$
\sigma_{1}=(d+x) \rho \quad \text { 和 } \quad \sigma_{\mathrm{II}}=(d-x) \rho
$$

![img-347.jpeg](img-347.jpeg)

电图 $1-12-1$

的无穷大均匀带电平板，它们在 $x$ 点的电场强度 $E_{1}$ 的方向指向 $x$ 轴正方向， $E_{\text {II }}$ 的方向指向 $x=0$ 点，其大小分别为

$$
E_{1}=\frac{\sigma_{1}}{2 \varepsilon_{0}}=\frac{\rho(d+x)}{2 \varepsilon_{0}}, \quad E_{\mathrm{II}}=\frac{\sigma_{\mathrm{II}}}{2 \varepsilon_{0}}=\frac{\rho(d-x)}{2 \varepsilon_{0}}
$$

因此, $x$ 点的电场强度为

$$
E_{2}=E_{\mathrm{I}}+E_{\mathrm{II}}
$$

$\boldsymbol{E}_{2}$ 的方向指向 $x$ 轴的正方向，其大小为

$$
E_{2}=E_{\mathrm{I}}-E_{\mathrm{II}}=\frac{\rho x}{\varepsilon_{0}}
$$

由此可见， $x>d$ 区域的 $\boldsymbol{E}_{1}$ 是均匀电场，带电质点作匀加速直线运动 $.0 \leqslant x \leqslant d$ 区域的 $\boldsymbol{E}_{2}$ 是非均匀电场，它对带电质点的作用力是线性回复力，带电质点作简谐振动，

带电质点 $q(q<0)$ 在 $x=2 d$ 到 $x=d$ 区域受电场 $\boldsymbol{E}_{1}$ 的作用力 $\boldsymbol{F}_{1}$ ，其方向指向 $x=0$ 点，其大小为

$$
F_{1}=-q E_{1}=-\frac{q \alpha d}{\varepsilon_{0}}
$$

带电质点的加速度为

$$
a_{1}=\frac{F_{1}}{m}=-\frac{q \alpha d}{\varepsilon_{0} m}
$$

从 $x=2 d$ 点静止出发，经匀加速直线运动到达 $x=d$ 点所需的时间为

$$
t_{1}=\sqrt{\frac{2 d}{a_{1}}}=\sqrt{\frac{2 \varepsilon_{0} m}{-q \rho}}
$$

到达 $x=d$ 点时的速度 $v_{1}$ 的方向指向 $x=0$ 点，其大小为

$$
v_{1}=a_{1} t_{1}=\sqrt{\frac{-2 q \rho}{\varepsilon_{0} m}} d
$$

带电质点从 $x=d$ 到 $x=0$ 受到的作用力 $\boldsymbol{F}_{2}$ 的方向指向 $x=0$ 点，其大小为

$$
F_{2}=q E_{2}=\frac{q \rho}{\varepsilon_{0}} x=-k x
$$

式中

$$
k=-\frac{q \rho}{\varepsilon_{0}}>0
$$

可见 $F_{2}$ 是线性回复力，带电质点在它的作用下作简谐振动，其位移与时间 $t^{\prime}$ （注意， $t^{\prime}$ 的零点取 $t_{1}$ 时刻，即取带电质点到达 $x=d$ 处的时刻为 $t^{\prime}$ 的零点）的关系为

$$
x=A \cos \left(\omega t^{\prime}+\varphi\right)
$$

式中圆频率 $\omega$ 为

$$
\omega=\sqrt{\frac{k}{m}}=\sqrt{\frac{-q \rho}{\varepsilon_{0} m}}
$$

简谐振动的初始条件为

$$
\left\{\begin{array}{l}
x_{0}=A \cos \varphi=d \\
v_{0}=-A \omega \sin \varphi=-v_{1}=-\sqrt{\frac{-2 q \rho}{\varepsilon_{0} m}} d
\end{array}\right\}
$$

由此得出

$$
\tan \varphi=-\frac{v_{0}}{\omega x_{0}}=\sqrt{2}
$$

$\varphi$ 可在第 I 和第 III 象限取值，因

$$
\cos \varphi=\frac{d}{A}>0
$$

故 $\varphi$ 应在第 I 象限取值，为

$$
\varphi=\arc\tan \sqrt{2}
$$

带电质点从 $x=d$ 到 $x=0$ 所需时间 $t_{2}$ 应满足

$$
x\left(t_{2}\right)=A \cos \left(\omega t_{2}+\varphi\right)=0
$$

故

$$
\omega t_{2}+\varphi=\frac{\pi}{2}
$$

或

$$
t_{2}=\frac{1}{\omega}\left(\frac{\pi}{2}-\varphi\right)=\left(\frac{\pi}{2}-\arc \tan \sqrt{2}\right) \sqrt{\frac{\varepsilon_{0} m}{-q \rho}}
$$

因

$$
\frac{\pi}{2}-\arc \tan \sqrt{2}=\arc \sin \frac{\sqrt{3}}{3}
$$

故

$$
t_{2}=\left(\arc \sin \frac{\sqrt{3}}{3}\right) \sqrt{\frac{\varepsilon_{0} m}{-q \rho}}
$$

因此，带电质点从 $x=2 d$ 到 $x=0$ 所需的时间为

$$
\begin{aligned}
t & =t_{1}+t_{2} \\
& =\left(\sqrt{2}+\arc \sin \frac{\sqrt{3}}{3}\right) \sqrt{\frac{\varepsilon_{0} m}{-q \rho}}=2.03 \sqrt{\frac{\varepsilon_{0} m}{-q \rho}}
\end{aligned}
$$

【题 13】在半径为 $R$ 的细圆环上分布着不能移动的正电荷，总电量为 $Q$ 。

1. 如果某个点电荷 $Q_{1}(\neq 0)$ 可在环中指定直径 $A O B$ 线段内作匀速直线运动，试确定圆环上电荷线密度 $\lambda$ 的分布。
2. 取 $x$ 轴沿直径 $A O B$, 原点 $O$ 在环中心. 将第一问中的点电荷 $Q_{1}$ 放在与 $O$ 点相距 $r_{1}$ 的 $x$ 左半轴上某点. 设电量 $Q_{1}$ 的绝对值为 $Q$ 的 $\nu$ 倍. 能否在 $x$ 右半轴上再放一个非零电量的点电荷 $Q_{2}$, 使得这两个点电荷及圆环均可保持不动. 设两点电荷都不与环接触, 设环的质量分布均匀. 试求 $Q_{2}$ 及其位置。
3. 把上述两个点电荷 $Q_{1}$ 和 $Q_{2}$ 固定在第二问中确定的位置上, 同时改变它们的电荷符号但保持电量大小不变. 再使环 (所带电量 $Q$ 及分布均不变) 沿 $x$ 轴的正方向平移一小量 $\delta$, 然后静止地释放. 试定量讨论环的运动. 设环的质量为 $m$.

在求解本题时，只需考虑电荷间的库仑作用，其他相互作用均可略。
提示：把所求的圆环上电荷分布与球面上均匀电荷分布相联系。【分析】1. 为使点电荷 $Q_{1}$ 能沿环中某直径 $A O B$ 作匀速直线运动, 要求在 $A O B$ 上各点的电场强度均为零，这就是确定圆环上电荷分布的根据和条件。

求解的关键在于有所联想，即能把所求的圆环上电荷分布与球面上均匀的电荷分布相联系。
![img-348.jpeg](img-348.jpeg)

电图1-13-1
![img-349.jpeg](img-349.jpeg)

电图 $1-13-2$

如所周知，若电量 $Q$ 均匀分布在半径为 $R$ 的球面上，如电图 $1-13-1$ 所示，则球内的电场强度处处为零，直径 $A O B$ 上任一点的电场强度当然也是零。如电图 $1-13-1$ ，用一系列与 $A O B$垂直的平行平面，把球面分割成一系列环状小带（电图 $1-13-1$ 中的 $P_{1} P_{2}$ 就是环状小带之一）。由于对称性，任一小带在直径 $A O B$ 上任一点 $S$ 产生的电场强度方向应沿 $x$ 轴，由电场强度叠加原理，全部环状小带在 $S$ 点产生的电场强度之和为零。

本题的电荷 $Q$ 分布在半径为 $R$ 的圆环上而不是在球面上。但可以设想，如电图 $1-13-2$ ，如果在圆环上相应地任意取 $P_{1}$ 和 $P_{2}$ 两线元 $\left(P_{1} P_{2}\right.$ 与直径 $A O B$ 垂直），并且使 $P_{1}$ 和 $P_{2}$ 两线元所带的电量即为均匀带电球面相应环状小带的上半带和下半带所带的电量（相当于把环状小带上半带和下半带的电量分别集中在 $P_{1}$ 和 $P_{2}$ 两线元上），则圆环的 $P_{1}$ 和 $P_{2}$ 两线元在 $S$ 点产生的电场强度应与均匀带电球面相应环状小带在 $S$ 点产生的电场强度相同。按这种办法，把半径为 $R$ 、电量为 $Q$ 的均匀带电球面各环状小带上的电量，分配在半径为 $R$ 、电量为 $Q$ 的圆环的各相应线元上。则按此电荷分布的圆环在直径 $A O B$ 上产生的电场强度，与均匀带电球面在 $A O B$ 上产生的电场强度相同，即 $A O B$ 上各点的电场强度均为零，满足第一问的要求。

同样，按上述电荷分布的圆环在环外 $A O B$ 延长线上各点产生的电场强度，也应等于均匀带电球面在该点产生的电场强度。由于这些点在球外，其电场强度即为在 $O$ 点的点电荷 $Q$ 在该点产生的电场强度。
2. 本题涉及三个带电体，电量为 $Q$ 的圆环，其电荷分布已在第一问中求出，点电荷 $Q_{1}$ 和 $Q_{2}, Q_{1}$ 和 $Q_{2}$ 均在沿直径 $A O B$ 的 $x$ 轴上，要求三者都静止不动。显然， $Q_{1}$ 与 $Q_{2}$ 均只能在环外，若 $Q_{1}$ 在环内，由第一问，圆环 $Q$ 对 $Q_{1}$ 的作用力为零，但 $Q_{2}$ 对 $Q_{1}$ 的作用力不为零，故 $Q_{1}$ 不可能静止. $Q_{2}$ 同理，又因 $Q_{1}$ 和 $Q_{2}$ 不与环接触，即不在环上，故 $Q_{1}$ 和 $Q_{2}$ 均在环外，它们与环中心 $O$ 的距离 $r_{1}$ 和 $r_{2}$ 均应大于环半径 $R$ 。

由于圆环在环外的电场强度相当于 $Q$ 集中在 $O$ 点时产生的电场强度。因此， $Q 、 Q_{1} 、 Q_{2}$ 的相互作用，相当于三个共线的点电荷之间的相互作用。

题设 $Q_{1}$ 和 $Q_{2}$ 在 $Q$ 的两侧，又设 $Q>0$ ，为了使三者都静止不动，唯一的可能是 $Q_{1}<0$ 及$Q_{2}<0$ ，即均带负电，于是问题可解，
3. 根据所设条件，由圆环稍稍平移时所受作用力为线性回复力，可知圆环将围绕平衡位置作简谐振动。
[解] 1. 根据分析，为使带电圆环在直径 $A O B$ 上电场强度处处为零，如电图 1-13-3，圆环上任一线元 $R \mathrm{~d} \varphi$ 所带电量 $\mathrm{d} Q$ 应等于半径亦为 $R$ 、电量亦为 $Q$ 的均匀带电球面相应环状小带所带电量之半，即

$$
\mathrm{d} Q=\frac{1}{2} \sigma \mathrm{~d} S=\frac{1}{2} \cdot \frac{Q}{4 \pi R^{2}} \cdot 2 \pi R^{2} \sin \varphi \mathrm{~d} \varphi=\frac{Q}{4} \sin \varphi \mathrm{~d} \varphi
$$

式中 $\sigma=\frac{Q}{4 \pi R^{2}}$ 是均匀带电球面的面电荷密度， $\mathrm{d} S$ 是球面上环状小带的面积。
因此，圆环上电荷线密度的分布应为

$$
\lambda=\lambda(\varphi)=\frac{\mathrm{d} Q}{R \mathrm{~d} \varphi}=\frac{1}{4 R} Q \sin \varphi
$$

式中 $R$ 是环半径， $Q$ 是环上总电量， $\varphi$ 如电图1-13-3所示。
![img-350.jpeg](img-350.jpeg)

电图1-13-3
![img-351.jpeg](img-351.jpeg)

电图 $1-13-4$
2. 根据分析，相当于三个共线的点电荷相互作用达到平衡，如电图 $1-13-4$ 所示，其中 $Q$ $>0,-Q_{1}<0,-Q_{2}<0\left(Q_{1}\right.$ 和 $Q_{2}$ 都表示电量的绝对值), $-Q_{1}$ 和 $-Q_{2}$ 分别在 $Q$ 的两侧。在电图1-13-4中，把 $-Q_{1}$ 与 $Q,-Q_{2}$ 与 $Q,-Q_{1}$ 与 $-Q_{2}$ 之间的作用力分别表为 $F_{1}, F_{2}$ ， $F_{3}$ ，它们的方向已在电图 $1-13-4$ 中标明。

三点电荷均静止不动，要求

$$
F_{1}=F_{2}=F_{3}
$$

其中

$$
\begin{gathered}
F_{1}=\frac{Q_{1} Q}{4 \pi \varepsilon_{0} r_{1}^{2}}, \quad F_{2}=\frac{Q_{2} Q}{4 \pi \varepsilon_{0} r_{2}^{2}} \\
F_{3}=\frac{Q_{1} Q_{2}}{4 \pi \varepsilon_{0}\left(r_{1}+r_{2}\right)^{2}}
\end{gathered}
$$

故

$$
\frac{Q_{1} Q}{r_{1}^{2}}=\frac{Q_{2} Q}{r_{2}^{2}}=\frac{Q_{1} Q_{2}}{\left(r_{1}+r_{2}\right)^{2}}
$$

因题设

$$
Q_{1}=\nu Q
$$

代入, 得

$$
\frac{\nu Q}{r_{1}^{2}}=\frac{Q_{2}}{r_{2}^{2}}=\frac{\nu Q_{2}}{\left(r_{1}+r_{2}\right)^{2}}
$$

由后一等式解出

$$
r_{2}=\frac{r_{1}}{\sqrt{\nu}-1}
$$

代入前一等式，得

$$
Q_{2}=\frac{r_{2}^{2}}{r_{1}^{2}} Q_{1}=\frac{\nu}{(\sqrt{\nu}-1)^{2}} Q
$$

因 $r_{2}>R, Q_{2}$ 有限，由以上两式可知， $\nu$ 应满足

$$
\nu<\left(1+\frac{r_{1}}{R}\right)^{2}, \nu \neq 1
$$

因此，仅当 $r_{1}>R, Q_{1}$ 为负电荷，且 $\nu$ 满足上式时，才能在 $O$ 点右侧 $x$ 轴上距离 $O$ 点为 $r_{2}=$ $\frac{r_{1}}{\sqrt{\nu}-1}$ 处，故上电量为 $Q_{2}=\frac{\nu Q}{(\sqrt{\nu}-1)^{2}}$ 的负电荷，使得这两个点电荷以及带电圆环 $Q$ 均静止不动。
3. 现在 $Q 、 Q_{1} 、 Q_{2}$ 均为正电荷， $Q$ 与 $Q_{1}$ 和 $Q_{2}$ 的距离分别为 $r_{1}$ 和 $r_{2}, Q_{1}$ 和 $Q_{2}$ 固定， $Q$ 平衡。当圆环 $Q$ 沿 $x$ 轴正向偏离小量 $x$ 时，所受作用力为

$$
\begin{aligned}
F_{x} & =\frac{Q_{1} Q}{4 \pi \varepsilon_{0}\left(r_{1}+x\right)^{2}}-\frac{Q_{2} Q}{4 \pi \varepsilon_{0}\left(r_{2}-x\right)^{2}} \\
& =\frac{Q}{4 \pi \varepsilon_{0}}\left[\frac{Q_{1}}{r_{1}^{2}\left(1+\frac{x}{r_{1}}\right)^{2}}-\frac{Q_{2}}{r_{2}^{2}\left(1-\frac{x}{r_{2}}\right)^{2}}\right]
\end{aligned}
$$

式中

$$
\begin{gathered}
\left(1+\frac{x}{r_{1}}\right)^{-2} \approx 1-\frac{2 x}{r_{1}} \\
\left(1-\frac{x}{r_{2}}\right)^{-2} \approx 1+\frac{2 x}{r_{2}} \\
\frac{Q_{1}}{r_{1}^{2}}=\frac{Q_{2}}{r_{2}^{2}} \\
r_{2}=\frac{r_{1}}{\sqrt{\nu}-1}
\end{gathered}
$$

代入，得

$$
F_{x}=-k x
$$

其中

$$
k=\frac{Q}{2 \pi \varepsilon_{0}}\left(\frac{Q_{1}}{r_{1}^{3}}+\frac{Q_{2}}{r_{2}^{3}}\right)=\frac{Q}{2 \pi \varepsilon_{0}}\left[\frac{\nu Q}{r_{1}^{3}}+\frac{\nu Q(\sqrt{\nu}-1)}{r_{1}^{3}}\right]=\frac{\nu \sqrt{\nu} Q^{2}}{2 \pi \varepsilon_{0} r_{1}^{3}}
$$

可见，当圆环从平衡位置 $O$ 沿 $x$ 轴有小偏离 $x$ 时，将在线性回复力 $F_{x}=-k x$ 的作用下围绕 $O$ 点作简谐振动，其振幅为初始的位移 $\delta$ ，其圆频率 $\omega$ 和周期 $T$ 分别为

$$
\begin{aligned}
\omega & =\sqrt{\frac{k}{m}}=\sqrt{\frac{\nu \sqrt{\nu} Q^{2}}{2 \pi \varepsilon_{0} r_{1}^{3} m}} \\
T & =\frac{2 \pi}{\omega}=2 \pi \sqrt{\frac{2 \pi \varepsilon_{0} r_{1}^{3} m}{\nu \sqrt{\nu} Q^{2}}}
\end{aligned}
$$

【题 14】如图，在平沦为 $R$ 。质量为 $m$ 且均匀分布的细圆环上，均匀地分布着总电量为 $q$ 的正电荷。在通过圆环中心 $O$ 点且垂直于圆环平面的 $x$ 轴上有两个固定的点电荷，它们分别在圆环的两侧，与环心的距离均为 $L$ ，各带有电量为 $Q$ 的正电荷。设圆环只能沿 $x$ 轴平动，显然，在上述条件下，圆环处于平衡位置。
1. 试讨论该平衡位置的稳定性（即在什么情况下为稳定平衡位置，在什么情况下为不稳定平衡位置）。
2. 若该位置是稳定平衡位置。试求圆环在其附近作微小振动的周期。
![img-352.jpeg](img-352.jpeg)

电图 $1-14-1$

【分析】 本题讨论带电体所处平衡位置的稳定性，是电学与力学的综合题。

在讨论带电圆环所受电场力时，应考虑环上的电荷分布。在讨论圆环受力运动时，因仅限于平动，可将环看作质点。如图，取圆环中心 $O$ 为坐标原点，取垂直环平面且通过两点电荷的轴线为 $x$ 轴。显然，带电圆环所受两点电荷电力的合力为保守力，相应地可引入势能。当圆环沿 $x$ 轴平动，使环心处于任意 $x$ 位置时，它所受的电力合力 $F_{x}$ 及相应的势能 $E_{\mathrm{p}}(x)$ 的关系为

$$
F_{x}=-\frac{\mathrm{d} E_{\mathrm{p}}(x)}{\mathrm{d} x}=-E_{p}^{\prime}(x)
$$

式中的一撤表示对 $x$ 的微商，下同。
在力学中曾指出，由势能曲线 $E_{\mathrm{p}}(x)$ 即可确定平衡位置及其是否稳定。平衡位置 $x$ 由 $E_{p}^{\prime}(x)=0$ ，即由 $F_{x}=0$ 确定。若平衡位置 $x$ 满足 $E_{p}^{\prime \prime}(x)>0$ ，即 $F_{x}^{\prime}<0$ ，则为稳定平衡位置。若平衡位置 $x$ 满足 $E_{p}^{\prime \prime}(x)<$ ，即 $F_{x}^{\prime}>0$ ，则为不稳定平衡位置。若平衡位置 $x$ 满足 $E_{p}^{\prime \prime}(x)=$ 0 ，即 $F_{x}^{\prime}=0$ ，当 $(a)$ 若在平衡位置两侧均有 $E_{0}^{\prime}(x)>0$ ，即 $F_{x}^{\prime}<0$ ，则为稳定平衡位置； $(b)$ 若在平衡位置两侧中至少有一侧为 $E_{p}^{\prime \prime}(x)<0$ ，即 $F_{x}^{\prime}>0$ ，则为不稳定平衡位置。

这就是确定平衡位置，讨论其是否稳定的根据。本题即可据此分析求解。
【解】1. 如图，带电圆环在右侧点电荷 $Q$ 处的电场强度指向正 $x$ 方向，在左侧点电荷 $Q$ 处的电场强度指向负 $x$ 方向，其大小均为

$$
\frac{q L}{4 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{3 / 2}}
$$

因而两个点电荷所受带电圆环的电力（排斥力）均为

$$
\frac{q Q L}{4 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{3 / 2}}
$$

由牛顿第三定律，带电圆环所受两个点电荷的电力（排斥力）亦如上式。因两力反向，抵消，故带电圆环在图中的 $x=0$ 位置是平衡位置。当带电圆环沿 $x$ 轴平动，使环心在 $x$ 位置时，它所受两点电荷电力的合力为

$$
F_{x}=\frac{q Q}{4 \pi \varepsilon_{0}}\left\{\frac{L+x}{\left[(L+x)^{2}+R\right]^{N}}-\frac{L-x}{\left[(L-x)^{2}+R^{2}\right]^{N}}\right\}
$$

显然，在平衡位置 $x=0$ ，有

$$
F_{x=0}=0
$$

为了讨论平衡位置 $x=0$ 的稳定性，计算 $F_{x}^{\prime}$ ，得

$$
F_{x}^{\prime}=-\frac{q Q}{4 \pi \varepsilon_{0}}\left\{\frac{2(L+x)^{2}-R^{2}}{\left[(L+x)^{2}+R^{2}\right]^{N}}+\frac{2(L-x)^{2}-R^{2}}{\left[(L-x)^{2}+R^{2}\right]^{N}}\right\}
$$

在 $x=0$ 处，有

$$
\begin{aligned}
F_{x=0}^{\prime} & =-\frac{q Q}{4 \pi \varepsilon_{0}}\left\{\frac{2 L^{2}-R^{2}}{\left(L^{2}+R^{2}\right)^{N}}+\frac{2 L^{2}-R^{2}}{\left(L^{2}+R^{2}\right)^{N}}\right\} \\
& =-\frac{q Q\left(2 L^{2}-R^{2}\right)}{2 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{N}}
\end{aligned}
$$

下面分几种情况进行讨论。
（a）若 $R=0$ ，则

$$
F_{x=0}^{\prime}=-\frac{q Q}{\pi \varepsilon_{0} L^{3}}<0
$$

$x=0$ 总是稳定平衡位置。
(b) 若 $R>0$
（i）若 $L>\frac{R}{\sqrt{2}}$ ，则

$$
F_{x=0}^{\prime}<0
$$

$x=0$ 为稳定平衡位置。
（ii）若 $L<\frac{R}{\sqrt{2}}$ ，则

$$
F_{x=0}^{\prime}>0
$$

$x=0$ 为不稳定平衡位置。
（iii）若 $L=\frac{R}{\sqrt{2}}$ ，则

$$
F_{x=0}^{\prime}=0
$$

为判定平衡位置 $x=0$ 是否稳定，需要进一步讨论在 $x=0$ 位置两侧 $F_{x}^{\prime}$ 的正、负。为此，将 $R^{2}=2 L^{2}$ 代入 $F_{x}^{\prime}$ 的表达式，得

$$
\begin{aligned}
F_{x}^{\prime} & =-\frac{q Q}{4 \pi \varepsilon_{0}}\left\{\frac{4 L x+2 x^{2}}{\left(3 L^{2}+2 L x+x^{2}\right)^{N}}+\frac{-4 L x+2 x^{2}}{\left(3 L^{2}-2 L x+x^{2}\right)^{N}}\right\} \\
& =-\frac{q Q}{2 \pi \varepsilon_{0}} \cdot \frac{x}{\left(3 L^{2}\right)^{N}}\left\{\frac{2 L+x}{\left(1+\frac{2 L x+x^{2}}{3 L^{2}}\right)^{N}}-\frac{2 L-x}{\left(1+\frac{-2 L x+x^{2}}{3 L^{2}}\right)^{N}}\right\}
\end{aligned}
$$

因 $x$ 为小量, 有

$$
\begin{aligned}
\frac{2 L+x}{\left(1+\frac{2 L x+x^{2}}{3 L^{2}}\right)^{N}} & =(2 L+x)\left[1-\frac{5}{2}\left(\frac{2 L x+x^{2}}{3 L^{2}}\right)\right] \\
& =(2 L+x)\left(1-\frac{5 x}{3 L}\right)=2 L-\frac{7}{3} x \\
\frac{2 L-x}{\left(1+\frac{-2 L x+x^{2}}{3 L^{2}}\right)^{N}} & =(2 L-x)\left[1-\frac{5}{2}\left(\frac{-2 L x+x^{2}}{3 L^{2}}\right)\right] \\
& =(2 L-x)\left(1+\frac{5 x}{3 L}\right)=2 L+\frac{7}{3} x
\end{aligned}
$$

代入 $F_{x}^{\prime}$ ，得

$$
F_{x}^{\prime}=-\frac{q Q x}{18 \sqrt{3} \pi \varepsilon_{0} L^{3}}\left[\left(2 L-\frac{7}{3} x\right)-\left(2 L+\frac{7}{3} x\right)\right]=\frac{7 q Q x^{2}}{27 \sqrt{3} \pi \varepsilon_{0} L^{3}}
$$

可见，在 $x=0$ 两侧附近，均为

$$
F_{x}^{\prime}>0
$$

因此， $x=0$ 为不稳定平衡位置。
综合以上讨论，结论可归纳如下。
若 $R=0$ ，

$$
x=0 \text { 为稳定平衡位置 }
$$

若 $R>0$ ，若 $\left\{\begin{array}{ll}L>\frac{R}{\sqrt{2}}, & x=0 \text { 为稳定平衡位置 } \\ L=\frac{R}{\sqrt{2}}, & x=0 \text { 为不稳定平衡位置 } \\ L<\frac{R}{\sqrt{2}}, & x=0 \text { 为不稳定平衡位置 }\end{array}\right\}$
2. 以上得出的 $x=0$ 为稳定平衡位置的两种情况，可合并为下述条件，即

$$
\left\{\begin{array}{l}
L>\frac{R}{\sqrt{2}} \\
R \geqslant 0
\end{array}\right\}
$$

当带电圆环从平衡位置 $x=0$ 沿 $x$ 轴有小偏移 $x$ 时，所受作用力 $F_{x}$ 为

$$
\begin{aligned}
F_{x} & =\frac{q Q}{4 \pi \varepsilon_{0}}\left[\frac{L+x}{\left(L^{2}+R^{2}+2 L x\right)^{N}}-\frac{L-x}{\left(L^{2}+R^{2}-2 L x\right)^{N}}\right] \\
& =\frac{q Q}{4 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{N}}\left\{(L+x)\left[1+\frac{2 L x}{\left(L^{2}+R^{2}\right)}\right]^{-\frac{3}{2}}-(L-x)\left[1-\frac{2 L x}{\left(L^{2}+R^{2}\right)}\right]^{-\frac{3}{2}}\right\} \\
& =\frac{q Q}{4 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{N}}\left\{(L+x)\left[1-\frac{3 L x}{\left(L^{2}+R^{2}\right)}\right]-(L-x)\left[1+\frac{3 L x}{\left(L^{2}+R^{2}\right)}\right]\right\} \\
& =\frac{q Q}{4 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{N}}\left\{\left[L+x-\frac{3 L^{2} x}{\left(L^{2}+R^{2}\right)}\right]-\left[L-x+\frac{3 L^{2} x}{\left(L^{2}+R^{2}\right)}\right]\right\} \\
& =-\frac{q Q\left(2 L^{2}-R^{2}\right)}{2 \pi \varepsilon_{0}\left(L^{2}+R^{2}\right)^{N}} x
\end{aligned}
$$

即

$$
\begin{aligned}
& F_{x}=-k x \\
& k=\frac{q Q\left(2 L^{2}-R^{2}\right)}{2 \pi \epsilon_{0}\left(L^{2}+R^{2}\right)^{24}}
\end{aligned}
$$

这是一个线性回复力，故圆环将围绕稳定的平衡位置 $x=0$ 作简谐振动，其振动周期为

$$
T=2 \pi \sqrt{\frac{m}{k}}=2 \pi \sqrt{\frac{2 \pi \epsilon_{0}\left(L^{2}+R^{2}\right)^{\frac{3}{2}} m}{q Q\left(2 L^{2}-R^{2}\right)}}
$$

【题 15】 如电图 1-15-1所示，质量均为 $m$ ，电量均为 $q(q>0)$ 的一簇带电粒子，从 $P_{1}$ 点以相同速率 $v_{0}$ 在 $x y$ 平面内向右上方各方向射出，即 $\phi$ 角在 $(0$ ， $\frac{\pi}{2}$ ）范围内，试在 $x y$ 平面内设计一个电场区域，使这些带电粒子能全部会聚于 $P_{2}$ 点. $P_{1}$ 和 $P_{2}$ 在 $x$ 轴的两侧，与原点 $O$ 的距离均为 $R$ 。设带电粒子间的相互作用以及引力可略。
【分析】为了使带电粒子能会聚到 $P_{2}$ 点，外加电场对带电粒子的作用力应能使各带电粒子经不同的弯曲轨道到达同一点 $P_{2}$ 。于是联想到重力场对斜抛物体的作用，可以达到类似的目的。由此，首先想到，设计的外加电场应是与重力场类似的方向向下的匀强电场。

注意到，在重力场中以相同速率不同抛射角抛出的物体，
![img-353.jpeg](img-353.jpeg)

电图 $1-15-1$

其水平（ $x$ 方向）射程是不同的，并不能落到同一点 $P_{2}$ 上，这是重力场无处不在的结果。因此，如果电图 1-15-1中 $x y$ 上半平面处处都有匀强电场，带电粒子就不会都在 $P_{2}$ 点会聚。为使带电粒子都会聚在 $P_{2}$ 点，匀强电场应有适当的边界，即使带电粒子进入电场区域前和离开电场区域后，都作匀速直线运动，在电场区域内则作类似于斜抛的运动，使之弯折，这样才能满足本题的要求。因此，本题的关键是确定匀强电场的边界。由于 $P_{1}$ 和 $P_{2}$ 相对 $y$ 轴对称，电场的边界也应相对 $y$ 轴对称，只要确定右侧边界即可。

应该指出，电场区域的设计并非唯一，本题给出的是一种比较简单的设计方案。至于所设计匀强电场区域能否实现，则不在本题讨论范围之内。
【解】设计的匀强电场区域如电图1-15-2所示。电图1-15-2中的实线代表电场区域的边界线，它相对 $y$ 轴对称，其中的电场 $\boldsymbol{E}$ 与 $y$ 轴反向。带电粒子的轨道在电图1-15-2中用虚线表示，在场区外的轨道是直线，在场区内的轨道类似于重力场中的斜抛曲线。

设匀强电场的电场强度大小取为 $E$ ，则带电粒子在场区内受电力 $q E$ ，方向向下，产生的加速度方向向下，大小为

$$
a=\frac{q E}{m}
$$

于是带电粒子在场区内沿抛物线轨道运动。如电图1-15-2，在场区边界上任取一点 $(x, y)$ ，其中 $x$ 应为经过该点的带电粒子斜抛轨道的半射程。设带电粒子走完这段半射程需时间 $t$ ，则有

$$
x=\left(v_{0} \cos \phi\right) t
$$

及

$$
v_{0} \sin \phi=a t
$$

联立，消去 $t$ ，得

$$
\sin \phi \cos \phi=\frac{a x}{v_{0}^{2}}
$$

由电图1-15-2，不难看出有以下几何关系，
$\sin \phi=\frac{y}{\sqrt{y^{2}+(R-x)^{2}}}, \quad \cos \phi=\frac{R-x}{\sqrt{y^{2}+(R-x)^{2}}}$
由以上三式，得

$$
v_{0}^{2} y(R-x)=a x\left[y^{2}+(R-x)^{2}\right], x \geqslant 0
$$

![img-354.jpeg](img-354.jpeg)

电图 $1-15-2$

这就是匀强电场区域的右半边界。由对称性，以 $-x$ 代替上式中的 $x$ ，即得匀强电场的左半边界为

$$
v_{0}^{2} y(R+x)=-a x\left[y^{2}+(R+x)^{2}\right], x \leqslant 0
$$

在以上两式中的 $a$ 由场强 $E$ 确定，为

$$
a=\frac{q E}{m}
$$

【题16】 如图，两个同心的半球面相对放置，半径分别为 $R_{1}$ 与 $R_{2}\left(R_{1}>R_{2}\right)$ ，都均匀带电，电荷面密度分别为 $\sigma_{1}$ 与 $\sigma_{2}$ 。试求大的半球底面圆直径 $A O B$ 上的电势分布。
【分析】 用电势垔加原理可以直接求解，但需作积分，颇为麻烦。
由于均匀带电球面内电场强度处处为零，球面外任一点的电场强度等于全部电荷集中在球心时在该点的电场强度，故球面内电势恒定，球面外电势与到球心的距离成反比，连续分布，容易求出。

显然，均匀带电球面在球内、外任一点的电势，是两个半球面贡献之和，因电势是标量，半球面在任一点的电势应为球面在该点的电势之半。于是可解。

本题再次表明，分析题目的对称性并恰当地加以利用，是何等重要。
![img-355.jpeg](img-355.jpeg)

电图 $1-16-1$

【解】 半径为 $R_{1}$ ，电荷面密度为 $\sigma_{1}$ 的完整均匀带电大球面在球内（包括直径 $A O B$ ）的电势恒定，表为 $U^{\prime}{ }_{1}$ ，则

$$
U_{1}^{\prime}=\frac{Q_{1}}{4 \pi \varepsilon_{0} R_{1}}=\frac{4 \pi R_{1}^{2} \sigma_{1}}{4 \pi \varepsilon_{0} R_{1}}=\frac{\sigma_{1} R_{1}}{\varepsilon_{0}}
$$

半个大球面在 $A O B$ 上的电势 $U_{1}$ 应为 $U^{\prime}{ }_{1}$ 之半，即

$$
U_{1}=\frac{1}{2} U_{1}^{\prime}=\frac{\sigma_{1} R_{1}}{2 \varepsilon_{0}}
$$

半径为 $R_{2}$ ，电荷面密度为 $\sigma_{2}$ 的完整均匀带电小球面在球内的电势恒定，在球外的电势与该处到球心的距离成反比。把完整小球面在 $A O B$ 上各点的电势表为 $U^{\prime}{ }_{2}$ ，则

$$
U_{2}^{\prime}= \begin{cases}\frac{Q_{2}}{4 \pi \varepsilon_{0} R_{2}}, & r \leqslant R_{2} \\ \frac{Q_{2}}{4 \pi \varepsilon_{0} r}, & R_{2}<r \leqslant R_{1}\end{cases}
$$

式中

$$
Q_{2}=4 \pi R_{2}^{2} \sigma_{2}
$$

半个小球面在 $A O B$ 上的电势 $U_{2}$ 等于上述 $U_{2}^{\prime}$ 之半, 即

$$
U_{2}=\frac{1}{2} U_{2}^{\prime}=\left\{\begin{array}{l}
\frac{\sigma_{2} R_{2}}{2 \varepsilon_{0}}, \quad r \leqslant R_{2} \\
\frac{\sigma_{2} R_{2}^{2}}{2 \varepsilon_{0} r}, \quad R_{2}<r \leqslant R_{1}
\end{array}\right\}
$$

故 $A O B$ 上各点的电势为

$$
U=U_{1}+U_{2}=\left\{\begin{array}{l}
\frac{\sigma_{1} R_{1}+\sigma_{2} R_{2}}{2 \varepsilon_{0}}, \quad r \leqslant R_{2} \\
\frac{1}{2 \varepsilon_{0}}\left(\sigma_{1} R_{1}+\frac{\sigma_{2} R_{2}^{2}}{r}\right), \quad R_{2}<r \leqslant R_{1}
\end{array}\right\}
$$

【题 17】 如电图1-17-1,半径为 $R_{1}$ 的圆环上带有电量 $Q$, 在它的右边有半径为 $R_{2}$ 的不带电的球面, 球心与环心的间距为 $L$, 球心与环心的连线和圆环平面垂直，试求球面上的平均电势 $\bar{U}$ 。
【分析】 由电势叠加原理，圆环电荷在球面上的电势分布，是环上各元电荷在球面上电势分布的叠加，环上各元电荷在球面上的电势分布与各元电荷在环上的位置有关。但在本题中，圆环与球面的相对位置存在着某种对称性，不难看出，环上某元电荷在球面上电势分布的平均值与该元电荷在环上的位置无关。因而，圆环电荷在球面上电势分布的平均值，应等于把全部圆环上的电荷
![img-356.jpeg](img-356.jpeg)

电图 $1-17-1$

$Q$ 集中在环上任一点 (成为点电荷 $Q$ ) 时, 在球面上的平均电势。

计算点电荷 $Q$ 在球面上平均电势 $\bar{U}$ 的方法并不唯一，通常的方法是把球面分割成一系列窄的球带，使这些球带所在的平面和点电荷与球心的连线垂直，于是每一个球带等电势，再积分求平均得出 $\bar{U}$ 。下面将要介绍的，是充分利用题目对称性的简化计算方法。

设两个点电荷 $Q_{1}$ 和 $Q_{2}$ 相距 $r$ ，则 $Q_{2}$ 的电场在 $Q_{1}$ 所在处的电势为

$$
U_{1}=\frac{Q_{2}}{4 \pi \varepsilon_{0} r}
$$

$Q_{1}$ 相对 $Q_{2}$ 所具有的电势能为

$$
W_{1}=Q_{1} U_{1}=\frac{Q_{1} Q_{2}}{4 \pi \varepsilon_{0} r}
$$

同样， $Q_{1}$ 的电场在 $Q_{2}$ 所在处的电势为

$$
U_{2}=\frac{Q_{1}}{4 \pi \varepsilon_{0} r}
$$

$Q_{2}$ 相对 $Q_{1}$ 所具有的电势能为

$$
W_{2}-Q_{2} U_{2}-\frac{Q_{2} Q_{1}}{4 \pi \varepsilon_{0} r}
$$

显然，

$$
W_{1}=W_{2}
$$

其实， $W_{1} 、 W_{2}$ 并非分别属 $Q_{1} 、 Q_{2}$ 所有，它们就是由 $Q_{1}$ 和 $Q_{2}$ 组成的带电体系的电势能 $W$ ，即

$$
W=W_{1}=W_{2}
$$

对于任何两个带电体组成的带电体系也是如此。为了计算带电体系的电势能 $W$ ，可以计算带电体 I 在 II 的电场中的电势能 $W_{1}$ ，也可以计算带电体 II 在 I 的电场中的电势能 $W_{2}$ ，因为总有 $W=W_{1}=W_{2}$ 。

对于本题，代表圆环电荷的点电荷 $Q$ 可作为带电体 I 。设想球面带电，它就是带电体 II ，为了方便，设球面电荷均匀分布，电荷面密度 $\sigma$ 为常量。于是，球面电荷的电场在 $Q$ 所在处的电势 $U_{1}$ 以及 $Q$ 相对球面电荷的电势能 $W_{1}$ 均易求。 $W_{1}$ 等于球面电荷相对点电荷 $Q$ 的电势能 $W_{2}$ （即 $W_{2}=W_{1}$ ），而 $W_{2}$ 又是球面上各面元电荷 $\sigma \mathrm{d} S$ 与点电荷 $Q$ 在各该面元上的电势 $U$ 的乘积之和，即

$$
W_{2}=\sum(\sigma \mathrm{d} S) U
$$

由于假设球面电荷均匀分布， $\sigma$ 为常量，故

$$
W_{2}=\sigma \sum U \mathrm{~d} S
$$

点电荷 $Q$ 在球面上的平均电势 $\bar{U}$ 的定义为

$$
\sum U \mathrm{~d} S=\bar{U} S_{\text {球面 }}
$$

总之，先算出 $W_{1}$ ，它就是 $W_{2}$ ，于是 $\bar{U}$ 可求。
【解】 根据电势叠加原理，球面上的电势是圆环上各元电荷在球面上电势的叠加，球面电势的平均值仍有此叠加关系。圆环上任一元电荷在球面上的电势分布虽与该元电荷在圆环上的位置有关，但在本题中，因圆环与球面系统的对称性，圆环上任一元电荷在球面上的平均电势，与该元电荷在圆环上的位置无关。因此，无论将元电荷从圆环上原来位置移到环上任何别的位置，都不会影响球面上的平均电势。于是，可将圆环上的全部电荷 $Q$ 都集中到环上任意某点，计算该点电荷 $Q$ 在球面上的平均电势即可。

如电图 1-17-2，点电荷 $Q$ 与球心的距离为

$$
r=\sqrt{R_{1}^{2}+L^{2}}
$$

设想半径为 $R_{2}$ 的球面上均匀分布着电荷，电荷面密度为 $\sigma$ 。点电荷 $Q$ 在球面上的电势分布表为 $U$ ，则球面电荷在点电荷 $Q$ 的电场中所具有的电势能为

$$
W=\sum(\sigma \mathrm{d} S) U=\sigma \sum U \mathrm{~d} S
$$

式中 $\mathrm{d} S$ 是球面上面元的面积。球面上的平均电势 $\bar{U}$ 的定义为

$$
\bar{U}=\frac{\sum U \mathrm{~d} S}{S_{\text {球面 }}}
$$

故

$$
\bar{U}=\frac{W}{\sigma S_{\text {球面 }}}=\frac{W}{Q_{\text {球面 }}}
$$

![img-357.jpeg](img-357.jpeg)

电图 $1-17-2$

式中 $Q_{\text {球面 }}$ 是球面上的总电量。上式表明，为求 $\bar{U}$ ，需计算点电荷 $Q$ 和带电球面 $Q_{\text {球面 }}$ 系统的电势能 $W$.球面电荷 $Q_{\text {球面 }}$ 在点电荷 $Q$ 的电场中所具有的电势能 $W$ ，等于点电荷 $Q$ 在球面电荷 $Q_{\text {球面 }}$ 的电场中所具有的势能. 后者应为

$$
W=Q U_{Q}
$$

式中 $U_{Q}$ 是球面电荷 $Q_{\text {球面 }}$ 的电场在点电荷 $Q$ 所在位置的电势，为

$$
U_{Q}=\frac{Q_{\text {球面 }}}{4 \pi \varepsilon_{0} r}
$$

代入，得

$$
W=\frac{Q Q_{\text {球面 }}}{4 \pi \varepsilon_{0} r}
$$

代入 $\bar{U}$ 表达式，得出点电荷 $Q$ 在球面上的平均电势为

$$
\bar{U}=\frac{Q}{4 \pi \varepsilon_{0} r}=\frac{Q}{4 \pi \varepsilon_{0} \sqrt{R_{1}^{2}+L^{2}}}
$$

它就是圆环电荷在半径为 $R_{2}$ 的球面上的平均电势.
【题 18】 地面上有一固定的点电荷 A ，在 A 的正上方有一带电小球 B，B在重力和 A 的库仑斥力的作用下，在 A 上方 $\frac{H}{2}$ 到 $H$ 之间作往返的自由振动。试求 B 运动的最大速率 $v_{\text {max }}$ 。
【分析】 此题初看似无从下手，因为 A 和 B 的电量 $Q$ 和 $q$ 以及 B 的质量 $m$ 均末给出。正因如此，也就提醒解题者， $v_{\text {max }}$ 可能只与重力加速度 $g$ 和高度 $H$ 有关。换言之， $Q$ 和 $q$ 与 $m$ 之间可能存在某种关系。由题设， B 在 $H$ 处和 $\frac{H}{2}$ 处的动能均为零，因而 B 在 $H$ 处的总势能（重力势能与电势能之和） $m g H+\frac{Q q}{4 \pi \varepsilon_{0} H}$ 应等于 B 在 $\frac{H}{2}$ 处的总势能 $m g \frac{H}{2}+\frac{Q q}{4 \pi \varepsilon_{0}\left(\frac{H}{2}\right)}$ ，即

$$
m g H+\frac{Q q}{4 \pi \varepsilon_{0} H}=m g \frac{H}{2}+\frac{Q q}{4 \pi \varepsilon_{0}\left(\frac{H}{2}\right)}
$$

这就是 $Q, q$ 与 $m$ 之间的转换关系。
$v_{\text {max }}$ 应是 B 在受力为零处的速率，利用上述关系，找出 B 受力为零的位置，即可求出 $v_{\text {max }}$ 。
【解】 B 受 A 的库仑斥力，设 B 带电 $q$ ， A 带电 $Q$ ，则 $q$ 与 $Q$ 应同号，设 B 的质量为 $m$ 。因 B 在 $H$和 $\frac{H}{2}$ 高度处的动能为零，故 B 在这两处的总势能应相等，为

$$
m g H+\frac{Q q}{4 \pi \varepsilon_{0} H}=m g \frac{H}{2}+\frac{Q q}{4 \pi \varepsilon_{0}\left(\frac{H}{2}\right)}
$$

即

$$
\frac{Q q}{4 \pi \varepsilon_{0}}=\frac{1}{2} m g H^{2}
$$

设在离地面高度为 $h$ 处，B 受力为零，则

$$
m g=\frac{Q q}{4 \pi \varepsilon_{0} h^{2}}
$$

由以上两式，得出

$$
h=\frac{H}{\sqrt{2}}
$$

B 在 $h$ 处的运动速率最大，即为 $v_{\text {max }}$ ，由能量守恒，有

$$
m g h+\frac{Q q}{4 \pi \varepsilon_{0} h}+\frac{1}{2} m v_{\max }^{2}=m g H+\frac{Q q}{4 \pi \varepsilon_{0} H}
$$

由以上两式，解出

$$
v_{\max }=\sqrt{(3-2 \sqrt{2}) g H}
$$

【题 19】 如图所示，两个固定的均匀带电球面 A 和 B 分别带电 $4 Q$ 和 $Q(Q>0)$ 。两球心之间的距离 $d$ 远大于两球的半径，两球心的连线 $M N$ 与两球面的相交处都开有足够小的孔，因小孔而损失的电量可以忽略不计。一带负电的质点静止地放置在 A 球左侧某处 $P$ 点，且在 $M N$ 直线上，设质点从 $P$ 点释放后刚好能穿越三个小孔，并通过 B 球球心。试求质点开始时所在的 $P$ 点与 A 球球心的距离 $x$ 应为多少？
![img-358.jpeg](img-358.jpeg)

电图 $1-19-1$
【分析】 质点从 $P$ 点释放到第一小孔（ A 球左侧小孔）期间，因质点带负电， A 球和 B 球均带正电，故 A 球和 B 球电场对质点的作用力为电引力，方向向右，使质点从 $P$ 点由静止开始沿 $M N$ 直线向右加速运动。质点从第一小孔到第二小孔（A球右侧小孔）期间，因进A A球，且 A 球均匀带电，故 A 球的电场为零，对质点无作用；B 球电场对质点的作用仍为电引力，方向向右，质点沿 $M N$ 向右进一步加速，质点从第二小孔到第三小孔（B球左侧小孔）期间，A球电场对质点的作用为电引力，但方向向左；B球电场对质点的作用亦为电引力，但方向向右。由于题设 A 球和 B 球的间距远大于两球的半径，不难设想，当质点离 A 球（即离第二小孔）较近时，A 球电场的向左电引力将大于 B 球电场的向右电引力，合力向左，为阻力，使质点沿 $M N$ 減速。当质点离 B 球（即离第三小孔）较近时，B 球电场的向右电引力将大于 A 球电场的向左电引力，合力向右，为推力，使质点沿 $M N$ 加速。所以在 A 球和 B 球之间（确切地说，在第二小孔与第三小孔之间）有一个质点所受合力为零的特殊位置——称为 $S$ 点。因 A 球带电 $4 Q, \mathrm{~B}$ 球带电 $Q, S$ 点应离第二小孔较远，而离第三小孔较近。简言之，质点从第二小孔到 $S$ 点期间，减速；从 $S$ 点到第三小孔期间，加速。如果质点在到达 $S$ 点之前，已减速为零，则将沿 $N M$ 返回（向左运动）。因此，为了使质点能到达 B球球心，第一个必要条件是，质点必须通过 $S$ 点，即质点在 $S$ 点的速度至少应大于零或至少等于零。若质点能通过 $S$ 点，则如上述，从 $S$ 点到第三小孔期间，质点沿 $M N$ 向右加速。质点从第三小孔到 B 球球心期间，因在 B 球内， B 球电场为零，对质点无作用。但 A 球电场对质点的作用力仍为向左的电引力，质点减速。因此，为使质点在通过 $S$ 点后还能通过 B 球球心，第二个必要条件是，质点在 B 球球心处的速度应大于零或至少等于零。如果质点能到达 $S$ 点，便必定能通过 B 球球心，则上述两个条件归结为第一个条件。

在作了上述详尽的定性物理分析之后，进一步的问题是，如何恰当而简便地表述上述条件呢? 不难看出，在本题中，固定的 A 球和 B 球以及运动的带电质点构成一个带电体系。全部过程无非是带电质点在静电场中运动而已。带电质点动能（速度）的增加或减少，来源于静电场力对它作了正功或负功，即来源于带电体系静电能（电势能）的减少或增加。换言之，带电体系的电势能与带电质点的动能之和，在该质点运动过程中守恒。因此，质点刚好能通过 $S$ 点（即在 $S$ 点质点的动能或速度为零）的条件可表为，质点在 $P$ 点和 $S$ 点时，带电体系的电势能相等（注意，质点在 $P$ 点静止). 同样, 若质点在 $S$ 点时带电体系的电势能大于（或等于）质点在 B 球球心时带电体系的电势能，则表明质点若能通过 $S$ 点，就必定能通过（或刚好到达）B球球心。
[解] 根据分析，在 $M N$ 直线上在 $A$ 球和 $B$ 球之间有一个 $S$ 点，带电质点在 $S$ 点受力为零。设 $S$ 点与 A 球和 B 球球心的距离分别为 $r_{1}$ 和 $r_{2}$, 则

$$
\begin{aligned}
& k \frac{4 Q}{r_{1}^{2}}=k \frac{Q}{r_{2}^{2}} \\
& r_{1}+r_{2}=d
\end{aligned}
$$

式中 $k=\frac{1}{4 \pi \varepsilon_{0}}$, 下同. 由以上两式,解出

$$
\left\{\begin{array}{l}
r_{1}=\frac{2}{3} d \\
r_{2}=\frac{d}{3}
\end{array}\right\}
$$

带电质点从 $P$ 点静止释放后，刚好能够到达 $S$ 点的条件是，它在 $P$ 点和 $S$ 点的电势能相等，即

$$
k=\frac{4 Q(-q)}{x}+k \frac{Q(-q)}{x+d}=k \frac{4 Q(-q)}{r_{1}}+k \frac{Q(-q)}{r_{2}}
$$

式中 $-q(q>0)$ 是带电质点的电量. 上式即为

$$
\frac{4}{x}+\frac{1}{x+d}=\frac{4}{r_{1}}+\frac{1}{r_{2}}
$$

把上面解出的 $r_{1}$ 和 $r_{2}$ 代入，得

$$
\frac{4}{x}+\frac{1}{x+d}=\frac{9}{d}
$$

解出

$$
x=\frac{2}{9}(\sqrt{10}-1) d
$$

为了判断带电质点刚好到达 $S$ 点后，能否通过 B 球球心，需比较它在 $S$ 点的电势能 $W_{S}$ 与它在 B 球球心处的电势能 $W_{\mathrm{B}}$ 的大小。因

$$
W_{S}=k \frac{4 Q(-q)}{r_{1}}+k \frac{Q(-q)}{r_{2}}=-k Q q\left(\frac{4}{r_{1}}+\frac{1}{r_{2}}\right)=-k \frac{9 Q q}{d}
$$

$$
W_{\mathrm{B}}=k \frac{4 Q(-q)}{d}+k \frac{Q(-q)}{R_{\mathrm{B}}}=-k Q q\left(\frac{4}{d}+\frac{1}{R_{\mathrm{B}}}\right)
$$

式中 $R_{\mathrm{B}}$ 为 B 球半径. 由题设

$$
R_{\mathrm{B}} \ll d
$$

故

$$
\frac{4}{d}+\frac{1}{R_{\mathrm{B}}}>\frac{q}{d}
$$

即

$$
W_{\mathrm{B}}>W_{\mathrm{S}}
$$

因此，带电质点只要能到达 $S$ 点，就必定能通过 B 球球心。于是，所求开始时 $P$ 点与 A 球球心的距离 $x$ 即为上述结果，即

$$
x=\frac{2}{9}(\sqrt{10}-1) d
$$

【题20】 半径分别为 $a$ 和 $b$ 的两个同轴无限长半圆柱面如图所示。设在这两个半圆柱面之间有静电场，其电势分布为 $k \ln \frac{h}{r}$ ，其中 $k$ 为某常数， $r$ 是到轴的垂直距离，质量为 $m$ ，电量为 $-q(q>$ 0 ) 的粒子以初速 $v$ 从图中所示的左方射入, $v$ 既与圆柱面的轴垂直, 又与入射处圆柱截面的直径垂直，入射点与轴的距离为 $\rho$ 。

1. 试问在什么条件下，粒子能沿半圆轨道运动。
2. 若入射方向与原设计方向有很小的偏向角 $\beta$, 如图所示, 那么粒子轨道也将偏离原来的半圆轨道，设两个轨道的交点为 $P$ 。试证明，对于很小的偏向角 $\beta, P$ 点的位置与 $\beta$ 无关，并求出 $P$ 点的方位角 $\angle A O P$ 的大小。
【分析】 先看静电场的分布。题设电势 $U(r)=k \ln \frac{h}{r}$ ，故等势面是以半圆柱的轴为轴的半圆柱面，在图中（与轴垂直的截面）是一系列的半圆。因 $r$ 小处 $U(r)$ 大，故电场强度 $E$ 的方向与半圆柱的轴垂直，在图中沿径向从 $O$ 点向外，当带负电粒子沿着既与轴垂直又与入射处直径垂直的方向进入静电场后，所受静电力指向 $O$ 点，并与粒子速
![img-359.jpeg](img-359.jpeg)

地图 $1-20 \cdot 1$

度方向垂直。它提供了向心力，使粒子有可能作圆周运动，由此可得出此时粒子入射速度的大小。

入射方向偏离后（仍与半圆柱的轴垂直），粒子所受静电力仍指向 $O$ 点，但不再与粒子速度垂直，粒子将在垂直轴的平面内沿一般的平面曲线轨道运动。由于静电力是保守力，粒子沿轨道运动时，能量守恒，即动能与静电势能之和守恒。（注意，粒子的速度包括切向速度和径向速度两部分。）又因静电力指向 $O$ 点，为有心力，故粒子沿轨道运动时，对 $O$ 点的角动量守恒。据此，可列出粒子的运动方程。

由于偏向角 $\beta$ 很小，粒子的平面曲线轨道与圆轨道（ $r=\rho$ ）的偏离也很小，即 $r=\rho+\delta$ ，其中 $\delta$ 小扰动量。于是可得出 $\delta$ 遵循的方程。它表明粒子除基本上沿圆轨道运动外，还有径向运动，由 $\delta$ 的方程得出粒子沿径向的运动是简谐振动。由于 $O P=O A=\rho$ ，这要求粒子从 $A$ 点到 $P$ 点所需的时间应等于径向简谐振动的半周期。于是可求出在这段时间内粒子转过的角度 $\angle A O P$ 。在小扰动条件下简谐振动的周期与 $\beta$ 无关，表明 $P$ 点的位置与 $\beta$ 无关。
【解】1. 由题设，电势分布为

$$
U(r)=k \ln \frac{b}{r}
$$

故电场强度 $\boldsymbol{E}$ 沿径向从 $O$ 点向外，其大小为

$$
E(r)=-\frac{\mathrm{d} U}{\mathrm{~d} r}=\frac{k}{r}
$$

带电粒子垂直直径射入，为使其沿半径为 $\rho$ 的半圆轨道运动，要求

$$
q E=\frac{m v^{2}}{\rho}
$$

即要求带电粒子的入射速度为

$$
v=\sqrt{\frac{q k}{m}}
$$

2. 当粒子的入射方向与轴垂直，但不与入射处的直径垂直，而稍有偏离时，粒子在与轴垂直的平面内沿一般的平面曲线轨道运动，其动能为

$$
E_{\mathrm{k}}=\frac{1}{2} m \dot{r}^{2}+\frac{1}{2} m(\omega r)^{2}
$$

式中 $\dot{r}=\frac{\mathrm{d} r}{\mathrm{~d} t}$ 是粒子的径向速度， $\omega=\dot{\theta}=\frac{\mathrm{d} \beta}{\mathrm{d} t}$ 是粒子的角速度， $\omega r$ 是粒子的切向速度，粒子的静电势能为

$$
\begin{aligned}
E_{\mathrm{p}} & =(-q) U \\
& =-q k \ln \frac{b}{r}
\end{aligned}
$$

因静电力是保守力，粒子沿平面曲线轨道运动时，能量守恒，即

$$
E_{\mathrm{k}}+E_{\mathrm{p}}=\frac{1}{2} m \dot{r}^{2}+\frac{1}{2} m(\omega r)^{2}-q k \ln \frac{b}{r}=E_{0}
$$

式中 $E_{0}$ 为常量. 因静电力指向 $O$ 点，为有心力，故粒子沿平面曲线轨道运动时，对 $O$ 点的角动量守恒，即

$$
m r^{2} \omega=L_{0}
$$

式中 $L_{0}$ 为常量. 上式亦可写为

$$
\frac{1}{2} m(\omega r)^{2}=\frac{L_{0}^{2}}{2 m r^{2}}
$$

$L_{0}$ 即为开始时的角动量 $m \rho v \cos \beta$ ，因偏向角 $\beta$ 很小，故有

$$
L_{0}=m \rho v \cos \beta \approx m \rho v
$$

由（1）、（2）式，得

$$
\frac{1}{2} m \dot{r}^{2}+\frac{L_{0}^{2}}{2 m r^{2}}+k q \ln \frac{r}{b}=E_{0}
$$

对 $t$ 求导，得

$$
m \ddot{r} r-\frac{L_{0}^{2}}{m r^{3}} r+\frac{k q_{r}}{r}=0
$$

即

$$
m \ddot{r}-\frac{L_{0}^{2}}{m r^{3}}+\frac{k q}{r}=0
$$

这就是粒子沿平面曲线轨道的运动方程、当偏离角 $\beta$ 为零，即当粒子沿圆轨道运动时，有

$$
r=\rho,\left.\quad \ddot{r}\right|_{r=\rho}=0
$$

代入(3) 式, 得

$$
-\frac{L_{0}^{2}}{m \rho^{3}}+\frac{k q}{\rho}=0
$$

当偏向角 $\beta$ 为小量时，粒子的径向位移 $r$ 等于 $\rho$ 加上一个小扰动量 $\delta$ ，即

$$
r=\rho+\delta
$$

代入(3) 式, 得

$$
m \dot{\delta}-\frac{L_{0}^{2}}{m(\rho+\delta)^{3}}+\frac{k q}{\rho+\delta}=0
$$

即

$$
m \delta-\frac{L_{0}^{2}}{m \rho^{3}}\left(1-\frac{3 \delta}{\rho}\right)+\frac{k q}{\rho}\left(1-\frac{\delta}{\rho}\right)=0
$$

利用（4）式，得

$$
m \ddot{\delta}+\frac{3 L_{0}^{2}}{m \rho^{4}} \delta-\frac{k q}{\rho^{2}} \delta=0
$$

把 $L_{0}=m \rho v, v^{2}=\frac{k \rho}{m}$ 代入，得

$$
\delta+\frac{2 v^{2}}{\rho^{2}} \delta=0
$$

这就是径向扰动量 $\delta$ 的方程，它表明在偏向角 $\beta$ 为小量的条件下，粒子除基本上作圆运动（半径为 $\rho$ ）外，还沿径向作简谐振动，振动的圆频率为

$$
\omega_{\delta}=\frac{\sqrt{2} v}{\rho}
$$

粒子绕半径为 $\rho$ 的圆轨道运动时，其角速度为

$$
\omega_{\theta}=\frac{v}{\rho}
$$

故 $\omega_{\delta}$ 与 $\omega_{\theta}$ 的关系为

$$
\omega_{\delta}=\sqrt{2} \omega_{\theta}
$$

粒子从 $r=\rho$ 的 $A$ 点入射，到达 $P$ 点时第一次恢复 $r=\rho$ ，这要求粒子从 $A$ 点到 $P$ 点所需的时间 $t$ 刚好是 $\delta$ 作简谐振动的半周期，即

$$
t=\frac{1}{2} T_{\delta}=\frac{1}{2} \cdot \frac{2 \pi}{\omega_{\delta}}=\frac{\pi}{\sqrt{2} \omega_{\theta}}
$$

在 $t$ 时间内，粒子转过的角度为

$$
\angle A O P \approx \omega_{g} t=\omega_{g} \cdot \frac{\pi}{\sqrt{2} \omega_{g}}=\frac{\pi}{\sqrt{2}}=127^{\circ}
$$

可见 $P$ 点的位置与小偏向角 $\beta$ 无关.

【题 21】 在平面上有一段长为 $l$ 的均匀带电直线 $A B$ ，在该平面取直角坐标 $O x y$ ，原点 $O$ 为 $A B$中点, $A B$ 沿 $x$ 轴, $y$ 轴与 $x$ 轴垂直。

1. 试证明，该平面上任一点 $P$ 的电场强度方向沿 $\angle A P B$ 的角平分线。
2. 试求该平面上的电场线方程。
3. 试求该平面上的等势线方程。

【分析】 本题是两位学生受本章题 6 的启发，经讨论引申后编制的。
由本章题6，均匀带电直线在任一点 $P$ 的电场强度，与相应的一段均匀带电圆弧在 $P$ 点的电场强度相同。以此为基础，第一问即可求解。

本题第二问和第三问是为了训练解题者的联想能力而设置的。利用第一问的结论，对几种熟知的平面曲线作尝试性的考察后，不难发现，在平面上的电场线是双曲线，等势线是椭圆。
![img-360.jpeg](img-360.jpeg)

电图1-21-1
![img-361.jpeg](img-361.jpeg)

电图 $1-21-2$

【解】1. 如电图 $1-21-1$ ，仿照本章题 6 可以证明（过程从略），均匀带电直线 $A B$ 在任一点 $P$ 的电场强度与相应的圆弧（在电图1-21-1 中画实线）在 $P$ 点的电场强度相同。该圆弧以 $P$ 点为圆心，以 $P$ 点到直线 $A B$ 的垂直距离为半径，圆弧对 $P$ 点的张角等于直线 $A B$ 对 $P$ 点的张角，即为 $\angle A P B$ ，圆弧上均匀带电，其电荷线密度与 $A B$ 直线的电荷线密度相同。显然，由对称性，该圆弧在 $P$ 点的电场强度方向应沿 $\angle A P B$ 的角平分线。
2. 如电图 $1-21-2$ ，在以 $A$ 和 $B$ 为两焦点的双曲线上任取一点 $P$ ，过 $P$ 点作该双曲线的切线 $S P T$ 和法线 $M P N$ （ $S P T$ 与 $M P N$ 垂直）。由双曲线的光学性质可知，从 $A$ 点到 $P$ 点的入射光线，经镜面 $M P N$ 反射后，必定经过 $B$ 点，即入射角 $\angle A P S$ 等于反射角 $\angle B P S$ ，换言之， $S P T$ 即为 $\angle A P B$ 的角平分线。

若 $A B$ 均匀带电，由第 1 问，任一点 $P$ 的电场强度方向应沿 $\angle A P B$ 的角平分线，即应沿双曲线在 $P$ 点的切线 $S P T$ 的方向。因此，在该平面上的电场线，就是以 $A$ 和 $B$ 为两焦点的双曲线族，其方程为

$$
\frac{x^{2}}{a^{2}}-\frac{y^{2}}{\frac{l^{2}}{4}-a^{2}}=1
$$

式中 $l$ 是 $A B$ 的长度, $a$ 是双曲线顶点与坐标原点 $O$ 的距离 $. a$ 是可调参量, 其取值范围为

$$
\frac{l}{2}>a>0
$$

3. 如电图 $1-21-3$, 以 $A$ 和 $B$ 为两焦点作椭圆, 由椭圆的光学性质可知, 从 $A$ 点到椭圆上任一点的入射光线经椭圆反射后必定经过 $B$ 点. 过 $P$ 点作椭圆的切线 MPN 和法线 SPT，则入射角 $\angle A P S$ 应等于反射角 $\angle B P S$.

若 $A B$ 均匀带电, 由第一问, 任一点 $P$ 的电场强度方向应沿 $\angle A P B$ 的角平分线. 即应沿椭圆在 $P$ 点的法线 SPT 的方向. 因此, 通过 $P$ 点的等势线的方向应为与 $S P T$ 垂直的切线 MPN 的方向. 换言之, 在该平面上的等势线, 就是以 $A$ 和 $B$ 为两焦点的椭圆族, 其方程为

$$
\frac{x^{2}}{a^{2}}+\frac{y^{2}}{a^{2}-\frac{l^{2}}{4}}-1
$$

![img-362.jpeg](img-362.jpeg)

电图 $1-21-3$

式中 $l$ 是 $A B$ 的长度, $a$ 是椭圆的半长轴, $a$ 是可调参量, 其取值范围为

$$
a>\frac{l}{2}
$$

【本题是 1994 年北京大学物理试验班的学生罗迟雁和倪彬编制的. 试验班是为了培训、选拔参加 $\mathrm{IPhO}($ 国际中学生物理奥林匹克竞赛) 的中国代表队而设立的。]
[題 22] 如电图 $1-22-1$, 在 $x$ 轴的 $-a$ 和 $a$ 两点分别放置电量均为 $Q$ 的点电荷。
试求: 1 . 在 $x y$ 平面上, 电场强度相对坐标原点 $O$ 为径向的点的轨迹。
2. 在 $x y$ 平面上, 电场强度相对坐标原点 $O$ 为切向的点的轨迹.
（注：所谓径向或切向，均指电场强度 $\boldsymbol{E}$ 的方向相对原点 $O$ 沿径向或切向, 并非 $\boldsymbol{E}$ 的径向或切向分量。)
【分析】 不难看出, 在 $x$ 轴上各点的电场强度方向均沿 $x$ 轴, 即均沿径向 ( $x=0$ 点的电场强度为零, $x= \pm a$ 点的电场强度为无穷大,除外). 在 $y$ 轴上各点的电场强度方向均沿 $y$ 轴,亦即均沿径向. 所以, $x$ 轴以及 $y$ 轴是电场强度沿径向的点的轨迹. 然而, 是否存在其
![img-363.jpeg](img-363.jpeg)

电图 $1-22-1$

他电场强度沿径向的点, 是否存在电场强度沿切向的点, 它们的轨迹如何, 难以直观地察觉.

在 $x y$ 平面上, 某点的电场强度相对原点 $O$ 沿径向. 要求该点电场强度的 $x$ 分量与 $y$ 分量之比等于该点的 $x$ 坐标与 $y$ 坐标之比, 即要求 $\frac{E_{x}}{E_{y}}=\frac{x}{y}$. 类似地, 在 $x y$ 平面上, 某点的电场强度相对原点 $O$ 沿切向，则要求 $-\frac{E_{x}}{E_{y}}=\frac{y}{x}$ 。在 $x y$ 平面上各点的电势 $U(x, y)$ 易求，由 $E_{x}=-\frac{\partial U}{\partial x}$ 及 $E_{y}$ $=-\frac{\partial U}{\partial y}$ 可以得出 $E_{y}$ 及 $E_{y}$ ，结合电场强度沿径向或切向的要求，即可分别确定它们的轨迹。
【解】在 $x y$ 平面上，任一点 $(x, y)$ 的电势 $U(x, y)$ 为

$$
U(x, y)=\frac{Q}{4 \pi \varepsilon_{0}}\left[\frac{1}{\sqrt{(x-a)^{2}+y^{2}}}+\frac{1}{\sqrt{(x+a)^{2}+y^{2}}}\right]
$$

因

$$
E=-\nabla U
$$

故

$$
E_{x}=-\frac{\partial U}{\partial x}, E_{y}=-\frac{\partial U}{\partial y}
$$

把 $U$ 代入，得

$$
\begin{aligned}
& E_{x}=-\frac{\partial U}{\partial x}=\frac{Q}{4 \pi \varepsilon_{0}}\left\{\frac{x-a}{\left[(x-a)^{2}+y^{2}\right]^{N}}+\frac{x+a}{\left[(x+a)^{2}+y^{2}\right]^{N}}\right\} \\
& E_{y}=-\frac{\partial U}{\partial y}=\frac{Q}{4 \pi \varepsilon_{0}}\left\{\frac{y}{\left[(x-a)^{2}+y^{2}\right]^{N}}+\frac{y}{\left[(x+a)^{2}+y^{2}\right]^{N}}\right\}
\end{aligned}
$$

在 $x y$ 平面上，径向电场强度点应满足

$$
\frac{E_{y}}{E_{x}}=\frac{y}{x}
$$

即

$$
\frac{E_{y}}{E_{x}}=\frac{y\left\{\left[(x+a)^{2}+y^{2}\right]^{N}+\left[(x-a)^{2}+y^{2}\right]^{N}\right\}}{(x-a)\left[(x+a)^{2}+y^{2}\right]^{N}+(x+a)\left[(x-a)^{2}+y^{2}\right]^{N}}=\frac{y}{x}
$$

因此，径向电场强度点的轨迹是

$$
y=0, \text { 即 } x \text { 轴 }(x=0, x= \pm a \text { 点除外 })
$$

以及

$$
\begin{aligned}
x\left[(x+a)^{2}\right. & \left.+y^{2}\right]^{N}+x\left[(x-a)^{2}+y^{2}\right]^{N} \\
& =(x-a)\left[(x+a)^{2}+y^{2}\right]^{N}+(x+a)\left[(x-a)^{2}+y^{2}\right]^{N}
\end{aligned}
$$

即

$$
x=0, \text { 即 } y \text { 轴 }(y=0 \text { 点除外 })
$$

及

$$
(x+a)^{2}+y^{2}=(x-a)^{2}+y^{2}
$$

以上（1）、（2）、（3）式，就是在 $x y$ 平面上径向电场强度点的轨迹方程。
切向电场强度点应满足

$$
-\frac{E_{y}}{E_{x}}=\frac{x}{y}
$$

把 $E_{x}$ 和 $E_{y}$ 代入，得

$$
\begin{aligned}
& y^{2}\left\{\left[(x+a)^{2}+y^{2}\right]^{N}+\left[(x-a)^{2}+y^{2}\right]^{N}\right\} \\
& \quad=-x\left\{(x-a)\left[(x+a)^{2}+y^{2}\right]^{N}+(x+a)\left[(x-a)^{2}+y^{2}\right]^{N}\right\}
\end{aligned}
$$

$$
\begin{aligned}
= & -x^{2}\left\{\left[(x+a)^{2}+y^{2}\right]^{N_{i}}+\left[(x-a)^{2}+y^{2}\right]^{N}\right\} \\
& +x a\left\{\left[(x+a)^{2}+y^{2}\right]^{N}-\left[(x-a)^{2}+y^{2}\right]^{N}\right\}
\end{aligned}
$$

即

$$
\begin{aligned}
\left(x^{2}+y^{2}\right) & \left\{\left[(x+a)^{2}+y^{2}\right]^{N_{i}}+\left[(x-a)^{2}+y^{2}\right]^{N}\right\} \\
& =x a\left\{\left[(x+a)^{2}+y^{2}\right]^{N}-\left[(x-a)^{2}+y^{2}\right]^{N}\right\}
\end{aligned}
$$

即

$$
\left[x a-\left(x^{2}+y^{2}\right)\right]\left[(x+a)^{2}+y^{2}\right]^{N_{i}}=\left[x a+\left(x^{2}+y^{2}\right)\right]\left[(x-a)^{2}+y^{2}\right]^{N}
$$

或

$$
\frac{x a-\left(x^{2}+y^{2}\right)}{x a+\left(x^{2}+y^{2}\right)}=\frac{\left[(x-a)^{2}+y^{2}\right]^{N}}{[(x+a)^{2}+y^{2}]^{N}}
$$

（4）式就是在 $x y$ 平面上切向电场强度点的轨迹方程，它仅当 $x a>\left(x^{2}+y^{2}\right)$ 时才可能有解。
[理 23] 线电荷密度分别为 $\lambda$ 和 $-\lambda(\lambda=$ 常量) 的两平行无限长带电直线相距 $2 a$. 试求等势面和电场线的空间分布。
【分析】根据两平行无限长均匀带电直线的对称性，可知等势面是一系列柱面，其母线与带电直线平行，空间任一点电场强度的方向必在与带电直线垂直的平面上。因此，只需讨论与带电直线垂直的 $x y$ 平面上的等势线与电场线分布即可。

在 $x y$ 平面上取电势零点，写出任一点 $(x, y)$ 的电势 $U$ 的表达式，由 $U=$ 常量即可确定 $x y$平面上等势线的轨迹方程。

在 $(x, y)$ 点，等势线的切线斜率为 $\frac{\mathrm{d} y}{\mathrm{~d} x}$ ，等势线的法线斜率等于其切线斜率的负倒数即为 $-\frac{\mathrm{d} x}{\mathrm{~d} y}$ ，由于电场线与等势线垂直，在 $(x, y)$ 点等势线的法线斜率即为该点电场线的切线斜率。由电场线切线斜率的表达式即可得出电场线的轨迹方程。
【解】取 $x y$ 坐标系，使两带电直线分别位于 $x= \pm a, y=0$ ，且与 $z$ 轴平行，即 $x y$ 平面与两带电直线垂直。由对称性，只需讨论 $x y$ 平面的等势线与电场线分布。

取原点 $x=0, y=0$ 为电势零点，则 $x y$ 平面上任一点 $(x, y)$ 的电势为

$$
U=\frac{\lambda}{2 \pi \varepsilon_{0}} \ln \frac{a}{\left[(x-a)^{2}+y^{2}\right]^{\frac{1}{2}}}-\frac{-\lambda}{2 \pi \varepsilon_{0}} \ln \frac{a}{\left[(x+a)^{2}+y^{2}\right]^{\frac{1}{2}}}=\frac{\lambda}{4 \pi \varepsilon_{0}} \ln \frac{(x+a)^{2}-y^{2}}{(x-a)^{2}-y^{2}}
$$

等势线满足

$$
U=\text { 常量 }
$$

令

$$
a=\mathrm{e}^{-\frac{4 \pi \varepsilon_{0} U}{\lambda}}>0
$$

且 $a$ 为常量，则等势线的轨迹方程为

$$
(x+a)^{2}+y^{2}=a\left[(x-a)^{2}+y^{2}\right]
$$

即

$$
x^{2}-2 \frac{a+1}{a-1} a x+y^{2}=-a^{2}
$$

或

$$
\left(x-\frac{a+1}{a-1} a\right)^{2}+y^{2}=\left(\frac{2 \sqrt{a}}{a-1} a\right)^{2}
$$

因此，在 $x y$ 平面上，等势线是一系列以 $\left(\frac{a+1}{a-1} a, 0\right)$ 为圆心，以 $\left(\frac{2 \sqrt{a}}{a-1} a\right)$ 为半径的圆（当 $U$ 取不同常量时， $a$ 为不同的常量）。当 $U>0$ ，即 $1<a<\infty$ 时，圆在右半平面；当 $U=0$ ，即 $a=1$时，圆退化为 $y$ 轴直线；当 $U<0$ ，即 $0<a<1$ 时，圆在左半平面。在 $x y$ 平面的等势线如图中实线所示，在全空间，等势面是一系列圆柱面，其每线与 $z$ 轴平行，其截面为上述各个圆。

在任一点 $(x, y)$ ，等势线的切线斜率为 $\frac{\mathrm{d} y}{\mathrm{~d} x}$ ，等势线的法线斜率为 $-\frac{\mathrm{d} x}{\mathrm{~d} y}$ 。因电场线与等势线垂直，故在 $(x, y)$ 点，电场线的切线斜率等于该点等势线的法线斜率，即

$$
\left(\frac{\mathrm{d} y}{\mathrm{~d} x}\right)_{\text {电场线 }}=\left(-\frac{\mathrm{d} x}{\mathrm{~d} y}\right)_{\text {等势线 }}
$$

由（2）式得出

$$
\left(\frac{\mathrm{d} x}{\mathrm{~d} y}\right)_{\text {等势线 }}=\frac{-y}{x-\frac{a+1}{a-1} a}
$$

由（1）式解出 $\frac{a+1}{a-1}$ ，代入上式，得

$$
\left(\frac{\mathrm{d} x}{\mathrm{~d} y}\right)_{\text {等势线 }}=\frac{-2 x y}{x^{2}-y^{2}-a^{2}}
$$

故电场线的切线斜率为

$$
\left(\frac{\mathrm{d} y}{\mathrm{~d} x}\right)_{\text {电场线 }}=\frac{2 x y}{x^{2}-y^{2}-a^{2}}
$$

把它写成

$$
\left(\frac{\mathrm{d} y}{\mathrm{~d} x}\right)_{\text {电场线 }}=\frac{-2 y x}{y^{2}-x^{2}-\left(-a^{2}\right)}
$$

本来，对（4）式积分即可得出电场线的轨迹方程。但当将（4）式与（3）式比较时发现，两式相当，若将（4）式的 $x$ 与 $y$ 互换， $a^{2}$ 换为 $-a^{2}$ ，即得（3）式。因（3）式的解是（1）式，故只需将（1）式中的 $x$ 和 $y$ 互换， $a^{2}$ 换成 $-a^{2}$ ，就可以得出电场线的方程。电场线方程为

$$
y^{2}-2 \frac{a^{\prime}+1}{a^{\prime}-1} a y+x^{2}=a^{2}
$$

式中 $a^{\prime}=$ 常量，这是新的参量。由（5）式，电场线的轨迹方程也可改写为

$$
\left(y-\frac{a^{\prime}+1}{a^{\prime}-1} a\right)^{2}+x^{2}=\left[\frac{\sqrt{2\left(a^{\prime 2}+1\right)}}{a^{\prime}-1} a\right]^{2}
$$

由（5）式和（6）式求导即可验证它们与（4）式是相符的。由（6）式可知，在 $x y$ 平面内，电场线是以 $\left(0, \frac{a^{\prime}+1}{a^{\prime}-1} a\right)$ 为圆心，以
![img-364.jpeg](img-364.jpeg)

电图 $1-23-1

$$\frac{\sqrt{2\left(\alpha^{-2}+1\right)}}{|\alpha-1|} a$ 为半径的一系列圆。这些圆都通过 $(a, O)$ 点和 $(-a, O)$ 点。电场线如图中虚线所示。

【题 24】已知真空中电场的能量密度为 $w_{\mathrm{e}}=\frac{1}{2} \varepsilon_{0} E^{2}$ 。试求：1. 均匀带电球面（电量为 $Q$ ，半径为 $R$ ) 的球面上的电场强度值.2. 带电球面上的表面张力系数 $\sigma$.
【分析】均匀带电球面内、外的电场强度，用高斯定理不难求出。但当将高斯面取在球面上时，因带电面的模型已失效，无法确定高斯面所包围的电量，结果是不确定的。

利用场能密度公式，设想将半径为 $R$ 的带电球面缓慢地收缩到半径为 $(R-\mathrm{d} R)$ ，则因原球外（ $R$ 外）的场及场能不变，故电场力所作的功应转变为附加的半径为 $R$ 和 $(R-\mathrm{d} R)$ 之间区域的场能。电场力的功与球面上的电场强度有关， $R$ 到（ $R-\mathrm{d} R$ ）区域的场能则与收缩后球外的电场强度有关，于是可求出球面上的电场强度。

由带电球面在球面上的电场强度，可知球面上某带电面元所受的电场力，它是靠带电球面上的表面张力来平衡的。于是带电球面的表面张力系数可求。
【解】设带电球面在球面上的电场强度为 $\boldsymbol{E}_{R}$ ，由对称性分析，其方向沿径向，当 $Q>0$ 时， $\boldsymbol{E}_{R}$ 的方向沿径向指向球外。

把带电球面从半径为 $R$ 缓慢地收缩到半径为 $(R-\mathrm{d} R)$ ，则电场力作功为

$$
\mathrm{d} w=Q E_{R} \mathrm{~d} R
$$

式中 $E_{R}$ 是球面上的电场强度，球半径减小 $\mathrm{d} R$ 后， $R$ 外的电场及场能不变，上述电场力的功应转变为被收缩区域的电场能，为

$$
\mathrm{d} w=\frac{1}{2} \varepsilon_{0} E^{2} \mathrm{~d} V=\frac{1}{2} \varepsilon_{0} E^{2} 4 \pi R^{2} \mathrm{~d} R
$$

式中 $E$ 是已经收缩的带电球面之外 $R$ 处的电场强度，由高斯定理，得

$$
E=\frac{Q}{4 \pi \varepsilon_{0} R^{2}}
$$

由（1）、（2）、（3）式，得

$$
E_{R}=\frac{Q}{8 \pi \varepsilon_{0} R^{2}}=\frac{1}{2}\left(E_{\mathrm{PI}}+E_{\mathrm{PI}}\right)
$$

式中 $E_{\text {PI }}$ 是带电球面内的电场强度， $E_{\text {PI }}$ 是球外附近的电场强度， $E_{\text {PI }}=0, E_{\text {PI }}=\frac{Q}{4 \pi \varepsilon_{0} R^{2}}$ 。

如图，在带电球面上取半径为

$$
r=R \sin (\mathrm{~d} \varphi)
$$

的小球帽，它受到的电场力为

$$
\begin{aligned}
\mathrm{d} F & =E_{R} \mathrm{~d} q \\
& =E_{R} \sigma_{\mathrm{e}} \pi r^{2}=E_{R} \sigma_{\mathrm{e}} \pi R^{2} \sin ^{2}(\mathrm{~d} \varphi)=E_{R} \sigma_{\mathrm{e}} \pi R^{2}(\mathrm{~d} \varphi)^{2}
\end{aligned}
$$

式中 $\sigma_{\mathrm{e}}$ 是球面的面电荷密度， $\pi r^{2}$ 是小球帽面积（近似）。 $\mathrm{d} \boldsymbol{F}$ 的方向沿径向指向球外。

电场力 $\mathrm{d} \boldsymbol{F}$ 是靠小球帽周边的表面张力的径向分量平衡的，即
![img-365.jpeg](img-365.jpeg)

电图 $1-24-1$

$$
\mathrm{d} F=\mathrm{d} T \sin (\mathrm{~d} \varphi)=\mathrm{d} T \mathrm{~d} \varphi
$$

故

$$
\mathrm{d} T=E_{R} \sigma_{\mathrm{e}} \pi R^{2} \mathrm{~d} \varphi
$$

表面张力系数为

$$
\begin{aligned}
\sigma & =\frac{\mathrm{d} T}{2 \pi r}=\frac{E_{R} \sigma_{\mathrm{e}} \pi R^{2} \mathrm{~d} \varphi}{2 \pi R \sin (\mathrm{~d} \varphi)}=\frac{1}{2} E_{R} \sigma_{\mathrm{e}} R \\
& =\frac{1}{2} \cdot \frac{Q}{8 \pi \varepsilon_{0} R^{2}} \cdot \frac{Q}{4 \pi R^{2}} R=\frac{Q^{2}}{64 \pi^{2} \varepsilon_{0} R^{3}}
\end{aligned}
$$

【题 25】有1998个半径相同的导体球，各球均带有相同的正电荷，彼此不接触。试证明，在静电平衡时，至少有一个导体球的表面处处无负电荷。
【分析】 本题除导体球的个数外，并未给出任何其他可供定量演算的已知量，且导体球竟有 1998 个之多，也不像定量推证的依据。由此，猜测本题似可采用定性分析的办法予以证明。

细审题意，定性分析的有关依据应为：正电荷发出电场线，负电荷聚敛（或吸收）电场线；无穷远处既可发出也可聚敛电场线；电场线的方向指向电势降低的方向；静电平衡时导体为等势体。

下面就以此为线索，着手求解本题。
【解】 各球达到静电平衡后，每球均为等势体。比较各球电势，总可以至少找到一个 A 球，其电势不低于其他球的电势。若 A 球球面某处有负电荷，则必有电场线聚敛该处。

1. 若此电力线发自其他某些球面的正电荷，则 A 球的电势应低于那些球的电势，与 A 球电势不低于其他球电势的假设矛盾，因而是不叮能的。
2. 若此电场线来自无穷远，则 A 球电势应低于无穷远处的电势，从而所有其他球的电势也都低于无穷远处的电势。比较其他球的电势，总可以至少找到一个 B 球，其电势不高于剩余各球。于是 B 球正电荷发出的电力线不能到达无穷远，否则与 B 球电势低于无穷远处电势矛盾；B球正电荷发出的电场线也不能到达剩余各球，否则与 B 球电势不高于剩余各球电势矛盾；B 球正电荷发出的电场线更不能到达 A 球；否则与 A 球电势不低于 B 球电势矛盾。总之，B 球正电荷发出的电场线没有去处，这当然是不合理的。

综上，A 球球面上不叮能有负电荷。即在达到静电平衡后，比较各球电势，其中不低于其他球电势的那个 A 球（至少有一个），其表面应处处无负电荷。

显然，在以上论证中，并未涉及各导体球半径的大小，所带正电荷的多少，以及导体球的数目，甚至也未涉及是否球形，其实这些都与结论无关。

【题 26】质子加速器使每个质子得到的动能为 $E$ 。很细的质子束从加速器射向一个远离加速器的半径为 $r$ 的金属球，并留在球上。球的中心并不处在加速器发射出的质子运动方向的直线上，而与该直线的垂直距离为 $d$ ，且 $d<r$ 。试问加速器工作足够长时间后，球能充电到多高的电势？

计算时，可取 $E=2 \mathrm{kev}$ 和 $d=\frac{r}{2}$ 。又，若把质子换成电子，将会发生什么变化？
【分析】 如图，质子射到金属球上，把自己的电荷传给金属球，使金属球逐渐充电。带了电的金属球对再射来的质子有排斥作用，导致质子的轨迹不断有所改变。图中的直线 1 是射来的第一个质子，因球尚未带电，故为直线。随着质子不断射来，球不断充电，对后继质子的电斥力不断增大，使各质子的轨迹逐渐向上偏，但仍均打在球内，在图中统一用曲线 2 表示。质子轨迹向上偏离到一定程度后，将与金属球相切，这就是图中的曲线 3 了。此后射来的质子将不再打在球上，即球不再继续充电了，本题所求的就是这时球的电势 $U$ 。

考虑质子浴图中曲线 3 的轨迹运动。设质子从加速器射出的初速为 $v_{0}$, 因远离带电金属球, 静电势能为零(即规
![img-366.jpeg](img-366.jpeg)

电图 $1-2 \varepsilon-1$

定离球远处的电势为零），故质子从加速器获得的 $E$ 全都是动能，即 $E=\frac{1}{2} m v_{0}^{2}$ 。当质子沿着与金属球相切的轨迹 3 移近金属球时，受静电力的排斥作用，动能减小，静电势能增加。设质子达到与球相切的 $A$ 点时的速度为 $v$, 动能为 $\frac{1}{2} m v^{2}$. 若质子在 $A$ 点的静电势能为 $e U$, 则 $U$ 即为球充电的最高电势，故质子在 $A$ 点的能量为 $\left(e U+\frac{1}{2} m v^{2}\right)$ 。对于质子和带电金属球系统，无外界作用，内力（静电力）为保守力，故系统的能量守恒。这是一个重要的关系。

当质子沿轨迹运行时，受到的静电力沿金属球的径向。这是因为球表面电荷的分布是均匀的，单个靠近球的质子不会改变球上已经聚集的电荷的均匀分布，从而整个球电荷对质子的作用就如同这些电荷都集中在球心一样。（由于质子电荷与经不断充电后的整个球电荷相比是非常小的，由于质子束密度很小，认为球表面电荷均匀分布是合理的。）因此，当质子沿轨迹 3 运行时，对于球中心，其角动量守恒。于是可解。

需要注意的是，轰击金属球的粒子，可能从球上打出电子。在用质子充电时，打出电子只是加速球的充电过程。若用电子束充电，打出电子则是球的放电。当球捕获的电子数和从中打出的电子数达到动态平衡时，球的充电过程停止。相应的临界轨迹将不是图中与球相切的轨迹了，而可能是与它很接近的轨迹 2 . 因而，用电子束充电时，金属球的电势（绝对值）将稍低于用质子束充电的结果。
［解］设质子从加速器射出时的速度为 $v_{0}$, 取离带电金属球很远处的电势为零, 则质子射出时的能量为

$$
E=\frac{1}{2} m v_{0}^{2}
$$

式中 $m$ 是质子质量. 当金属球充电到最高电势 $U$ 时, 质子浴图中轨迹 3 与球相切而过. 质子在切点 $A$ 的能量为

$$
E_{A}=e U+\frac{1}{2} m v^{2}
$$

式中 $v$ 是质子在 $A$ 点的速度, $e$ 是质子电量. 当质子沿轨迹 3 运行时, 质子和带电金属球系统的能量守恒,故

$$
E=E_{A}
$$

质子沿轨迹 3 运行时，所受静电力沿球的径向，因此，对于球中心，质子的角动量守恒，有

$$
m v_{0} d=m v r
$$

由以上四式，解出

$$
U=\left(1-\frac{d^{2}}{r^{2}}\right) \frac{E}{e}
$$

把有关数据代入，得

$$
U=\left(1-\frac{1}{4}\right) \frac{2}{e} \operatorname{keV}=1500 \mathrm{~V}
$$

【题 27】如电图 $1-27-1$ 所示，导体球 A,B 和 C 的半径分别为 $2 \mathrm{~cm} 、 2 \mathrm{~cm}$ 和 3 cm ，它们的球心构成边长为 50 cm 的等边三角形 $A B C$ 。开始时，A,B,C三球各带电荷 $12 \times 10^{-9} \mathrm{C} 、 24 \times 10^{-9} \mathrm{C} 、 30 \times 10^{-9} \mathrm{C}$ ，试求 B 球电势的近似值，并估算所用近似方法产生的误差。

若将二球用导线彼此相连，忽略连接后导线上的电荷分布，试求各球所带电量。

设 $O x$ 轴通过 $\triangle A B C$ 的中心，并垂直于 $\triangle A B C$ 所在平面，试计算导线将三球连接后，在 $O x$ 轴上与 $O$ 点的距离等于 $C O$ 的那一点的电场强度。
![img-367.jpeg](img-367.jpeg)

电图 $1-27-1$
【分析】三个导体球（未连接）达到静电平衡后，分别为等势体，各球的电势即为其球心的电势。由于三球相互感应，球面电荷不会均匀分布，这就是精确计算的困难。然而，注意到三球的半径远小于其球心的间距。因此，在计算某球面电荷对另一球球心电势的贡献时，可近似认为前者的电荷集中在球心。至于球面电荷对本球球心电势的贡献，则与球面电荷是否均匀分布无关。由此，B球电势可近似求解，并可同时对误差作出估计。

三球用导线相连后，电荷将重新分配，三球分得的电量是三个未知量。总电荷守恒，这是一.个方程、A球与 B 球大小相同，位置对称，电量应相同，这是又一方程、A球与 C 球电势相等，这是第三个方程。于是可解。

为计算三球相连后球外某处的场强，仍可将不均匀分布的球面电荷近似处理为集中在球心，条件是该处与三球的距离应远大于球半径。
【解】三球未连接，达到静电平衡、B球为等势体，其电势可用B球球心的电势表示、B球的电荷分布在球面上，不均匀，它们对 B 球球心电势的贡献，相当于将全部球面电荷集中到球面上任一点后对 B 球球心的电势贡献、A球和 C 球球面电荷的分布也不均匀，但因球半径远小于 A 球和 C球与 B 球球心的间距，故可近似将球面电荷集中到球心。于是，B 球电势为

$$
U_{\mathrm{B}}=\frac{Q_{\mathrm{B}}}{4 \pi \varepsilon_{\mathrm{B}} R_{\mathrm{B}}}+\frac{Q_{\mathrm{A}}}{4 \pi \varepsilon_{\mathrm{B}} r_{\mathrm{AB}}}+\frac{Q_{\mathrm{C}}}{4 \pi \varepsilon_{\mathrm{B}} r_{\mathrm{CB}}}
$$

式中 $R_{\mathrm{B}}$ 是 B 球半径， $r_{A B}$ 和 $r_{C B}$ 分别是 A 球和 C 球球心与 B 球球心的间距。将有关数据代入，得

$$
U_{\mathrm{B}}=1.154 \times 10^{4} \mathrm{~V}
$$

上述计算的误差来自将 A 球和 C 球的不均匀球面电荷近似地集中在球心。即在上式中 $r_{A B}$的误差 $\Delta r_{A B}$ 最大为 1 cm ，同样， $\Delta r_{C B}$ 最大为 1.5 cm 。这种误差有正有负，总的累计误差可认为是各误差绝对值之和与系数 $\alpha(0<\alpha<1)$ 的乘积。若 A 球与 C 球的球面电荷均匀分布，则 $\alpha=0$ ；若 A 球与 C 球的球面电荷分别集中在距 B 球最近或最远处，则 $\alpha=1$ ；在本题中，不妨取中间值，即取 $\alpha=\frac{1}{2}$. 作为误差的量级估算，可近似取 $\Delta r_{A B}=\Delta r_{C B}=\Delta r=1 \mathrm{~cm}$ 。又因 $r_{A B}=r_{C B}=r$ ，于是，可估算误差如下

$$
\begin{aligned}
\Delta U_{\mathrm{B}} & =\alpha\left|\frac{Q_{\mathrm{A}}+Q_{\mathrm{C}}}{4 \pi \varepsilon_{0}(r \pm \Delta r)}-\frac{Q_{\mathrm{A}}+Q_{\mathrm{C}}}{4 \pi \varepsilon_{0} r}\right| \\
& =\frac{Q_{\mathrm{A}}+Q_{\mathrm{C}}}{8 \pi \varepsilon_{0}} \cdot \frac{\Delta r}{r(r \pm \Delta r)} \approx \frac{Q_{\mathrm{A}}+Q_{\mathrm{C}}}{8 \pi \varepsilon_{0}} \cdot \frac{\Delta r}{r^{2}}=7 \mathrm{~V}
\end{aligned}
$$

可见，误差约为千分之一，并不很大。
三球连接后，所带电量设为 $Q^{\prime} \mathrm{A}^{\prime} Q^{\prime}{ }_{\mathrm{B}}, Q^{\prime} \mathrm{C}^{\prime}$ 。因电荷守恒，有

$$
Q_{A}^{\prime}+Q_{B}^{\prime}+Q_{C}^{\prime}=66 \times 10^{-9} \mathrm{C}
$$

因 A 球与 B 球大小相同位置对称，故有

$$
Q_{A}^{\prime}=Q_{B}^{\prime}
$$

采用上面计算 $U_{\mathrm{B}}$ 时的近似方法，则连接后 A 球和 C 球的电势应分别为

$$
\begin{aligned}
& U_{A}^{\prime}=\frac{1}{4 \pi \varepsilon_{0}}\left(\frac{Q_{A}^{\prime}}{R_{A}}+\frac{Q_{B}^{\prime}}{r_{B A}}+\frac{Q_{C}^{\prime}}{r_{C A}}\right) \\
& U_{C}^{\prime}=\frac{1}{4 \pi \varepsilon_{0}}\left(\frac{Q_{C}^{\prime}}{R_{C}}+\frac{Q_{A}^{\prime}}{r_{A C}}+\frac{Q_{B}^{\prime}}{r_{B C}}\right)
\end{aligned}
$$

因 A 球与 C 球相连，电势相同，故

$$
U_{A}^{\prime}=U_{C}^{\prime}
$$

由以上三式，得

$$
\frac{Q_{A}^{\prime}}{R_{A}}+\frac{Q_{B}^{\prime}}{r_{B A}}+\frac{Q_{C}^{\prime}}{r_{C A}}=\frac{Q_{C}^{\prime}}{R_{C}}+\frac{Q_{A}^{\prime}}{r_{A C}}+\frac{Q_{B}^{\prime}}{r_{B C}}
$$

联立 $(1) 、(2) 、(3)$ 式，解出

$$
\begin{aligned}
& Q_{A}^{\prime}=Q_{B}^{\prime}=18.685 \times 10^{-9} \mathrm{C} \\
& Q_{C}^{\prime}=28.63 \times 10^{-9} \mathrm{C}
\end{aligned}
$$

取 $O_{O P}$ 坐标如电图 1-27-2所示. 在电图 1-27-2 中， $\triangle A B C$ 已被它在 $y$ 轴上的投影线段所代替. 所求的 $P$ 点在 $x$ 轴上, 其电场强度可表为

$$
E_{P}=\left(E_{P x}, E_{P y}, E_{P z}\right)
$$

由题设，如电图 1-27-2

$$
O P=O C=\frac{50}{\sqrt{3}} \mathrm{~cm}
$$

因 $Q^{\prime}$ 。对 $E_{P x}$ 无贡献，因 $Q^{\prime}$ 。和 $Q^{\prime}$ 。大小相等位置对称，它们对 $E_{P x}$ 的贡献刚好抵消，于是，得

$$
E_{P x}=0
$$

在计算 $E_{P x}$ 和 $E_{P y}$ 时，均近似地将非均匀分布的球面电荷集中到
![img-368.jpeg](img-368.jpeg)

电图 $1-27-2$

球心. 如电图 $1-27-2$ ，由于对称性， $Q^{\prime}$ 。和 $Q^{\prime}$ 。对 $E_{P x}$ 的贡献等同于把它们移到 $C$ 点对 $E_{P x}$ 的贡献，故有

$$
E_{P_{x}}=\frac{Q_{A}^{\prime}+Q_{B}^{\prime}-Q_{C}^{\prime}}{4 \pi \varepsilon_{0} r_{2 P}^{2}} \cos \theta
$$

如电图 $2-27-2$,

$$
\begin{gathered}
\theta=45^{\circ} \\
r_{2 P}=\sqrt{2} O C=40.82 \mathrm{~cm}
\end{gathered}
$$

把有关数据代入，得

$$
E_{P_{x}}=2.52 \times 10^{3} \mathrm{~V} / \mathrm{m}
$$

由对称性，从 $Q^{\prime}$ 。中取出 $18.685 \times 10^{-9} \mathrm{C}\left(=Q^{\prime}{ }_{\mathrm{A}}=Q^{\prime}{ }_{\mathrm{B}}\right)$ 的电量，它与 $Q^{\prime}$ 。和 $Q^{\prime}$ 。对 $E_{P_{y}}$ 的合贡献为零。因而所求的 $E_{P_{x}}$ 即为 $Q^{\prime}$ 。中剩余的 $Q^{\prime}$ 。 $\left(=Q^{\prime}{ }_{\mathrm{C}}=Q^{\prime}{ }_{\mathrm{A}}=9.945 \times 10^{-9} \mathrm{C}\right)$ 在 $P$ 点电场强度的 $y$ 分量，即

$$
E_{P y}=\frac{Q_{C}^{\prime}}{4 \pi \varepsilon_{0} r_{2 P}^{2}} \sin \theta=0.38 \times 10^{3} \mathrm{~V} / \mathrm{m}
$$

总之， $E_{P}$ 在 $x y$ 平面上，它的大小 $E_{P}$ 以及 $E_{P}$ 与 $x$ 轴的夹角 $\phi$ 为，

$$
\begin{aligned}
& E_{P}=\sqrt{E_{P_{x}}^{2}+E_{P_{y}}^{2}}=2.55 \times 10^{3} \mathrm{~V} / \mathrm{m} \\
& \phi=\arcsin \frac{E_{P_{y}}}{E_{P_{x}}}=8.55^{\circ}
\end{aligned}
$$

【题 28】 如电图1-28-1所示，在真空中有四个半径均为 $a$ 的不带电的相同导体球，球心分别位于边长为 $r$ 的正方形的四个顶点之上， $r \gg a$ 。现让球 1 带 $Q$ 的电荷（ $Q>0$ ），然后取一细金属丝，它的一端固定在球 1 上，另一端分别依次与球 $2 、 3 、 4$ 接触。设每次接触的时间都足够长，使它们达到静电平衡后，再断开，设分布在细金属丝上的电荷可忽略不计，试求四小球最后所带电量 $Q_{1}, Q_{2}, Q_{3}, Q_{4}$ 。
【分析】球1与球2经金属丝接触达到平衡后，因位置对称，又球 3 与球 4上虽有感应电荷分布，但因电量为零且因 $a \ll r$ ，对球 1 和球 2 的电量并无影响，故球 1 与球 2 带电应相等，各为 $\frac{Q}{2}$ ，断开后，球 2 带电 $\frac{Q}{2}$ 不变。

球1与球3接触达到平衡后，带电 $\frac{Q}{2}$ 的球 2 对它们是有影响的，但因球
![img-369.jpeg](img-369.jpeg)

电图1-28-1

1 与球 2 相对球 3 的位置对称，故再次平分电量，各为 $\frac{Q}{4}$ ，断开后，球 3 带电 $\frac{Q}{4}$ 不变。

球1与球 4 接触达到平衡后，球 2 与球 3 虽位置相当但带电量不同，对球 1 和球 4 的影响将有所不同，因此球 1 与球 4 并不处于对称位置，电量不会再次简单地平分，球 1 与球 4 接触达到平衡的条件是电势相等，即 $U_{1}=U_{4}$ 。无论 $U_{1}$ 还是 $U_{4}$ ，都是四个带电球在球 1 与球 4 球心处产生的电势之和（所谓球 2 和球 3 对球 1 与球 4 的"影响"，即在于对 $U_{1}$ 与 $U_{4}$ 有贡献）。利用 $r \gg a$ 的条件及平衡后电荷分布在导体球表面上这一特征，即可求解。
【解】球1与球2接触达到平衡后，分别带电

$$
Q_{1}^{\prime}=Q_{2}=\frac{Q}{2}
$$

断开后，球 2 带电 $Q_{2}=\frac{Q}{2}$ 不变。
球 1 与球 3 接触达到平衡后，因相对带电的球 2 处于对称位置，故分别带电

$$
Q_{1}^{\prime \prime}=Q_{3}=\frac{Q_{1}^{\prime}}{2}=\frac{Q}{4}
$$

断开后，球 3 带电 $Q_{3}=\frac{Q}{4}$ 不变。
球1与球 4 接触达到平衡后，相对于带电 $\frac{Q}{2}$ 的球 2 以及带电 $\frac{Q}{4}$ 的球 3 ，并不处于对称位置，但电势相等。设平衡后球 1 与球 4 的电量分别为 $Q_{1}$ 与 $Q_{4}$ ，电势分别为 $U_{1}$ 与 $U_{4}$ ，则有

$$
Q_{1}+Q_{4}=Q_{1}^{\prime \prime}=\frac{Q}{4}, \quad U_{1}=U_{4}
$$

其中 $U_{1}$ 与 $U_{4}$ 分别是 $Q_{1} 、 Q_{2} 、 Q_{3} 、 Q_{4}$ 在球 1 与球 4 处产生的电势之和， $Q_{1}$ 分布在球 1 表面（不均匀），因球 1 是导体球，故 $Q_{1}$ 对 $U_{1}$ 的贡献等于它在球 1 的球心处的电势，为 $\frac{Q_{1}}{4 \pi \varepsilon_{0} a}$ 。因 $r \gg a$ ， $Q_{2} 、 Q_{3} 、 Q_{4}$ 对 $U_{1}$ 的贡献可利用点电荷的电势公式， $U_{4}$ 完全类似。于是有

$$
\begin{aligned}
& U_{1}=\frac{Q_{1}}{4 \pi \varepsilon_{0} a}+\frac{Q_{2}}{4 \pi \varepsilon_{0} r}+\frac{Q_{3}}{4 \pi \varepsilon_{0} \sqrt{2} r}+\frac{Q_{4}}{4 \pi \varepsilon_{0} r} \\
& U_{4}=\frac{Q_{1}}{4 \pi \varepsilon_{0} r}+\frac{Q_{2}}{4 \pi \varepsilon_{0} \sqrt{2} r}+\frac{Q_{3}}{4 \pi \varepsilon_{0} r}+\frac{Q_{4}}{4 \pi \varepsilon_{0} a}
\end{aligned}
$$

联立以上四式，解出 $Q_{1}$ 和 $Q_{4}$ 。连同上面解出的 $Q_{2}$ 和 $Q_{3}$ ，得

$$
\left\{\begin{array}{l}
Q_{1}=\left[1-\frac{(\sqrt{2}-1) a}{\sqrt{2}(r-a)}\right] \frac{Q}{8} \approx\left[1-\frac{(\sqrt{2}-1) a}{\sqrt{2} r}\right] \frac{Q}{8} \\
Q_{2}=\frac{Q}{2} \\
Q_{3}=\frac{Q}{4} \\
Q_{4}=\left[1+\frac{(\sqrt{2}-1) a}{\sqrt{2}(r-a)}\right] \frac{Q}{8} \approx\left[1+\frac{(\sqrt{2}-1) a}{\sqrt{2} r}\right] \frac{Q}{8}
\end{array}\right\}
$$

显然，有

$$
Q_{1}+Q_{2}+Q_{3}+Q_{4}=Q
$$

【图29】 如图所示，三根等长的带电绝缘细棒首尾相接构成三角形，其中电荷的分布如同绝缘棒都换成等长导体棒且已达到静电平衡时的电荷分布。测得图中 $A$点和 $B$ 点的电势分别为 $U_{A}$ 和 $U_{B}$ 。假设若将 $a b$ 棒取走，并不影响 $a c$及 $b c$ 两棒的电荷分布。试求此时 $A$ 点和 $B$ 点的电势。
【分析】 三绝缘细棒中的电荷分布如同导体棒静电平衡后的电荷分布，所以各棒电荷虽非均匀但都是自身左右对称分布的。由对称性，三棒各自对 $A$ 点电势的贡献应相同。由对称性， $b c$ 棒对 $A$ 点和 $B$点电势的贡献应相同。由对称性， $a c$ 棒与 $a b$ 棒各自对 $B$ 点电势的贡
![img-370.jpeg](img-370.jpeg)

电图 $1-29-1$献应相同，根据上述对称性分析，加上三棒共存时已知的 $U_{A}$ 和 $U_{B}$ ，即可求出除去 $a b$ 棒后， $A$ 点和 $B$ 点的电势。
【解】 由对称性，三棒各自对 $A$ 点电势的贡献相同，表为 $U_{x}$ ，故有

$$
U_{A}=3 U_{x}
$$

由对称性， $b c$ 棒对 $A$ 点和 $B$ 点电势的贡献相同，故 $b c$ 棒对 $D$ 点电势的贡献也应是 $U_{x}$ 。由对称性， $a b$ 棒和 $a c$ 棒各自对 $B$ 点电势的贡献相同，表为 $U_{y}$ 。于是，由电势叠加原理，有

$$
U_{B}=U_{x}+2 U_{y}
$$

联立（1）、（2）式，解出

$$
\begin{aligned}
& U_{x}=\frac{1}{3} U_{A} \\
& U_{y}=\frac{1}{2} U_{B}-\frac{1}{6} U_{A}
\end{aligned}
$$

因此, $a b$ 棒取去后, $A$ 点和 $B$ 点的电势应分别为

$$
\begin{aligned}
& U_{A}^{\prime}=2 U_{x}=\frac{2}{3} U_{A} \\
& U_{B}^{\prime}=U_{x}+U_{y}=\frac{1}{6} U_{A}+\frac{1}{2} U_{B}
\end{aligned}
$$

【题 30】 如电图 1-30-1所示，恒温的矩形盒内装有理想气体，当隔板将盒等分为二时，两侧气体压强均为 $P_{0}$ 。当隔板平行移动时，无摩擦，不漏气，两侧气体经历准静态过程，隔板是面积为 $A$ 的金属板，带电量为 $Q$ ，矩形盒上与它平行的两块板也是金属板，面积也为 $A$ ，相距为 $2 L$ ，固定，并接地，隔板两侧的电场均匀，盒的其余部分是不导电的绝缘板。

1. 试求隔板的平衡位置.
2. 试讨论平衡是否稳定。

【分析】当隔板在中央时，两侧气体所施压力的合力为零，两金属板所施电力的合力亦为零，故中央是隔板的一个平衡位置。

当隔板平行右移时，左侧气体等温膨胀，压强减小，右侧气体等温压缩，压强增大，两侧气体所施压力的合力不为零，指向左方、隔板从中央右移越多，气体合力越大。

再看电力。因两侧金属板接地，电势均为零，故隔板与左金属板之间的电势差等于隔板与右金属板之间的电势差，与隔板的位置无关。当隔板右移时，与左板距离加大，与右板距离缩小，电势差相等、电场均匀（题设）表明右侧场强大于左侧，这是隔板两表面上电荷重新分配的结果。于是，隔板右表面的面电荷密度应大于左表面，从而右金属板施予隔板的电力（吸引力），即隔板所受电力的合力不为零，且指向右方。

因此，除中央外，隔板在右侧还可能有平衡位置，当隔板左移时，可作类似的分析，故左侧相应的也可能有平衡位置。总之，隔板的平衡位置，是指隔板所受气体合力与电力合力之和为零的位置。

平衡是否稳定，取决于隔板受扰动稍稍偏离平衡位置后，隔板所受气体合力与电力合力之和是否与扰动反向，能否消除扰动。若能消除扰动，使隔板回到平衡位置，则平衡是稳定的。若扰动增长，无法回复，则平衡是不稳定的。因此，为了讨论平衡的稳定性，应画出气体合力与电力合力随隔板位置变化的曲线，并逐个讨论各个平衡位置是否稳定，
［解］如电图1-30-1，取 $x$ 轴指向右方，原点在中央，设隔板从中央右移到 $x$ 处，则左侧和右侧气体对隔板的压力分别为

$$
\left\{\begin{array}{l}
F_{\text {气.左 }}=p_{\text {左 }} A=\frac{p_{0} V_{0}}{V_{\text {左 }}}=\frac{L}{L+x} p_{0} A, \text { 指向右方 } \\
F_{\text {气.右 }}=p_{\text {右 }} A=\frac{p_{0} V_{0}}{V_{\text {右 }}}=\frac{L}{L-x} p_{0} A, \text { 指向左方 }
\end{array}\right\}
$$

式中用到等温过程方程 $p_{0} V_{0}=p_{\text {左 }} V_{\text {左 }}=p_{\text {右 }} V_{\text {右 }}$. 隔板右移到 $x$ 处时所受气体合力为

$$
F_{\text {气 }}=F_{\text {气. } \text { 。 }}-F_{\text {气.左 }}=2 p_{0} L A \frac{x}{L^{2}-x^{2}}, \text { 指向左方 }
$$

设隔板右移到 $x$ 处时，隔板左表面和右表面的面电荷密度分别为 $\sigma_{\text {左 }}$ 和 $\sigma_{\text {右 }}$ ，则

$$
\sigma_{\mathrm{左}}+\sigma_{\mathrm{右}}=\frac{Q}{A}
$$

因静电感应，接地的左金属板和右金属板的面电荷密度应分别为 $-\sigma_{\text {左 }}$ 和 $-\sigma_{\text {右 }}$ ，故隔板左侧和右侧的电场强度分别为

$$
\left\{\begin{array}{l}
E_{\mathrm{E}}=\frac{\sigma_{\mathrm{E}}}{\varepsilon_{0}} \\
E_{\mathrm{E}}=\frac{\sigma_{\mathrm{E}}}{\varepsilon_{0}}
\end{array}\right\}
$$

因隔板与左金属板之间的电势差等于隔板与右金属板之间的电势差，且电场均匀，故有

$$
E_{\text {左 }}(L+x)=E_{\text {E }}(L-x)
$$

由（3）、（4）、（5）式，解出

$$
\left\{\begin{array}{l}
\sigma_{\mathrm{E}}=\frac{L-x}{L} \cdot \frac{Q}{2 A} \\
\sigma_{\mathrm{E}}=\frac{L+x}{L} \cdot \frac{Q}{2 A}
\end{array}\right\}
$$

于是，隔板受左和右金属板的电力分别为

$$
\left\{\begin{array}{l}
F_{\text {电. }}=Q_{\mathrm{E}} E^{\prime}{ }_{\mathrm{E}}=\sigma_{\mathrm{E}} A \frac{\sigma_{\mathrm{E}}}{2 \varepsilon_{0}}=\frac{1}{2 \varepsilon_{0}} \sigma_{\mathrm{E}}^{2} A=\frac{(L-x)^{2} Q^{2}}{8 \varepsilon_{0} L^{2} A} \\
F_{\text {电. }}=Q_{\mathrm{E}} E^{\prime}{ }_{\mathrm{G}}=\sigma_{\mathrm{G}} A \frac{\sigma_{\mathrm{G}}}{2 \varepsilon_{0}}=\frac{1}{2 \varepsilon_{0}} \sigma_{\mathrm{G}}^{2} A=\frac{(L+x)^{2} Q^{2}}{8 \varepsilon_{0} L^{2} A}
\end{array}\right\}
$$

式中 $Q_{\mathrm{E}}=\sigma_{\mathrm{E}} A$ 是隔板左表面的电量， $Q_{\mathrm{E}}=\sigma_{\mathrm{E}} A$ 是隔板右表面的电量， $E^{\prime}$ 左是左金属板在 $Q_{\text {左 }}$ 处的场强，而（4）、（5）式中的 $E_{\text {左 }}$ 是隔板左表面电量与左金属板电量共同产生的场强， $E^{\prime}$ ，与 $E_{\text {E }}$ 的含义类似，故有

$$
\begin{aligned}
E^{\prime} E^{\prime} & =\frac{1}{2} E_{\mathrm{E}} \\
E^{\prime} E^{\prime} & =\frac{1}{2} E_{\mathrm{E}}
\end{aligned}
$$

在（7）式中， $F_{\text {地，左 }}$ 指向左方， $F_{\text {地，右 }}$ 指向右方，故隔板所受电力的合力为

$$
\begin{aligned}
F_{\text {地 }} & =F_{\text {地，右 }}-F_{\text {地，左 }}=\frac{Q^{2}}{8 \varepsilon_{0} L^{2} A}\left[(L+x)^{2}-(L-x)^{2}\right] \\
& =\frac{Q^{2}}{2 \varepsilon_{0} L A} x, \text { 指向右方 }
\end{aligned}
$$

平衡条件是

$$
F_{\mathrm{N}}=F_{\text {地 }}
$$

把（2）、（8）式代入上式，得

$$
x\left(\frac{Q^{2}}{4 \varepsilon_{0} L A^{2}}-\frac{p_{0} L}{L^{2}-x^{2}}\right)=0
$$

因此，隔板的平衡位置是

$$
\left\{\begin{array}{l}
x=0 \\
x= \pm L \sqrt{1-\frac{4 \varepsilon_{0} p_{0} A^{2}}{Q^{2}}}= \pm x_{0}
\end{array}\right\}
$$

当 $Q^{2}>4 \varepsilon_{0} p_{0} A^{2}$ 时，有三个平衡位置，即 $x=0$ 与 $x= \pm x_{0}$ 。当 $Q^{2}<4 \varepsilon_{0} p_{0} A^{2}$ 时，只有一个平衡位置， $x=0$ 。

作 $F_{\mathrm{N}}(x)$ 与 $F_{\text {地 }}(x)$ （均取绝对值）曲线如电图1-30-2. 图中只画出 $x>0$ 部分的曲线， $x<0$ 的另一半与之对称。在 $x=0$ 处， $F_{\mathrm{N}}(x)$ 和 $F_{\text {地 }}(x)$ 曲线的斜率分别为

$$
\begin{aligned}
& \frac{\mathrm{d}}{\mathrm{~d} x}\left[2 p_{0} L A \frac{x}{L^{2}-x^{2}}\right]_{x=0}=\frac{2 p_{0} A}{L} \\
& \quad \frac{\mathrm{~d}}{\mathrm{~d} x}\left[\frac{Q^{2}}{2 \varepsilon_{0} L A} x\right]_{x=0}=\frac{Q^{2}}{2 \varepsilon_{0} L A}
\end{aligned}
$$

当 $\frac{Q^{2}}{2 \varepsilon_{0} L A}>\frac{2 p_{0} A}{L}$ ，即当 $Q^{2}>4 \varepsilon_{0} p_{0} A^{2}$ 时，两曲线有三个交点 $x=0$
![img-371.jpeg](img-371.jpeg)

电图 $1-30-2$

与 $x= \pm x_{0}$ ，即有三个平衡位置。这相当于 $F_{\text {地 }}$ 直线的斜率 $\left(\frac{Q^{2}}{2 \varepsilon_{0} L A}\right)$ 大于 $F_{\mathrm{N}}$ 曲线在 $x=0$ 的斜率 $\left(\frac{2 p_{0} A}{L}\right), F_{\text {地 }}$ 直线如电图 $1-30-2$ 中较高的斜实线所示， $F_{\mathrm{N}}$ 曲线在 $x=0$ 的斜率在电图 $1-$ $30-2$ 中用虚的斜直线表示。

当 $\frac{Q^{2}}{2 \varepsilon_{0} L A}<\frac{2 p_{0} A}{L}$ ，即当 $Q^{2}<4 \varepsilon_{0} p_{0} A^{2}$ 时，两曲线只有一个交点 $x=0$ ，即只有一个平衡位置。这时 $F_{\text {地 }}$ 直线如电图 $1-30-2$ 中较低的斜直线所示，即低于 $F_{\mathrm{N}}$ 曲线在 $x=0$ 的斜率。

总之，前者有三个平衡位置，后者只有一个平衡位置，应分别讨论其稳定性。
设 $Q^{2}>4 \varepsilon_{0} p_{0} A^{2}$ ，对于平衡位置 $x=0$ ，若有扰动使隔板稍稍右移 $x>0$ ，则因 $\left|F_{\text {地 }}\right|>$ $\left|F_{\mathrm{N}}\right|$ ，隔板所受合力指向右方，扰动扩大，故 $x=0$ 是不稳定的平衡位置（左移同理），对于平衡位置 $x=x_{0}$ ，若有扰动使隔板稍稍右移 $x>x_{0}$ ，则因 $\left|F_{\text {地 }}\right|<\left|F_{\mathrm{N}}\right|$ ，合力指向左方，使隔板回复到 $x_{0}$ ，扰动消除，故 $x=x_{0}$ 是稳定的平衡位置。同理， $x=-x_{0}$ 也是稳定的平衡位置。

设 $Q^{2}<4 \varepsilon_{0} p_{0} A^{2}$ ，对于唯一的平衡位置 $x=0$ ，若有扰动使隔板稍稍右移 $x>0$ ，则因$\left|F_{\text {电 }}<\mid F_{e_{i}}\right|$, 合力指向左方, 扰动消除, 隔板回复到 $x=0$, 故 $x=0$ 是稳定的平衡位置。
本题有趣之处正在于，当 $Q^{2}>4 \varepsilon_{0} p_{0} A^{2}$ 时， $x=0$ 是不稳定的平衡位置；而当 $Q^{2}<$ $4 \varepsilon_{0} p_{0} A^{2}$ 时, $x=0$ 却是稳定的平衡位置。

【题 31】 如图所示，在半径为 $R$ 的接地金属圆柱面的中央放有一根半径为 $r_{0}$ 的同轴细长导线，导线处于正的高电势 $U_{0}$ 。于是导线外倒附近介质原子被电离成自由电子与正离子，其中自由电子即被导线吸附，正离子则离开导线径向地运动。设正离子的径向迁移率 （径向速度与电场强度的比值）为常数 $w$ ，且迁移过程中正离子始终围绕导线形成均匀的圆柱形薄层。

1. 试证明，作为时间 $t$ （从正离子在导线外侧附近形成的时刻开始计时）的函数，正离子的径向位置 $r$ 可表为

$$
r^{2}=k\left(t+t_{0}\right)
$$

并求出常量 $k$ 和 $t_{0}$ （略去由丁介质电离造成的电场变化）。
2. 设全部正离子电量为 $Q$ ，为了使导线电势保持原来的 $U_{0}$ 不变，需
![img-372.jpeg](img-372.jpeg)

电图1-31-1

给导线补充电量 $Q^{*}$ 。试导出 $Q^{*}$ 与时间 $t$ 的关系。
【分析】正离子径向位置随时间的变化 $r(t)$ 取决于它的径向速度。因径向速度与电场强度之比即迁移率 $w$ 已知，故 $r(t)$ 取决于电场强度 $E(r)$ 。利用导线与圆柱面之间的电势差求出 $E(r)$ ，于是第一问可解。

因介质电离，在导线表面吸附的电子以及在 $r(t)$ 处的正离子要产生附加的径向电场，使导线与圆柱面之间有附加的电势差。为保持导线的电势，需补充电荷，以便消除附加的电势差。
【解】1. 正离子的径向迁移率为

$$
w=\frac{v_{r}}{E(r)}=\frac{\frac{\mathrm{d} r}{\mathrm{~d} t}}{E(r)}
$$

式中 $v_{r}=\frac{\mathrm{d} r}{\mathrm{~d} t}$ 是正离子的径向速度， $E(r)$ 是径向电场。设导线上的线电荷密度为 $\lambda$ ，则

$$
E(r)=\frac{\lambda}{2 \pi \varepsilon_{0} r}
$$

导线与接地圆柱面之间的电势差为

$$
U_{0}=\int_{r_{0}}^{R} E(r) \mathrm{d} r=\frac{\lambda}{2 \pi \varepsilon_{0}} \ln \frac{R}{r_{0}}
$$

把由（3）式得出的 $\lambda$ 代入（2）式，得

$$
E(r)=\frac{U_{0}}{r \ln \frac{R}{r_{0}}}
$$

把上式代入(1)式，得

$$
\frac{\mathrm{d} r}{\mathrm{~d} t}=\left\{\frac{w U_{0}}{\ln \frac{R}{r_{0}}}\right\} \cdot \frac{1}{r}
$$

或

$$
r \mathrm{~d} r=\frac{w U_{0}}{\ln \frac{R}{r_{0}}} \mathrm{~d} t
$$

积分

$$
\int_{r_{0}}^{r} r \mathrm{~d} r=\frac{w U_{0}}{\ln \frac{R}{r_{0}}} \int_{0}^{t} \mathrm{~d} t
$$

得

$$
\begin{aligned}
r^{2} & =\frac{2 w U_{0}}{\ln \frac{R}{r_{0}}} t+r_{0}^{2} \\
& =\frac{2 w U_{0}}{\ln \frac{R}{r_{0}}}\left\{t+\frac{\ln \frac{R}{r_{0}}}{2 w U_{0}} r_{0}^{2}\right\}=k\left(t+t_{0}\right)
\end{aligned}
$$

式中

$$
\begin{gathered}
k=\frac{2 w U_{0}}{\ln \frac{R}{r_{0}}} \\
t_{0}=\frac{r_{0}^{2} \ln \frac{R}{r_{0}}}{2 w U_{0}}=\frac{r_{0}^{2}}{k}
\end{gathered}
$$

2. 介质电离后，导线表面因吸附电子而附加的电荷为 $-Q$ ，在 $r(t)$ 处正离子的电量为 $Q$ ，它们产生的附加电场为

$$
E^{\prime}(\rho)=\left\{\begin{array}{l}
-\frac{\lambda^{\prime}}{2 \pi \varepsilon_{0} \rho}, r_{0}<\rho<r \\
0, \quad \rho>r
\end{array}\right\}
$$

式中负号表示电场强度指向导线，式中

$$
\lambda^{\prime}=\frac{Q}{l}
$$

$l$ 是柱长 $. E^{\prime}(\rho)$ 在导线与接地圆柱面之间产生的附加电势差为

$$
U^{\prime}=\int_{r_{0}}^{R} E^{\prime}(\rho) \mathrm{d} \rho=-\frac{\lambda^{\prime}}{2 \pi \varepsilon_{0}} \ln \frac{r}{r_{0}}
$$

为了消除 $U^{\prime}$ ，保持导线与圆柱面之间的电势差仍为 $U_{0}$ ，需在导线上补充正电荷 $Q^{*}$ ，它的线密度为

$$
\lambda^{*}=\frac{Q^{*}}{l}
$$

所产生的附加电势差应为 $-U^{\prime}$ ，即

$$
-U^{\prime}=\frac{\lambda^{*}}{2 \pi \varepsilon_{0}} \ln \frac{R}{r_{0}}
$$

把上面的 $U^{\prime}$ 代入，得

$$
\frac{\lambda^{*}}{2 \pi \varepsilon_{0}} \ln \frac{R}{r_{0}}=\frac{\lambda^{*}}{2 \pi \varepsilon_{0}} \ln \frac{r}{r_{0}}
$$

即

$$
\frac{Q^{*}}{l} \ln \frac{R}{r_{0}}=\frac{Q}{l} \ln \frac{r}{r_{0}}
$$

故

$$
Q^{*}=\frac{Q \ln \frac{r}{r_{0}}}{\ln \frac{R}{r_{0}}}=\frac{Q \ln \frac{r^{2}}{r_{0}^{2}}}{2 \ln \frac{R}{r_{0}}}
$$

把 $r^{2}=k\left(t+t_{0}\right)$ 及 $r_{0}^{2}=k t_{0}$ 代入上式，得

$$
Q^{*}=\frac{Q \ln \frac{t+t_{0}}{t_{0}}}{2 \ln \frac{R}{r_{0}}}
$$

式中的 $t_{0}$ 已在第 1 问中求出。
【题 32】圆形导体薄板的半径为 $R$ ，在其中轴线上与圆板中心 $O$ 相距为 $a$ 处有一个静止的点电荷 $Q$. 设 $a \ll R$, 忽略边缘效应.

1. 导体板接地, 试求导体板上的电荷分布.
2. 导体板不接地, 带有电量 $Q_{0}$, 试求导体板上的电荷分布.
【分析】 如电图 1-32-1所示，导体板接地时，在点电荷的作用下，导体板的右表面出现感应电荷。但感应电荷的分布及电量均未知，也无法用通常的场强叠加原理与高斯定理来计算电场强度。

然而，由于导体面是等势面，电场线应与它正交。导体面上的感应电荷使得从点电荷 $Q$ 发出的电场线终止在它上面。因而电场线的分布大致如电图 1-32-1 右半的实线所示。它与电偶极子产生的电场十分相似（电偶极子的电场还应包括电图 1-32-1 左半用虚线画出的）。换言之，导体板上感应电荷对右半电场的影响，可以用在 $-a$
![img-373.jpeg](img-373.jpeg)

电图 $1-32-1$

处的点电荷 $-Q$ 代替。于是电场强度容易求出。这当然是由猜测提出的尝试解，容易验证，它满足静电场的基本方程和边条件，因此，根据唯一性定理，尝试解就是实际所求的解。

这种方法叫做静电镜像法，简称镜像法或电像法。其实质是用虚设的电荷来等效地代替实际导体面或介质面上的感应电荷。导体面好像一面镜子，虚电荷就是原有的电荷在"镜"中的 "像"。虚电荷的位置和电量应结合问题的具体条件由电场线的分布状况猜测出来。镜像法是求解一类静电问题的简便方法，其根据是唯一性定理。

由求出的接地导体板右表面外的电场强度分布，用高斯定理即可求出导体板右表面感应电荷的分布及电量（应为 $-Q$ ）。

导体板不接地并带电 $Q_{0}$ 的情形，与上述讨论相类似。为使从点电荷 $Q$ 发出的电场线垂直地中止在导体板右表面，要求右表面上具有第 1 问得出的电荷分布及电量 $-Q$ 。但现在导体板的总电量为 $Q_{0}$, 这样, 除上述 $-Q$ 外, 还剩余 $\left(Q_{0}+Q\right)$ 的电量, 它们应均匀地分布在导体的左、右两表面上，才能确保导体板内的电场强度为零，于是第2问可解。
[解] 1. 如电图 1-32-2 所示，导体板接地，右表面感应电荷对右半电场的贡献，可以用位于左侧一 $a$ 处电量为 $-Q$ 的虚点电荷代替。因此，导体板右表面外附近与中心 $O$ 相距 $r$ 处的电场强度（相当于电偶极子中垂面上的电场强度） $\boldsymbol{E}(r)$ 与板面垂直，方向向左，其大小为

$$
E(r)=\frac{Q_{0}}{2 \pi \varepsilon_{0}\left(r^{2}+a^{2}\right)^{3 / 2}}
$$

导体板右表面上的面电荷密度为

$$
\sigma(r)=\varepsilon_{0} \boldsymbol{E}(r) \cdot \boldsymbol{n}=\frac{-Q_{0}}{2 \pi\left(r^{2}+a^{2}\right)^{3 / 2}}
$$

式中 $n$ 是导体板右表面法线方向的单位矢量，指向右方。
因 $R \gg a$ ，导体板右表面上总的感应电荷为，

$$
\int_{0}^{R} \sigma(r) 2 \pi r \mathrm{~d} r=-Q\left[1-\frac{1}{\sqrt{1+\left(\frac{R}{a}\right)^{2}}}\right] \approx-Q
$$

![img-374.jpeg](img-374.jpeg)

电图 $1-32-2$

若 $R$ 为无穷大，则板 $1:$ 的感应电荷严格等于 $-Q$ 。
2. 导体板不接地，带电量 $Q_{0}$ 。为了使得从点电荷 $Q$ 发出的电场线能垂直地中止在导体板右表面上，右表面上应有上述按 $\sigma(r)$ 分布的电量为 $-Q$ 的感应电荷。由于导体板总电量为 $Q_{0}$, 除 $-Q$ 感应电荷外，剩余的电量为

$$
Q_{0}-(-Q)=Q_{0}+Q
$$

这个 $\left(Q_{0}+Q\right)$ 的电量应均匀分布在导体板的左、右两个表面上，面电荷密度为

$$
\sigma=\frac{Q_{0}+Q}{2 \pi R^{2}}
$$

因此，导体板右表面和左表面的面电荷密度分别为

$$
\begin{gathered}
\sigma_{\mathrm{G}}(r)=\sigma(r)+\sigma=\frac{Q_{0}+Q}{2 \pi R^{2}}-\frac{Q_{0}}{2 \pi\left(r^{2}+a^{2}\right)^{3 / 2}} \\
\sigma_{\mathrm{E}}(r)=\sigma=\frac{Q_{0}+Q}{2 \pi R^{2}}
\end{gathered}
$$

$\sigma_{\mathrm{G}}(r)$ 和 $\sigma_{\mathrm{E}}(r)$ 以及点电荷 $Q$ 使导体板内电场强度处处为零。
【题 33】 如电图 1-33-1所示，两块足够大的接地导体平面 A 和 B 平行竖直放置，相距 $2 d$ ， $d=10 \mathrm{~cm}$ 。在两板之间的中央位置，用长 $l=1 \mathrm{~m}$ 的绝缘细线悬挂一个质量 $m=0.1 \mathrm{~g}$ ，电量 $q=$ $5 \times 10^{-9} \mathrm{C}$ 的小摆球。让小摆球稍稍偏离平衡位置后释放，使之小角度摆动。忽略各种电磁阻尼和空气阻尼，试求小球的摆动周期 $T$ 。
【分析】摆球的运动轨迹是圆弧，在颌角很小时，可近似为在水平面的直线。
当摆球在中央位置时，因摆球带电，两接地导体板上会产生非均匀分布的感应电荷，由静电镜像法（参看本章题 32），感应电荷对带电摆球的作用可等效为一系列镜像点电荷的水平作用力，由对称性，这些力相互抵消，摆球在中央位置受力平衡。当摆球稍稍偏离平衡位置时，一方面摆线张力的水平分量要使摆球回到中央平衡位置（摆线张力的坚直分量与重力抵消），另一方面各镜像点电荷的位置将随之发生变化，它们对带电摆球的静电作用力仍近似沿水平方向，但彼此不再抵消，即电力的合力不再为零，上述摆线张力的水平分量及沿水平方向的电力合力之和就是摆球所受的沿水平方向的回复力，它使摆球在水平方向往复振动。

随着带电摆球的运动，导体平板中的感应电荷会有相应的迁移，严格说来已不属于静电问题，但因小角度摆动比较缓慢，可近似当作静电问题处理。感应电荷的迁移运动必定会导致相应的能量损失，此即电磁阻尼，故严格说来摆球将作阻尼振动。因题设电磁阻尼很小，可略，无需涉及。

【解】 当带电摆球在 A ，B 之间的中央位置时，为使接地导体板 A 的电势为零，需在 A 左侧 $d$ 处对称地有一电量为 $-q$ 的镜像点电荷，记为 $-q_{\mathrm{A} 1}$ 为使 B 电势为零，需在 B 右侧 $d$ 处对称地有一电量为 $-q$ 的镜像点电荷，记为 $-q_{\text {III }}$ 。由于 $-q_{\text {III }}$ 对 A 的非零电势贡献，为使 A 的电势仍为零，需在 A 左侧 $3 d$ 处再对称地有电量为 $q$ 的镜像点电荷，记为 $q_{\mathrm{A} 2}$ ，同样，由于 $-q_{\mathrm{A} 1}$ 对 B 的非零电势贡献，为使 B 的电势仍为零，需在 B 右侧 $3 d$ 处再对称地有电量为 $q$ 的镜像点电荷，记为 $q_{\text {B2 }}$ ，同样，为了消除 $q_{\text {B2 }}$ 对 A 和 $q_{\mathrm{A} 2}$ 对 B 的非零电势贡献，又需再有一对镜像点电荷 $-q_{\mathrm{A} 3}$ ， $-q_{\text {B3 }}$ ，如此继续下去，形成左、右对称的镜像点电荷的无限系列。

当带电摆球偏离中央位置时，也有相应的左、右无限系列的镜像点电荷，为了讨论方便，取摆球的中央位置为原点，取水平向右为 $x$ 轴，则当带电摆球在 $x$ 位置时，各镜像点电荷的位置如电图1-33-2所示。
![img-375.jpeg](img-375.jpeg)

电图1-33-2
各镜像点电荷（简称电荷）的位置及其与带电摆球之间的距离（简称距离）详如下表。

| 电荷 | $-q_{\mathrm{A} 1}$ | $-q_{\mathrm{B} 1}$ | $q_{\mathrm{A} 2}$ | $q_{\mathrm{B} 2}$ | $-q_{\mathrm{A} 3}$ | $-q_{\mathrm{B} 3}$ | $q_{\mathrm{A} 4}$ | $q_{\mathrm{B} 4}$ | $\cdots$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 位置 | $-2 d-x$ | $2 d-x$ | $-4 d+x$ | $4 d+x$ | $-6 d-x$ | $6 d-x$ | $-8 d+x$ | $8 d+x$ | $\cdots$ |
| 距离 | $2 d+2 x$ | $2 d-2 x$ | $4 d$ | $4 d$ | $6 d+2 x$ | $6 d-2 x$ | $8 d$ | $8 d$ | $\cdots$ |

这些镜像点电荷对带电摆球静电作用力的合力为

$$
F_{x 1}=\frac{q^{2}}{4 \pi \varepsilon_{0}}\left\{\left[\frac{1}{(2 d-2 x)^{2}}+\frac{1}{(4 d)^{2}}+\frac{1}{(6 d-2 x)^{2}}+\frac{1}{(8 d)^{2}}+\cdots\right]\right.
$$

$$
\begin{gathered}
-\left[\frac{1}{(2 d+2 x)^{2}}+\frac{1}{(4 d)^{2}}+\frac{1}{(6 d+2 x)^{2}}+\frac{1}{(8 d)^{2}}+\cdots\right]\left\{\right. \\
=\frac{q^{2}}{4 \pi \varepsilon_{0}}\left\{\left[\frac{1}{(2 d-2 x)^{2}}-\frac{1}{(2 d+2 x)^{2}}\right]+\left[\frac{1}{(6 d-2 x)^{2}}-\frac{1}{(6 d+2 x)^{2}}\right]+\cdots\right\}
\end{gathered}
$$

因

$$
!x \mid \ll d
$$

近似得出

$$
F_{x 1}=\frac{q^{2}}{4 \pi \varepsilon_{0}}\left\{\frac{x}{d^{3}}+\frac{x}{(3 d)^{3}}+\frac{x}{(5 d)^{3}}+\cdots\right\}=\frac{q^{2}}{4 \pi \varepsilon_{0} d^{3}}\left(1+\frac{1}{3^{3}}+\frac{1}{5^{3}}+\cdots\right) x
$$

式中

$$
\left(1+\frac{1}{3^{3}}+\frac{1}{5^{3}}+\cdots\right) \approx 1.052
$$

把有关数据代入，得

$$
F_{x 1}=2.367 x \mathrm{~N} / \mathrm{m}
$$

当摆球在 $x$ 位置时，所受摆线张力的水平分量为

$$
F_{x 2}=-m g \frac{x}{l}=-9.8 x \mathrm{~N} / \mathrm{m}
$$

故摆球在 $x$ 位置时，所受沿 $x$ 方向的合力为

$$
F_{x}=F_{x 1}+F_{x 2}=-7.433 x \mathrm{~N} / \mathrm{m}
$$

这是一个线性回复力，摆球在它的作用下很绕中央的平衡位置作简谐振动，其振动周期为

$$
T=2 \pi \sqrt{\frac{m}{k}}
$$

式中 $k=7.433 \mathrm{~N} / \mathrm{m}, m=0.1 \mathrm{~g}$ ，代入，得

$$
T=2.3 \mathrm{~s}
$$

【本题是1994年北京大学物理试验班学生吴昍编制的，该试验班是为了培训、选拨参加 $\mathrm{IPbO}($ 国际中学生物理奥林匹克竞赛)的中国代表队而设立的。】

【题 34】 半径为 $R$ 的导体球带有电量 $Q(Q>0)$ 。今在距球心为 $a$ 处 $(a>R)$ 故置一个与 $Q$ 同号的点电荷 $q$ 。为使导体球在静电平衡时受到 $q$ 的作用力吸引，试确定 $q$ 的取值范围。
【分析】 点电荷 $q$ 对导体球 $Q$ 的作用力与导体球 $Q$ 对点电荷 $q$ 的作用力遵循牛顿第三定律。球外点电荷 $q$ 所受导体球 $Q$ 的作用力取决于导体球 $Q$ 在该点的电场强度。为此需要知道导体球上电量 $Q$ 的分布。因静电感应，导体球上 $Q$ 的分布是不均匀的，难于计算，但它在球外的电场强度可用镜像法来求。

如图，先把导体球接地，使其电势为零，设由于点电荷 $q$ 的静电感应使导体表面带有不均匀分布的感应电荷 $q^{\prime}$ 。根据镜像法，感应电荷 $q^{\prime}$ 在球外的电场可用虚设的点电荷 $q^{\prime}$ 代替。设虚点电荷 $q^{\prime}$ 处在球心 $O$ 与 $q$ 的联线上，与球心相距为 $a^{\prime}$ 。根据 $q$ 和 $q^{\prime}$ 应使接地导体球电势为零的条件，可以求出 $q^{\prime}$ 及 $a^{\prime}$ 的值。于是，接地导体球外，由 $q$ 以及球面上感应电荷 $q^{\prime}$ 产生的场，可以等效地用 $q$ 和虚点电荷 $q^{\prime}$ 在球外产生的场代替，后者易求。只要这样提出的尝试解满足静电场的基本方程和边条件，则根据唯一性定理，尝试解就是实际的解。撤去导体球的接地线后，球面上感应电荷 $q^{\prime}$ 的分布不变，为了使球面上的总电量等于题设的 $Q$ ，可再加上 $\left(Q-q^{\prime}\right)$ 的电量。因为静电平衡时，导体球内部的电场强度为零，所以加上的 $\left(Q-q^{\prime}\right)$ 电量应均匀分布在导体球的表面，它在球外的场易求。[也可以用一个位于球心的虚设的点电荷 $\left(Q-q^{\prime}\right)$ 来代替，它们在球外产生的场相同。]

因此，带电量为 $Q$ 的导体球在球外点电荷 $q$ 处的电场强度，等于在 $a^{\prime}$ 处的虚点电荷 $q^{\prime}$ 与均匀分布在导体球
![img-376.jpeg](img-376.jpeg)

电图 $1-34-1$

表面的 $\left(Q-q^{\prime}\right)$ [或另一个位于球心的虚点电荷 $\left(Q-q^{\prime}\right)$ ]的共同贡献，不难求出。
【解】导体球接地，其电势为零。因点电荷 $q$ 的静电感应使球面上有感应电荷 $q^{\prime}$ 。设感应电荷在球外的场可以等效地用虚设的位于 $a^{\prime}$ 的点电荷 $q^{\prime}$ 代替。如图，应有

$$
\frac{q}{4 \pi \varepsilon_{0} r}+\frac{q}{4 \pi \varepsilon_{0} r^{\prime}}=0
$$

即

$$
r^{\prime} q=-r q^{\prime}
$$

如图，利用几何关系，得

$$
q \sqrt{R^{2}+a^{\prime 2}-2 R a^{\prime} \cos \theta}=-q^{\prime} \sqrt{R^{2}+a^{2}-2 R a \cos \theta}
$$

即

$$
q^{2}\left(R^{2}+a^{\prime 2}-2 R a^{\prime} \cos \theta\right)=q^{\prime 2}\left(R^{2}+a^{2}-2 R a \cos \theta\right)
$$

因上式对任何 $\theta$ 都成立，故上式两边 $\cos \theta$ 项的系数必须相等，即有

$$
a^{\prime} q^{2}=a q^{\prime 2}
$$

把（2）式代入（1）式，得

$$
a^{\prime}=\frac{R^{2}}{a}
$$

由（2），（3）式，得

$$
q^{\prime}=-\frac{R}{a} q
$$

因此，接地导体球上感应电荷在球外的场可以用位于 $a^{\prime}=\frac{R^{2}}{a}$ ，电量为 $q^{\prime}=-\frac{R}{a} q$ 的虚点电荷在球外的场来代替。

撤去接地线，导体球面上感应电荷 $q^{\prime}$ 的分布不变。再给导体球（ $Q-q^{\prime}$ ）的电量，使其总电量为

$$
q^{\prime}+\left(Q-q^{\prime}\right)=Q
$$

因平衡的导体球内部电场强度为零，故 $\left(Q-q^{\prime}\right)$ 应均匀分布在导体球表面上。于是，总电量为 $Q$的导体球在球外点电荷 $q$ 处的电场强度为

$$
E=\frac{q^{\prime}}{4 \pi \varepsilon_{0}\left(a-a^{\prime}\right)^{2}}+\frac{Q-q^{\prime}}{4 \pi \varepsilon_{0} a^{2}}
$$

点电荷 $q$ 所受作用力为

$$
F=\frac{q^{\prime} q}{4 \pi \varepsilon_{0}\left(a-a^{\prime}\right)^{2}}+\frac{\left(Q-q^{\prime}\right) q}{4 \pi \varepsilon_{0} a^{2}}
$$

把（3）、（4）式的 $a^{\prime}$ 和 $q^{\prime}$ 代入上式，得

$$
F=\frac{-q}{4 \pi \varepsilon_{0} a^{2}}+\left[\frac{\left(2 a^{2}-R^{2}\right) R^{3} q}{a\left(a^{2}-R^{2}\right)^{2}}-Q\right]
$$

当 $F>0$ 时，为斥力；当 $F<0$ 时，为吸引力。为使 $F<0$ ，要求上式右边方括号中的量为正值，即要求

$$
q>\frac{a\left(a^{2}-R^{2}\right)^{2}}{\left(2 a^{2}-R^{2}\right) R^{3}} Q
$$

因此，当点电荷电量 $q$ 的取值范围满足上式时，尽管 $q$ 与 $Q$ 同号，由于静电感应，其间的作用力却为吸引力。

【题 35】两个半径均为 $R$ 的导体球相互接触形成一孤立导体。试求此孤立导体的电容。
【分析】孤立导体的电容为 $C=\frac{Q}{U_{0}}$ ，其中 $Q$ 是其电势达到 $U_{0}$ 时所需充电的电量。如果孤立导体外形很对称，充电后表面电荷分布均匀，则孤立导体外的电场强度分布易求。于是 $U_{0}$ 与 $Q$的关系可知，问题得解。

本题的孤立导体不具有很强的对称性，充电后，表面电荷分布不均匀且未知，难以求出球外的电场强度分布，也无法由此找出 $Q$ 与 $U_{0}$ 的关系。

镜像法将两球面不均匀分布电荷在球外的场，同一系列虚设的点电荷对的场等效地代替。当这些点电荷对在两球面上产生的电势等于 $U_{0}$ 时，这些点电荷对的电量之和即为所求的 $Q$ 。

为此，如图所示，首先在两球心虚设一对点电荷 $q_{1}=4 \pi \varepsilon_{0} R U_{0}$ （ $R$ 为球半径），使每一个在球心的点电荷 $q_{1}$ 在自己的球面上产生的电势为 $U_{0}$ 。但这一对 $q_{1}$ 同时也在对方球面上产生附加电势，因而两球面的电势大于 $U_{0}$ 。为了使两球面的电势等于 $U_{0}$ ，需要消除附加电势，各自在对方球内适当位置 $b_{2}$ 处引入第二对虚设的点电荷 $q_{2}$ ，但这一对 $q_{2}$ 又会在原球面上产生附加电势，为了消除附加电势，又需在原球内
![img-377.jpeg](img-377.jpeg)

电图 $1-35-1$
$b_{3}$ 处引入第三对虚设的点电荷 $q_{3}$ 。如此继续，逐步调整逼近。当引入第 $n$ 对虚设的点电荷 $q_{n}$ ，且当 $n \rightarrow \infty$ 时，孤立导体两球面上的电势均将准确地达到 $U_{0}$ 。这 $n$ 对虚设的点电荷的电量之和即为所求的 $Q, Q$ 与 $U_{0}$ 的比值就是孤立导体的电容 $C$ 。
【解】根据镜像 ${ }^{\text {h }}$ ，首先在两球心处虚设一对点电荷 $q_{1}$ ，其电量为

$$
q_{1}=4 \pi \varepsilon_{0} R U_{0}
$$

于是每个 $q_{1}$ 在自己的球面上产生的电势为 $U_{0}$ ，但 $q_{1}$ 还将在对方球面上产生附加电势。为了消除此附加电势，需在对方球内 $b_{2}$ 处虚设第二对点电荷 $q_{2}$ ，

$$
q_{2}=-\frac{R}{2 R} q_{1}=-\frac{q_{1}}{2}
$

$$q_{2}$ 与球心的距离 $b_{2}$ 为

$$
b_{2}=\frac{R^{2}}{2 R}=\frac{R}{2}
$$

这样，左球心的 $q_{1}$ 与右球 $b_{2}$ 处的 $q_{2}$ 在右球面上的电势为零，但这一对 $q_{2}$ 又会在原球面上引起附加电势，为了消除这一附加电势，又需在两球内引入第三对虚设的点电荷 $q_{3}$ ，

$$
q_{3}=-\frac{R}{2 R-b_{2}} q_{2}=\frac{q_{3}}{3}
$$

$q_{3}$ 与各自所在球的球心相距为

$$
b_{3}=\frac{R^{2}}{2 R-b_{2}}=\frac{2}{3} R
$$

关于 $q_{2}$ 和 $b_{2}$ 以及 $q_{3}$ 和 $b_{3}$ 的取值清参看本章题 34.
如此继续下去，则第 $n$ 对虚设点电荷的电量 $q_{n}$ 及其位置 $b_{n}$ （即与所在球的球心的距离）应满足下述速推关系，

$$
\begin{aligned}
& q_{n}=-\frac{R}{2 R-b_{n-1}} q_{n-1} \\
& b_{n}=\frac{R^{2}}{2 R-b_{n-1}}
\end{aligned}
$$

两式相除，得

$$
b_{n}=-\frac{R q_{n}}{q_{n-1}}
$$

同理

$$
b_{n-1}=-\frac{R q_{n-1}}{q_{n-2}}
$$

把以上两式代入 $b_{n}$ 的速推式中，得

$$
-\frac{R q_{n}}{q_{n-1}}=\frac{R^{2}}{2 R+\frac{R q_{n} \cdot 1}{q_{n-2}}}
$$

即

$$
\frac{q_{n-1}}{q_{n}}+\frac{2 q_{n-2}+q_{n-1}}{q_{n-2}}=0
$$

或

$$
\frac{1}{q_{n}}+\frac{2}{q_{n-1}}+\frac{2}{q_{n-2}}=0
$$

已知

$$
q_{1}=4 \pi \varepsilon_{0} R U_{0}, q_{2}=-\frac{q_{1}}{2}
$$

故

$$
q_{3}=\frac{q_{1}}{3}, q_{4}=-\frac{q_{1}}{4}, \cdots
$$

猜测通解为

$$
q_{n}=(-1)^{n+1} \frac{q_{1}}{n}
$$

验证表明，上述通解满足 $q_{n}$ 与 $q_{n-1}$ 及 $q_{n-2}$ 之间的递推关系，合理。
当孤立导体的电势准确地达到 $U_{0}$ 时，表面的总电量 $Q$ 即为这 $n$ 对 $(n \rightarrow \infty)$ 虚设点电荷的电量之和，即

$$
\begin{aligned}
Q & =\sum_{n=1}^{\infty} 2 q_{n} \\
& =2 q_{1}\left(1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\cdots\right)
\end{aligned}
$$

利用公式

$$
\ln 2=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\cdots
$$

得

$$
Q=2 q_{1} \ln 2=8 \pi \varepsilon_{0} R U_{0} \ln 2
$$

故此孤立导体的电容为

$$
C=\frac{Q}{U_{0}}=8 \pi \varepsilon_{0} R \ln 2
$$

【题 36】 在空间 $n$ 个点上依次放置 $n$ 个点电荷 $q_{1}, q_{2}, \cdots, q_{n}$ ，这些电荷在这 $n$ 个点上产生的总电势分别记为 $U_{1}, U_{2}, \cdots, U_{n}$ 。若在这 $n$ 个点上换成另一组点电荷 $q_{1}^{\prime}, q_{2}^{\prime}, \cdots, q_{n}^{\prime}$ ，则相应的总电势为 $U_{1}^{\prime}, U_{2}^{\prime}, \cdots, U_{n}^{\prime}$ 。试证明

$$
\sum_{i=1}^{n} q_{i} U_{i}^{\prime}=\sum_{i=1}^{n} q_{i}^{\prime} U_{i}, \quad n \geqslant 2
$$

由此进一步证明，真空中由一对导体构成的电容器的电容与这两个导体的带电量多少无关。
【分析】 根据点电荷的电势公式及电势叠加原理，利用数学归纳法即可证明。亦即假设上式在 $n=k$ 时成立，证明在第 $(k+1)$ 个点上放上第 $(k+1)$ 个点电荷时仍然成立。

电容器由两个导体构成，它们分别带有等量异号电荷，各自有一定的电势，把导体上的电荷看成是由无穷多个小块（点电荷）组成的，利用上面已经证明的公式，注意到每一个导体是等势的，即可证明电容器两导体之间的电势差与所带电量之比为常量，即电容器的电容与所带电量多少无关，换言之，电容器的电容只取决于它的几何性质。
【解】若 $n=2$ ，在第 1 点，第 2 点分别放上点电荷 $q_{1}, q_{2}$ ，两点的间距表为 $r_{1,2}$ ，则 $q_{2}$ 在第 1 点的电势 $U_{1}$ 和 $q_{1}$ 在第 2 点的电势 $U_{2}$ 分别为

$$
\begin{aligned}
& U_{1}=\frac{q_{2}}{4 \pi \varepsilon_{0} r_{1,2}} \\
& U_{2}=\frac{q_{1}}{4 \pi \varepsilon_{0} r_{1,2}}
\end{aligned}
$$

把 $q_{1}, q_{2}$ 换成 $q_{1}^{\prime}, q_{2}^{\prime}$, 则相应的 $U_{1}^{\prime}, U_{2}^{\prime}$ 为

$$
U_{1}^{\prime}=\frac{q_{2}^{\prime}}{4 \pi \varepsilon_{0} r_{1,2}}
$$

$$
U_{2}^{\prime}=\frac{q_{1}^{\prime}}{4 \pi \varepsilon_{0} r_{1,2}}
$$

于是

$$
\begin{aligned}
\sum_{i=1}^{n} q_{i} U_{i}^{\prime} & =q_{1} U_{1}^{\prime}+q_{2} U_{2}^{\prime} \\
& =\frac{q_{1} q_{2}^{\prime}}{4 \pi \varepsilon_{0} r_{1,2}}+\frac{q_{2} q_{1}^{\prime}}{4 \pi \varepsilon_{0} r_{1,2}} \\
\sum_{i=1}^{n} q_{i}^{\prime} U_{i} & =q_{1}^{\prime} U_{1}+q_{2}^{\prime} U_{2} \\
& =\frac{q_{1}^{\prime}}{4 \pi \varepsilon_{0} r_{1,2}}+\frac{q_{2}^{\prime}}{4 \pi \varepsilon_{0} r_{1,2}}
\end{aligned}
$$

可见， $n=2$ 时，公式 $\sum_{i=1}^{n} q_{i} U_{i}^{\prime}=\sum_{i=1}^{n} q_{i}^{\prime} U_{i}$ 成立。
假设 $n=k$ 时，公式成立，即有

$$
\sum_{i=1}^{k} q_{i} U_{i}^{\prime}(k)=\sum_{i=1}^{k} q_{i}^{\prime} U_{i}(k)
$$

再在第 $(k+1)$ 个点先后放 $\left\{: q_{k+1}, q_{k+1}^{\prime}, \ldots\right.$, 该点前 $k$ 个点的距离为 $r_{1, k+1}, r_{2, k+1}, \cdots, r_{k, k+1}$ ，则有

$$
\begin{gathered}
U_{1}^{\prime}(k+1)=U_{1}^{\prime}(k)+\frac{q_{k+1}^{\prime}}{4 \pi \varepsilon_{0} r_{1, k+1}} \\
\cdots \cdots \\
U_{k}^{\prime}(k+1)=U_{k}^{\prime}(k)+\frac{q_{k+1}^{\prime}}{4 \pi \varepsilon_{0} r_{k, k+1}} \\
U_{k-1}^{\prime}(k+1)=\frac{1}{4 \pi \varepsilon_{0}}\left(\frac{q_{1}^{\prime}}{r_{1, k+1}}+\cdots+\frac{q_{k}^{\prime}}{r_{k, k+1}}\right)
\end{gathered}
$$

及

$$
\begin{gathered}
U_{1}(k+1)=U_{1}(k)+\frac{q_{k+1}}{4 \pi \varepsilon_{0} r_{1, k+1}} \\
\cdots \cdots \\
U_{k}(k+1)=U_{k}(k)+\frac{q_{k+1}}{4 \pi \varepsilon_{0} r_{k, k+1}} \\
U_{k+1}(k+1)=\frac{1}{4 \pi \varepsilon_{0}}\left(\frac{q_{1}}{r_{1, k+1}}+\cdots+\frac{q_{k}}{r_{k, k+1}}\right)
\end{gathered}
$$

式中 $U_{1}^{\prime}(k+1)$ 是 $k$ 个点电荷 $\left(q_{2}^{\prime}, q_{3}^{\prime}, \cdots, q_{k+1}^{\prime}\right)$ 在第 1 点（即 $q_{1}^{\prime}$ 所在处）的电势，它应等于 （ $k-1$ ）个点电荷（ $q_{2}^{\prime}, q_{3}^{\prime}, \cdots, q_{k}^{\prime}$ ）在该点的电势 $U_{1}^{\prime}(k)$ 与第 $(k+1)$ 个电荷 $q_{k+1}^{\prime}$ 的贡献 $\left(\frac{q_{k+1}^{\prime}}{4 \pi \varepsilon_{0} r_{1, k+1}}\right)$ 之和。余类似， $U_{k+1}^{\prime}(k+1)$ 是 $k$ 个点电荷 $\left(q_{1}^{\prime}, q_{2}^{\prime}, \cdots, q_{k}^{\prime}\right)$ 在第 $(k+1)$ 点（即 $q_{k+1}^{\prime}$ 所在处) 的电势。于是，有

$$
\sum_{i=1}^{k+1} q_{i} U_{i}^{\prime}(k+1)=q_{1} U_{1}^{\prime}(k+1)+q_{2} U_{2}^{\prime}(k+1)+\cdots+q_{k} U_{k}^{\prime}(k+1)+q_{k+1} U_{k+1}^{\prime}(k+1)
$$

$$
\begin{aligned}
= & q_{1} U_{1}^{\prime}(k)+\frac{q_{1} q_{k+1}^{\prime}}{4 \pi \varepsilon_{0} r_{1, k+1}}+q_{2} U_{2}^{\prime}(k)+\frac{q_{2} q_{k+1}^{\prime}}{4 \pi \varepsilon_{0} r_{2, k+1}}+\cdots \\
& +q_{k} U_{k}^{\prime}(k)+\frac{q_{k} q_{k+1}^{\prime}}{4 \pi \varepsilon_{0} r_{k, k+1}}+\frac{q_{k-1}}{4 \pi \varepsilon_{0}}\left(\frac{q_{1}^{\prime}}{r_{1, k+1}}+\cdots+\frac{q_{k}^{\prime}}{r_{k, k+1}}\right) \\
= & \sum_{i=1}^{k} q_{i} U_{i}^{\prime}(k)+\frac{1}{4 \pi \varepsilon_{0}}\left(\frac{q_{1} q_{k+1}^{\prime}+q_{1}^{\prime} q_{k+1}}{r_{1, k+1}}+\cdots+\frac{q_{k} q_{k+1}^{\prime}+q_{k}^{\prime} q_{k+1}}{r_{k, k+1}}\right)
\end{aligned}
$$

同理可得

$$
\sum_{i=1}^{k+1} q_{i}^{\prime} U_{i}(k+1)=\sum_{i=1}^{k} q_{i}^{\prime} U_{i}(k)+\frac{1}{4 \pi \varepsilon_{0}}\left(\frac{q_{1}^{\prime} q_{k+1}+q_{1} q_{k+1}^{\prime}}{r_{1, k+1}}+\cdots+\frac{q_{k}^{\prime} q_{k+1}+q_{k} q_{k+1}^{\prime}}{r_{k, k+1}}\right)
$$

以上两式的等式右边第一项相等（因假设所证公式在 $n=k$ 时成立），右边第二项完全相同，因此

$$
\sum_{i=1}^{k+1} q_{i} U_{i}^{\prime}(k+1)=\sum_{i=1}^{k+1} q_{i}^{\prime} U_{i}(k+1)
$$

可见，若题中公式在 $n=k$ 时成立，则在 $n=(k+1)$ 时也成立，于是该公式得到证明。

构成电容器的两个导体分别表为 1 （正极）和 2 （负极），当两导体分别带电 $\pm Q$ 时，相应的电势为 $U_{1}$ 和 $U_{2}$ 当两导体分别带电 $\pm Q^{\prime}$ 时，相应的电势为 $U_{1}^{\prime}$ 和 $U_{2}^{\prime}$ 。

把导体上的电荷看成是由无穷多个小块（点电荷）组成的。根据已经证明的公式，有

$$
\sum q_{i} U_{i}^{\prime}=\sum q_{i}^{\prime} U_{i}
$$

式中的 $\sum$ 是对两个导体求和，即 $\sum_{1}=\sum_{1}+\sum_{2}$ ，上式可写成

$$
\sum_{1} q_{i} U_{i}^{\prime}+\sum_{2} q_{i} U_{i}^{\prime}=\sum_{i} q_{i}^{\prime} U_{i}+\sum_{2} q_{i}^{\prime} U_{i}
$$

因为每一个导体都是等势体，故有

$$
\left(\sum_{1} q_{i}\right) U_{1}^{\prime}+\left(\sum_{2} q_{i}\right) U_{2}^{\prime}=\left(\sum_{1} q_{i}^{\prime}\right) U_{1}+\left(\sum_{2} q_{i}^{\prime}\right) U_{2}
$$

即

$$
Q_{1} U_{1}^{\prime}+Q_{2} U_{2}^{\prime}=Q_{1}^{\prime} U_{1}+Q_{2}^{\prime} U_{2}
$$

电容的定义为

$$
C=\frac{Q}{U_{2}-U_{1}}, \quad C^{\prime}=\frac{Q^{\prime}}{U_{2}^{\prime}-U_{1}^{\prime}}
$$

因此

$$
C=C^{\prime}
$$

可见，电容器的电容 $C$ 与带电量多少无关，它取决于电容器的几何性质（形状，大小，相对位置，若其中填充介质，则还与介质的性质有关）。

【题 37】 如图所示，A 和 B 是两块相同的水平平行金属板，相距为 $d$ ，构成电容为 $C$ 的平行板电容器。B板接地，B板中有一个小孔，开始时 A 和 B 均不带电。在 B 板小孔上方 $h$ 处，不断有带电小液珠从静止开始自由下落（空气阻力可略），每个液珠的电量为 $q$ ，质量为 $m$ ，液珠经小孔到达 A 板后被吸收，液珠的下落保持一定的间隙，即在前一液珠被 A 板吸收并达到静电平衡后，后一液珠才继续下落，试问有多少个液珠能落到 A 板上。
【分析】第一个液珠只受重力作用，自由下落到 A 板后，给 A 板电量 $q$ ，达到静电平衡后， $q$ 在 A板上表面均匀分布，同时接地的 B 板下表面产生感应电荷 $-q$ ，亦均匀分布。上述 $q$ 和 $-q$ 在 A和 B 间产生匀强电场，使第二个液珠除受垂直向下的重力外，还要受到垂直向上的电场力（阻力）的作用。随着液珠不断落下，A 和 B 板的电量逐渐增多，其间的匀强电场逐渐增强，减去重力后，液珠下落经过 A 和 B 板之间时所受阻力越来越大。最终，当液珠所受阻力使它到达 A 板的速度减为零时，则此液珠就是被 A 板吸收的最后一个液珠。此后落下的液珠，在到达 A 板之前已减速为零，将在向上阻力的作用下反弹回去，无法到达 A 板。
【解】液珠从静止下落到达 B 板小孔时的速度为

$$
v_{0}=\sqrt{2 g h}
$$

当已有 $N$ 个液珠落到 A 板被吸收并达到静电平衡后，电容器被充电到

$$
Q=N q
$$

两板间的电势差为

$$
U=\frac{Q}{C}
$$

A 和 B 板之间匀强电场的电场强度为

$$
E=\frac{U}{d}
$$

由以上三式，得
![img-378.jpeg](img-378.jpeg)

电图 $1-37-1$

$$
E=\frac{N q}{C d}
$$

第 $(N+1)$ 个液珠经 B 板小孔进入电容器后，所受电场力（方向向上，为阻力）为

$$
F_{q}=q E=\frac{N q^{2}}{C d}
$$

液珠同时受到方向向下的重力 $m g$ ，当 $F_{q}>m g$ 时，液珠减速运动，其加速度的方向向上，大小为

$$
a=\frac{F_{q}}{m}-g=\frac{N q^{2}}{m C d}-g
$$

若此加速度刚好能使液珠在电容器中经 $d$ 的距离后减速为零，则此液珠就是能够到达 A 板并为电容器充电的最后一个液珠。这个要求可以表述为

$$
2 a d=v_{0}^{2}
$$

把上面得出的 $v_{0}$ 和 $a$ 代入，得

$$
\left(\frac{N q^{2}}{m C d}-g\right) d=g h
$$

解出

$$
N=\frac{m g C(d+h)}{q^{2}}
$$

因此，当 $m g C(d+h) / q^{2}$ 为正整数时，能够落到 A 板上的带电液珠的数目为

$$
\left[\frac{m g C(d+h)}{q^{2}}+1\right] \text { 个 }
$$

当 $m g C(d+h) / q^{2}$ 不为正整数时，能够落到 A 板上的带电液珠的数目为

$$
\text { 大于 }\left[\frac{m g C(d+h)}{q^{2}}\right] \text { 的第一个正整数 }
$$

【题 38】 如图所示，两个相同的水平放置的平板空气电容器连接起来，充电后电容器 A 中的带电微粒 $P$ 刚好静止地悬浮着。撤去电源，将电容器 B 的两板水平地错开，使两板相对的面积减小为原来的一半。试求此时带电微粒 $P$ 在坚直方向运动的加速度。
【分析】 带电微粒 $P$ 悬浮，表明所受重力与电力达到平衡。电容器 B 的两板水平错开后，B 的电容减为原来之半，因已撤去电源，A 与
![img-379.jpeg](img-379.jpeg)

电图 $1-38-1$

B 所带电量之和不变，但有了重新分配，以确保 A 与 B 的电压相同。由此，可算出错开后 A 中的电场。重力和错开后 A 中的电场决定了微粒运动的加速度。
【解】 设开始时，A 和 B 的电容均为 $C$ ，电量均为 $Q$ ，电压均为 $U$ ，则

$$
U=\frac{Q}{C}
$$

A 中电场的电场强度为

$$
E=\frac{U}{d}=\frac{Q}{C d}
$$

式中 $d$ 是两板间距。微粒 $P$ 受重力 $m g$ ，方向竖直向下，还受电力 $q E$ ，达到平衡，故电力必竖直向上，于是

$$
m g=q E
$$

电容器 B 的两板水平错开，使相对面积减半，故 B 的电容减为 $\frac{C}{2}$ 。设错开后， A 与 B 的电量分别为 $Q_{\mathrm{A}}$ 和 $Q_{\mathrm{B}}$ 。因已撤去电源，总电量不变；因 A 和 B 按图中方式连接，电压相同；故有

$$
\begin{aligned}
Q_{\mathrm{A}}+Q_{\mathrm{B}} & =2 Q \\
\frac{Q_{\mathrm{A}}}{C} & =\frac{Q_{\mathrm{B}}}{\frac{C}{2}}
\end{aligned}
$$

解出

$$
Q_{\mathrm{A}}=\frac{4}{3} Q
$$

因此，错开后 A 中电场强度大小为

$$
E^{\prime}=\frac{Q_{\mathrm{A}}}{C d}=\frac{4}{3} \frac{Q}{C d}=\frac{4}{3} E
$$

错开后，微粒 $P$ 受重力 $m g$ ，向下；电力 $q E^{\prime}$ ，向上，故有

$$
m a=q E^{\prime}-m g=\frac{4}{3} q E-m g=\frac{1}{3} m g
$$

因此，错开后，微粒 $P$ 将以 $a=\frac{g}{3}$ 的加速度从静止开始，竖直向上加速运动。
【题 39】 如电图 1-39-1所示，一个边长为 $L$ 的正方形平板电容器，板面竖直地串联在线路中. 线路中的直流电源确保电压稳定，为 $V_{0}, G$ 是电流计。一块坠形金属板，垂直于图面方向的长度也为 $L$ ，高为 $L^{\prime}\left(L^{\prime} \ll L\right)$ ，厚为 $\frac{D}{D}(D$ 是电容器两板的间距， $P \gg 1$ 是一个系数)。开始时，金属板坚直地放在电容器中线（在电图1-39-1 中用虚线表示）的正上方，其下端与电容器两板的上端对齐，然后自由落下，忽略各种边缘效应，忽略电磁力对金属板的作用。

试求电容器极板上的电量 $Q$ 随时间 $t$ 的变化关系，并画出流过电流计的电流 $I$ 随时间 $t$ 的变化图线（如电图1-39-1，设从上到下流过电流计的电流为正，反之为负）。
![img-380.jpeg](img-380.jpeg)

电图1-39-1
![img-381.jpeg](img-381.jpeg)

电图 $1-39-2$

【分析】金属板自由下落前，由电容器的电容 $C_{0}$ 及所加电压 $V_{0}$ 可知极板上的电量 $Q_{0}$ 。
随着金属板的下落，电容发生了变化，导致极板上电量 $Q$ 的变化。当金属板因下落而进入电容器内时，整个系统可以看作两个水平方向的电容器串联后再在坚直方向与一个电容器并联，于是整个系统的电容 $C$ 及其变化可知，从而相应的 $Q$ 可求。由 $C(t)$ 关系，可得出 $Q(t)$ 关系，进而得出 $I(t)$ 关系并作图。
【解】如电图1-39-2所示，取 $y$ 坐标坚直向下，原点 $O$ 在电容器上端，在任意时刻 $t$ ，金属板下端的位置用 $y$ 表示。因金属板自由下落，故有

$$
y=\frac{1}{2} \mathrm{~g} t^{2}
$$

金属板下落前，系统的电容即电容器的电容 $C_{0}$ 为

$$
C_{0}=\frac{\varepsilon_{0} L^{2}}{D}
$$

当金属下端落到任意 $y$ 处时，系统电容为 $C . C$ 可视为在水平方向两个电容串联后（这两个电容由金属板两表面进入电容器的那部分与相对的那部分极板构成），再在坚直方向与另一个电容并联（这个电容由两极板的剩余部分构成）。利用电容的串并联公式及题目给定的条件，不难算出

$$
C= \begin{cases}\left(1+\frac{1}{P-1} \cdot \frac{y}{L}\right) C_{0}, & y \leqslant L^{\prime} \\ \left(1+\frac{1}{P-1} \cdot \frac{L^{\prime}}{L}\right) C_{0}, & L^{\prime}<y \leqslant L \\ \left(1+\frac{1}{P-1} \cdot \frac{L+L^{\prime}-y}{L}\right) C_{0}, & L<y \leqslant L+L^{\prime} \\ C_{0}, & L+L^{\prime}<y\end{cases}
$$

相应的极板上的电量为

$$
Q=C V_{0}
$$

由以上四式，得出

$$
Q=\left\{\begin{array}{ll}
{\left[1+\frac{g t^{2}}{2(P-1) L}\right] \frac{\varepsilon_{0} L^{2}}{D} V_{0},} & 0<t \leqslant \sqrt{\frac{2 L}{g}} \\
{\left[1+\frac{L^{\prime}}{(P-1) L}\right] \frac{\varepsilon_{0} L^{2}}{D} V_{0},} & \sqrt{\frac{2 L}{g}}<t \leqslant \sqrt{\frac{2 L}{g}} \\
{\left[1+\frac{L+L^{\prime}}{(P-1) L}-\frac{g t^{2}}{2(P-1) L}\right] \frac{\varepsilon_{0} L^{2}}{D} V_{0},} & \sqrt{\frac{2 L}{g}}<t \leqslant \sqrt{\frac{2\left(L+L^{\prime}\right)}{g}} \\
\frac{\varepsilon_{0} L^{2}}{D} V_{0}, & \sqrt{\frac{2\left(L+L^{\prime}\right)}{g}}<t
\end{array}\right\}
$$

![img-382.jpeg](img-382.jpeg)

电图 $1-39-3$
这就是所求的 $Q(t)$ 关系。式中的 $\frac{\varepsilon_{0} L^{2}}{D} V_{0}=C_{0} V_{0}=Q_{0}$ 即为金属板自由下落前，电容器极板上的电量。

因 $Q$ 随时间 $t$ 变化，产生的电流为

$$
I=\frac{\mathrm{d} Q}{\mathrm{~d} t}
$$

这就是电流计测出的电流，计算得出

$$
I=\left\{\begin{array}{lll}
\frac{\varepsilon_{0} L V_{0} g t}{(P-1) D} & & 0<t<\sqrt{\frac{2 L}{R}} \\
0, & \sqrt{\frac{2 L}{g}}<t<\sqrt{\frac{2 L}{g}} \\
-\frac{\varepsilon_{0} L V_{0} g t}{(P-1) D}, & \sqrt{\frac{2 L}{g}}<t<\sqrt{\frac{2\left(L+L^{*}\right)}{g}} \\
0, & \sqrt{\frac{2\left(L+L^{*}\right)}{g}}<t
\end{array}\right\}
$$

$I(t)$ 曲线如电图 1-39-3所示，在曲线中用箭头标明电流 $I$ 的变化，以免与坐标轴混淆。
【题 40】由直流电源、电容、电阻和开关 K 构成的网络如图所示，其中电源的电动势为 $\mathscr{E}$ ，三个电容器 $C_{1} 、 C_{2} 、 C_{3}$ 的电容均为 $C$ ，两个电阻器的电阻分别为 $R_{1}$ 和 $R_{2}$ 。开始时，三个电容器均不带电，先接通 $O a$ ，再接通 $O b$ ，再换接 $O a$ ，再换接 $O b ， \cdots$ ，如此反复换向。设每次换接前都已达到静电平衡。

试求：1. 第 $n$ 次接通 $O b$ 并达到静电平衡后，各电容器两端的电压分别是多少？2. 当反复换向无穷多次后，在所有电阻上消耗的总
![img-383.jpeg](img-383.jpeg)

电图1-40-1

电能是多少?

【分析】 $O a$ 第一次接通时， $C_{1}$ 与 $C_{2}$ 串联，因两者电容相同，电源电压 $\mathscr{E}$ 等分，两者各得 $\frac{1}{2} \mathscr{E} . O b$第一次接通时， $C_{2}$ 与 $C_{3}$ 并联，因两者电容相同，电量等分，相当于 $\frac{1}{2} \mathscr{E}$ 的电压等分，两者各得 $\frac{1}{4} \mathscr{E} . O a$ 第二次接通时， $C_{1}$ 与 $C_{2}$ 再次串联，因总电压比原光的 $\mathscr{E}$ 少了 $\frac{1}{4} \mathscr{E}$ ，电源为 $C_{1}$ 和 $C_{2}$ 充电补充 $\frac{1}{4} \mathscr{E}$ ，因 $C_{1}$ 与 $C_{2}$ 充电的电量相同，相当于 $\frac{1}{4} \mathscr{E}$ 等分， $C_{1}$ 与 $C_{2}$ 各得 $\frac{1}{8} \mathscr{E} . O b$ 第二次接通时，因 $C_{2}$ 电压比 $C_{3}$ 电压高 $\frac{1}{8} \mathscr{E}$ ，应再次等分， $C_{2}$ 与 $C_{3}$ 各得 $\frac{1}{16} \mathscr{E}$ ，即 $C_{2}$ 失去 $\frac{1}{8} \mathscr{E}$ 中的一半， $C_{3}$ 则得到 $\frac{1}{8} \mathscr{E}$ 中的一半。 $O a$ 第三次接通时， $C_{3}$ 损失的 $\frac{1}{16} \mathscr{E}$ ，又被电源补充，因 $C_{1}$ 与 $C_{2}$ 串联，故补给 $C_{1}$和 $C_{2}$ 各一半，即 $C_{1}$ 增加 $\frac{1}{32} \mathscr{E}, C_{2}$ 增加 $\frac{1}{32} \mathscr{E} . O b$ 第三次接通时，这个 $\frac{1}{32} \mathscr{E}$ 又被 $C_{2}$ 和 $C_{3}$ 等分。如此等等。经过关联地分析之后，即可求得第 $n$ 次接通 $O b$ 达静电平衡后， $C_{1} 、 C_{2} 、 C_{3}$ 的电压 $U_{1 n}$ 、 $U_{2 n} 、 U_{3 n}$ 。

由 $U_{1 n} 、 U_{2 n} 、 U_{3 n}$ ，可以得出 $n \rightarrow \infty$ 时各电容的电压 $U_{1} 、 U_{2} 、 U_{3}$ 。从而 $C_{1}$ 上的电量 $Q_{1}$ 可以确定， $Q_{1}$ 即为电源累计输送的电量，因而电源累计输出的功为 $W=\mathscr{E} Q_{1}$ 。另一方面，各电容贮存的电能 $W_{1} 、 W_{2} 、 W_{3}$ 可由各自的电容 $C$ 和电压 $U_{1} 、 U_{2} 、 U_{3}$ 算出。 $W$ 与 $\left(W_{1}+W_{2}+W_{2}\right)$ 之差，即电源所作总功与电容贮存能量之差，就是在电阻上消耗的总电能。
【解】1. $O a$ 第一次接通，因 $C_{1}$ 与 $C_{2}$ 串联，且电容均为 $C$ ，故两者电压分别为

$$
U_{11}=\frac{1}{2} \mathscr{E}, U_{21}^{\prime}=\frac{1}{2} \mathscr{E}
$$Ob 第一次接通，因 $C_{2}$ 与 $C_{3}$ 并联，且电容均为 $C$ ，故 $C_{2}$ 上的电量被 $C_{2}$ 与 $C_{3}$ 等分，相当于 $C_{2}$上的 $U_{21}^{\prime}=\frac{1}{2} \mathscr{E}$ 电压被 $C_{2}$ 与 $C_{3}$ 等分，各得 $\frac{1}{4} \mathscr{E}$ 即

$$
U_{21}=\frac{1}{4} \mathscr{E}, U_{31}=\frac{1}{4} \mathscr{E}
$$

Oa 第二次接通前，因 $C_{2}$ 的电压已被 $C_{3}$ 分去 $\frac{1}{4} \mathscr{E}$ ，故 $C_{1}$ 与 $C_{2}$ 串联的电压比电源电压 $\mathscr{E}$ 少 $\frac{1}{4} \mathscr{E}$. 接通后，电源将对 $C_{1}$ 与 $C_{2}$ 再充电，总电压仍为 $\mathscr{E}$ ，相当于补充 $\frac{1}{4} \mathscr{E}$ 电压。因 $C_{1}$ 与 $C_{2}$ 串联，再充电的电量同时经 $C_{1}$ 与 $C_{2}$ ，故 $C_{1}$ 与 $C_{2}$ 增加的电压相同，相当于补充的 $\frac{1}{4} \mathscr{E}$ 被 $C_{1}$ 与 $C_{2}$等分，各得 $\frac{1}{8} \mathscr{E}$. 于是， $C_{1}$ 与 $C_{2}$ 的电压分别为

$$
\begin{aligned}
& U_{12}=U_{11}+\frac{1}{8} \mathscr{E}=\frac{1}{2} \mathscr{E}+\frac{1}{8} \mathscr{E} \\
& U_{22}^{\prime}=U_{21}+\frac{1}{8} \mathscr{E}=\frac{1}{4} \mathscr{E}+\frac{1}{8} \mathscr{E}
\end{aligned}
$$

Ob 第二次接通前， $C_{2}$ 的电压比 $C_{3}$ 高 $\frac{1}{8} \mathscr{E}$ ，接通后，因 $C_{2}$ 与 $C_{3}$ 并联，此 $\frac{1}{8} \mathscr{E}$ 应被 $C_{2}$ 和 $C_{3}$ 等分，相当于 $C_{2}$ 损失 $\frac{1}{16} \mathscr{E}, C_{3}$ 获得 $\frac{1}{16} \mathscr{E}$ ，即

$$
\begin{aligned}
& U_{22}=U_{22}^{\prime}-\frac{1}{16} \mathscr{E}=\frac{1}{4} \mathscr{E}+\frac{1}{16} \mathscr{E} \\
& U_{32}=U_{31}+\frac{1}{16} \mathscr{E}=\frac{1}{4} \mathscr{E}+\frac{1}{16} \mathscr{E}
\end{aligned}
$$

$O a$ 第三次接通前， $C_{1}$ 与 $C_{2}$ 串联的电压比电源电压 $\mathscr{E}$ 少 $\frac{1}{16} \mathscr{E}$ 。接通后，应补充 $\frac{1}{16} \mathscr{E}, C_{1}$ 与 $C_{2}$ 各得 $\frac{1}{32} \mathscr{E}$ ，故 $C_{1}$ 与 $C_{2}$ 的电压分别为

$$
\begin{aligned}
& U_{13}=U_{12}+\frac{1}{32} \mathscr{E}=\frac{1}{2} \mathscr{E}+\frac{1}{8} \mathscr{E}+\frac{1}{32} \mathscr{E} \\
& U_{23}^{\prime}=U_{22}+\frac{1}{32} \mathscr{E}=\frac{1}{4} \mathscr{E}+\frac{1}{16} \mathscr{E}+\frac{1}{32} \mathscr{E}
\end{aligned}
$$

Ob 第三次接通前， $C_{2}$ 的电压比 $C_{3}$ 高 $\frac{1}{32} \mathscr{E}$ ，接通后，因 $C_{2}$ 与 $C_{3}$ 并联，此 $\frac{1}{32} \mathscr{E}$ 应被 $C_{2}$ 与 $C_{3}$ 等分，相当于 $C_{2}$ 损失 $\frac{1}{64} \mathscr{E}, C_{3}$ 获得 $\frac{1}{64} \mathscr{E}$ ，即

$$
\begin{aligned}
& U_{23}=U_{23}^{\prime}-\frac{1}{64} \mathscr{E}=\frac{1}{4} \mathscr{E}+\frac{1}{16} \mathscr{E}+\frac{1}{64} \mathscr{E} \\
& U_{33}=U_{32}+\frac{1}{64} \mathscr{E}=\frac{1}{4} \mathscr{E}+\frac{1}{16} \mathscr{E}+\frac{1}{64} \mathscr{E}
\end{aligned}
$$

按以上方法逐次分析下去，可以得出，第 $n$ 次接通 $O b$ 并达到静电平衡后， $C_{1} 、 C_{2} 、 C_{3}$ 上的电压分别为

$$
U_{1 n}=\frac{1}{2} \mathscr{E}+\frac{1}{8} \mathscr{E}+\frac{1}{32} \mathscr{E}+\frac{1}{128} \mathscr{E}+\cdots+\frac{1}{2^{2 n-1}} \mathscr{E}
$$

$$
\begin{aligned}
& =\frac{1}{2} \mathscr{E}\left(1+\frac{1}{4}+\frac{1}{4^{2}}+\frac{1}{4^{3}}+\cdots+\frac{1}{4^{n-1}}\right) \\
& =\frac{\mathscr{E}}{2} \cdot \frac{1-\frac{1}{4^{n}}}{1-\frac{1}{4}}=\frac{2}{3} \mathscr{E}\left(1-\frac{1}{4^{n}}\right) \\
U_{2 n}= & \frac{1}{4} \mathscr{E}+\frac{1}{16} \mathscr{E}+\frac{1}{64} \mathscr{E}+\frac{1}{256} \mathscr{E}+\cdots+\frac{1}{2^{2 n}} \mathscr{E} \\
= & \frac{\mathscr{E}}{4}\left(1+\frac{1}{4}+\frac{1}{4^{2}}+\frac{1}{4^{3}}+\cdots+\frac{1}{4^{n-1}}\right) \\
= & \frac{\mathscr{E}}{4} \cdot \frac{1-\frac{1}{4^{n}}}{1-\frac{1}{4}}=\frac{\mathscr{E}}{3}\left(1-\frac{1}{4^{n}}\right) \\
& U_{3 n}=U_{2 n}=\frac{\mathscr{E}}{3}\left(1-\frac{1}{4^{n}}\right)
\end{aligned}
$$

2. 当 $n \rightarrow \infty$ 时, $C_{1} 、 C_{2} 、 C_{3}$ 的电压分别为

$$
\begin{aligned}
& U_{1}=\frac{2}{3} \mathscr{E} \\
& U_{2}=U_{3}=\frac{1}{3} \mathscr{E}
\end{aligned}
$$

$C_{1}$ 上的电量为

$$
Q_{1}=C U_{1}=\frac{2}{3} C \mathscr{E}
$$

$Q_{1}$ 就是电源输送的总电量, 故电源输出的总功为

$$
W=Q_{1} \mathscr{E}=\frac{2}{3} C \mathscr{E}^{2}
$$

$C_{1} 、 C_{2} 、 C_{3}$ 贮存的电能之和为

$$
W_{1}+W_{2}+W_{3}=\frac{1}{2} C U_{1}^{2}+\frac{1}{2} C U_{2}^{2}+\frac{1}{2} C U_{3}^{2}=\frac{1}{3} C \mathscr{E}^{2}
$$

因此, 在所有电阻上消耗的总电能 $W^{\prime}$ 为

$$
W^{\prime}=W-\left(W_{1}+W_{2}+W_{3}\right)=\frac{1}{3} C \mathscr{E}^{2}
$$

【原 41】两块长与宽均为 $\alpha$ 与 $b$ 的导体平板在制成平行板电容器时稍有偏斜, 使两板一对宽边相距为 $d$, 另一对宽边相距为 $(d+h)$, 且 $h \ll d$. 若此电容器内充满了相对电容率为 $\varepsilon_{r}$ 的电介质. 试求电容器的电容.
【分析】若两导体平板分别带电 $\pm Q$ 时, 其间的电势差为 $\Delta U$, 则 $C=\frac{Q}{\Delta U}$. 因此, 为了求电容 $C$需找出 $Q$ 与 $\Delta U$ 的关系, 关键在于两板间的电场分布.

如图是与两板垂直的截面, $O$ 点是两板延长后交线上的一点, $\theta_{0}$ 是两板的夹角 $\left(\theta_{0}\right.$ 很小).可以近似地认为, 在两板之间的等势面是一系列不同 $\theta$ 角对应的平面 (图中用虚直线表示), 电场线则是与等势面正交的一系列以 $O$ 点为中心的圆弧线 (图中用虚弧线表示), 并认为在每条圆![img-384.jpeg](img-384.jpeg)

电图 $1-41-1$
弧线上各点的电场强度近似相等，不同圆弧线上的电场强度稍有不同。设通过任意 $x$ 点的圆弧线上的电场强度为 $E_{x}$ ，则 $E_{x}$ 等于 $\Delta U$ 除以该弧线的长度。由此， $E_{x}$ 随 $x$ 的分布可知，从而 $D_{x}$与 $\sigma_{x}$ 随 $x$ 的分布可知，于是 $Q$ 和 $\Delta U$ 的关系可求，问题得解。

物理问题中若存在小量，往往意味着可以作适当的近似处理。近似处理应该合理、适当，既能使定量计算得出结果，又保留小量使人一看便知是近似的。当然，近似处理的方法通常并不唯一，这是值得注意的。本题就是一例。
【解】 如图，两导体平板之间的夹角为

$$
\theta_{0}=\arccos \frac{h}{a} \approx \frac{h}{a}
$$

取两板交线（在图中为一点）为 $O$ 点，它与平板近端 $O^{\prime}$ 点之间的距离为

$$
O O^{\prime}=\frac{d}{\theta_{0}} \approx \frac{a d}{h}
$$

设两板分别带电 $\pm Q$ ，其间的电势差为 $\Delta U$ 。可以近似地认为，在两板之间的电场中，等势面是一系列不同 $\theta$ 对应的平面，与之垂直的电场线则是一系列以 $O$ 为中心的圆弧线。近似地认为，每条圆弧线（电场线）上各点的电场强度相同，不同圆弧线上的电场强度稍有不同，把通过 $x$ 点的圆弧线上的电场强度表为 $E_{x}$ ，则

$$
E_{x}=\frac{\Delta U}{l}
$$

式中 $l$ 是两板之间在 $x$ 处的圆弧形电场线的长度，即

$$
l=\left(O O^{\prime}+x\right) \theta_{0}=\left(\frac{a d}{h}+x\right) \theta_{0}=d+\frac{h}{a} x
$$

式中 $x$ 是从 $O^{\prime}$ 点到 $x$ 点的距离。由以上两式，得出电场强度分布为

$$
E_{x}=\frac{\Delta U}{l}=\frac{\Delta U}{d+\frac{h}{a} x}
$$

相应的电位移矢量为

$$
D_{x}=\epsilon_{r} \epsilon_{0} E_{x}=\frac{\epsilon_{r} \epsilon_{0} \Delta U}{d+\frac{h}{a} x}
$$

为了确定导体板在 $x$ 处的自由电荷面密度 $\sigma_{x}$ 与 $D_{x}$ 的关系，可利用电位移矢量的高斯定理。作高斯面，它的一个小底面 $\Delta S$ 取在 $x$ 处的导体板内，侧面取为由电场线围成的弯曲柱面，另一小底面 $\Delta S$ 在介质内与弯曲柱面垂直。显然，只有在介质内的小底面有电位移通量 $D_{x} \Delta S$ ，同时，高斯面所包围的自由电荷为 $\sigma_{x} \Delta S$ ，于是，由高斯定理，得出

$$
\sigma_{x}=D_{x}=\frac{\varepsilon_{r} \varepsilon_{0} \Delta U}{d+\frac{h}{a} x}
$$

因而导体板上从 $x$ 到 $(x+\mathrm{d} x)$ 窄条上的电量为

$$
\mathrm{d} Q=\sigma_{x}(b \mathrm{~d} x)=\frac{\varepsilon_{r} \varepsilon_{0} \Delta U b \mathrm{~d} x}{d+\frac{h}{a} x}
$$

式中 $b$ 是导体板的宽度（图中未画出）。导体板上的总电量为

$$
Q=\int \mathrm{d} Q=\varepsilon_{r} \varepsilon_{0} b \Delta U \int_{0}^{a} \frac{\mathrm{~d} x}{d+\frac{h}{a} x}=\varepsilon_{r} \varepsilon_{0} b \Delta U\left(\frac{a}{h} \ln \frac{d+h}{h}\right)
$$

因此，电容器的电容为

$$
C=\frac{Q}{\Delta U}=\frac{\varepsilon_{r} \varepsilon_{0} a b}{h} \ln \frac{d+h}{h}
$$

若取 $\ln \left(1+\frac{h}{d}\right) \approx \frac{h}{d}$ ，则 $C \approx \frac{\varepsilon_{r} \varepsilon_{0} a b}{h}$ ，与平板电容器的结果相同，没有反映两板稍有偏斜的效应。此种近似过于粗略，不妥。若取

$$
\ln \left(1+\frac{h}{d}\right) \approx \frac{h}{d}-\frac{1}{2}\left(\frac{h}{d}\right)^{2}
$$

则

$$
C=\frac{\varepsilon_{r} \varepsilon_{0} a b}{h}\left(1-\frac{h}{2 d}\right)
$$

这是两板稍有偏斜后，电容的一级近似结果。

【题 42】 如图，两个同轴导体圆筒，内筒半径为 $R$ ，两筒间距为 $d$ ，简高为 $L$ ，且 $L \gg R \gg d$ 。内筒经末知电容 $C_{x}$ 的电容器与端电压 $V$ 足够大的直流电源的正极连接，外筒与电源的负极连接。圆筒的中央轴在铅垂线上，筒间 $A$ 和 $B$ 两点的连线与中央轴平行， $A$ 点和 $B$ 点的间距为 $h$ 。一个质量为 $m$ ，电量为 $-Q(Q>0)$ 的带电粒子从 $A$ 点射出，其速率为 $v_{0}$ ，速度的方向垂直于由 $A$ 点和筒中央轴线确定的平面。为了使该带电粒子能经过 $B$ 点，试求所有可供选择的 $v_{0}$ 和 $C_{x}$ 值。
【分析】带电粒子从 $A$ 点射出后，受重力和筒间电场力的作用。重力竖直向下，使之以 $g$ 作匀加速直线运动。电力在垂直中央轴的平面内（即水平面内）沿径向指向中央轴，与带电粒子的初速垂直。为了使
![img-385.jpeg](img-385.jpeg)

电图 $1-42-1$

带电粒子能经过 $B$ 点，要求它在垂直中央轴的平面内以 $R$ 为半径作匀速圆周运动，另外要求带电粒子从 $A$ 点沿 $A B$ 到达 $B$ 点的时间等于粒子作圆周运动所需时间的整数倍。前者要求电力提供适当的向心力，即对 $C_{x}$ 有一定要求，后者则对圆周运动的速度 $v_{0}$ 有一定要求。于是可解。【解】带电粒子在重力作用下从 $A$ 点作匀加速直线运动，竖直下降到 $B$ 点所需时间为

$$
t=\sqrt{\frac{2 h}{g}}
$$

同时，带电粒子在垂直中央轴的平面内以 $v_{0}$ 作匀述圆周运动一圈所需时间为

$$
T=\frac{2 \pi R}{v_{0}}
$$

为使粒子能经过 $B$ 点, 要求

$$
t=n T, n=1,2, \cdots
$$

由以上三式, 得

$$
v_{0}=\frac{2 \pi R}{T}=\frac{2 \pi R n}{t}=n \pi R \sqrt{\frac{2 g}{h}}
$$

带电粒子以 $v_{0}$ 在半径为 $R$ 的圆周上运动所需之向心力由电力提供，电力应为

$$
F=\frac{m v_{0}^{2}}{R}
$$

设内、外筒之间的电场强度为 $E$ ，电势差为 $V_{R}$ ，则

$$
F=Q E=Q \frac{V_{R}}{d}
$$

由以上两式, 得

$$
V_{R}=\frac{m v_{0}^{2} d}{Q R}
$$

把 $v_{0}$ 代入, 得

$$
V_{R}=\frac{2 n^{2} \pi^{2} R d m g}{h Q}
$$

因 $C_{R}$ (圆筒电容器) 与 $C_{x}$ 串联,故有

$$
C_{R} V_{R}=C_{x} V_{x}, \quad V_{R}+V_{x}=V
$$

解出

$$
C_{x}=\frac{C_{R} V_{R}}{V_{x}}=\frac{C_{R} V_{R}}{V-V_{R}}
$$

式中

$$
C_{R}=\varepsilon_{0} \frac{2 \pi R L}{d}
$$

故

$$
C_{x}=\frac{4 n^{2} \pi^{3} \varepsilon_{0} R^{2} L m g}{\left(h V Q-2 n^{2} \pi^{2} R d m g\right)}, n=1,2, \cdots
$$

(1)式和（2）式即为所求。

【题 43】 如图所示，金属球壳上方与一个带有两个活栓的细长玻璃管连接，管壁外包着金属笛，金属箔与电池组的接地端连通，管上方槽中的水银则与电池组另一端正极连通，开始时，球内无水银且不带电，玻璃管下端的活栓关闭，上端的活栓打开，管内充满水银，然后，关闭上端活栓，移开金属箔，再打开下端活栓，使管内水银注入球内。不断重复此过程，直至球内充满水银为止。设电池组的端电压为 $V$ ，玻璃的相对电容率（又称介电常量）为 $\epsilon_{r}$ ，管半径为 $r$ ，管壁厚度为 $d$ ，球半径为 $R$ ，且有 $R \gg r \gg d$ 。试近似计算金属球壳充满水银后相对于地的电势。【分析】当玻璃管充满水银时，它和管壁外的金属箔形成一圆柱形电容器（其中充满玻璃介质），因细长且 $r \gg d$ ，可看作平行板电容器，其电容可知，因管内水银与管壁金属箔分别与电池组正、负极相连，故管内水银是带电的。因打开下端活栓前，移去管壁金属箔，故每次将管内水银注入球内时，水银是带电的。球内充满水银后，它的总电量就是每次由水银带入的电量之和。这些电量最终将均匀分布在金属球壳的表面上。金属球壳相对于地是一个孤立导体球，其电容可知。于是当金属球壳最终带有上述电量时，它相对于地的电势可求。
【解】玻璃管内水银与管壁金属箔构成圆柱形电容器，因细长且 $r \gg$ $d$ ，可看作平行板电容器，两板间充满玻璃介质，其电容为
![img-386.jpeg](img-386.jpeg)

电图 $1-43-1$

$$
C(r)=\frac{\varepsilon_{0} \varepsilon_{r} \cdot 2 \pi r l}{d}
$$

式中 $l$ 是管的长度. 当水银与金属箔分别与电池组正、负极述通充电时，管内水银所带电量为

$$
q=C(r) V=\frac{2 \pi \varepsilon_{0} \varepsilon_{r} r l V}{d}
$$

设经 $n$ 次充灌使金属球内充满水银，显然， $n$ 等于球体积与管体积之比，为

$$
n=\frac{\frac{4}{3} \pi R^{3}}{\pi r^{2} l}=\frac{4 R^{3}}{3 r^{2} l}
$$

每灌一次水银，带入电量 $q$ ，经 $n$ 次，充满后，随水银进入金属球的电量，即金属球所带总电量为

$$
Q=n q
$$

把上述 $q$ 和 $n$ 代入，得

$$
Q=\frac{4 R^{3}}{3 r^{2} l} \cdot \frac{2 \pi \varepsilon_{0} \varepsilon_{r} r l V}{d}=\frac{8 \pi \varepsilon_{0} \varepsilon_{r} R^{3} V}{3 r d}
$$

这些电量将分布在金属球壳的表面上. 金属球壳作为一个相对于地的孤立导体球，其电容为

$$
C(R)=4 \pi \varepsilon_{0} R
$$

因此，当球带电 $Q$ 时，它相对于地的电势为

$$
U=\frac{Q}{C(R)}=\frac{2 \varepsilon_{r} R^{2} V}{3 r d}
$$

【题 44】在 $\varepsilon \leqslant 0$ 的半空间中充满了相对电容率为 $\varepsilon_{r}$ 的介质， $\varepsilon>0$ 的半空间为真空，其中在 $\varepsilon=h_{1}$ 处有一电量为 $q$ 的点电荷。用外力将此点电荷从 $\varepsilon=h_{1}$ 处缓慢地移动到 $\varepsilon=h_{2}$ 处。试求外力所作的功 $W$ 。
【分析】 点电荷 $q$ 的电场使介质极化，产生极化电荷，极化电荷的电场对 $q$ 有作用，因此移动 $q$需要作功。值得注意的是，当 $q$ 在不同位置时，它产生的电场的空间分布不同，从而介质极化的强弱不同，于是极化电荷产生的电场的空间分布亦不同，其间是相互制约的。

在 $\varepsilon=0$ 的 $x y$ 平面上取极坐标 $(r, \theta)$ ，则 $\varepsilon=0$ 的介质表面的极化电荷具有轴对称性，极化电荷的面密度可表为 $\sigma(r)$ （介质的另一表面在无穷远，其上的极化电荷的影响可以忽略）。利用电位移矢量沿介质表面的法向分量（即 $\varepsilon$ 分量）连续，写出介质表面内、外的电场强度表达式，即可求出 $\sigma(r)$. 注意,介质表面内、外的电场强度是 $q$ 与 $\sigma(r)$ 的共同贡献, 其中 $q$ 的电场强度应采用 $q$ 在任意 $z$ 位置的结果, 这样求出的 $\sigma(r)$ 将随 $q$ 位置 $z$ 的变化而变化。

由 $\sigma(r)$ 在 $z$ 处的电场强度即可确定 $q$ 在该处所受的作用力, 于是从 $z=h_{1}$ 移动到 $z=h_{2}$时,外力的功可求。
【解】在 $z=0$ 的 $x y$ 平面上取极坐标 $(r, \theta)$, 则 $z=0$ 的介质表面的极化电荷的分布具有轴对称性,极化电荷的面密度可表为 $\sigma(r)$. 在介质表面的上侧, 即在 $z=0^{+}(z \geqslant 0)$ 处, 电场强度的 $z$ 分量是 $q$ 和 $\sigma(r)$ 贡献之和, 为

$$
E_{+, z}=-\frac{q z}{4 \pi \varepsilon_{0}\left(r^{2}+z^{2}\right)^{N}}+\frac{\sigma(r)}{2 \varepsilon_{0}}
$$

式中右第一项是在 $z$ 处的点电荷 $q$, 在 $z=0^{+}(z \geqslant 0)$ 平面的 $r$ 处产生的电场强度的 $z$ 分量; 右第二项是 $\sigma(r)$ 在该处电场强度的 $z$ 分量, 这是由高斯定理得出的. 同样, 在介质表面的下侧, 即在 $z=0^{-}(z \leqslant 0)$ 处, 电场强度的 $z$ 分量为

$$
E_{-, z}=-\frac{q z}{4 \pi \varepsilon_{0}\left(r^{2}+z^{2}\right)^{N}}-\frac{\sigma(r)}{2 \varepsilon_{0}}
$$

因介质表面内、外电位移矢量的法向分量 (即 $z$ 分量)连续,故有

$$
\varepsilon_{0} E_{+, z}=\varepsilon_{r} \varepsilon_{0} E_{-, z}
$$

由以上三式,得出

$$
\sigma(r)=\frac{\left(1-\varepsilon_{r}\right) q z}{2 \pi\left(1+\varepsilon_{r}\right)\left(r^{2}+z^{2}\right)^{N}}
$$

这是当点电荷 $q$ 在任意位置 $z$ 处时, 介质表面 $r$ 处的极化电荷面密度 $\sigma(r)$ 的表达式. 因 $\varepsilon_{r}>1$,故 $\sigma(r)$ 与 $q$ 异号,相互吸引.

现在计算介质表面的全部极化电荷在 $z$ 处 (即点电荷 $q$ 所在处) 的电场强度. 由于极化电荷分布的轴对称性, $z$ 处的电场强度应沿 $z$ 方向, 即

$$
E=E_{z}
$$

把介质表面的极化电荷以 $z=0$ 为中心, 分成许多半径为 $r$, 宽为 $\mathrm{d} r$ 的环状带, 把每一环状带在 $z$ 处产生的电场强度的 $z$ 分量积分, 即得 $E_{z}$, 为

$$
E_{z}=\int_{0}^{\infty} \frac{\sigma(r) \cdot 2 \pi r \mathrm{~d} r}{4 \pi \varepsilon_{0}\left(r^{2}+z^{2}\right)} \cdot \frac{z}{\sqrt{r^{2}+z^{2}}}
$$

把 $\sigma(r)$ 代入上式, 得

$$
\begin{aligned}
E_{z} & =\frac{\left(1-\varepsilon_{r}\right) q z^{2}}{4 \pi \varepsilon_{0}\left(1+\varepsilon_{r}\right)} \int_{0}^{\infty} \frac{r \mathrm{~d} r}{\left(r^{2}+z^{2}\right)^{3}} \\
& =\frac{\left(1-\varepsilon_{r}\right) q z^{2}}{4 \pi \varepsilon_{0}\left(1+\varepsilon_{r}\right)} \cdot \frac{1}{4 z^{4}}=\frac{\left(1-\varepsilon_{r}\right) q}{16 \pi \varepsilon_{0}\left(1+\varepsilon_{r}\right) z^{2}}
\end{aligned}
$$

在 $z$ 处的点电荷 $q$ 所受电场作用力沿 $z$ 方向, 为

$$
F_{z}=q E_{z}=\frac{1-\varepsilon_{r} \rho^{2}}{16 \pi \varepsilon_{0}\left(1+\varepsilon_{r}\right) z^{2}}
$$

沿 $z$ 轴缓慢移动点电荷 $q$ 时, 所需外力为

$$
F_{z}^{\prime}=-F_{z}
$$

因此，把点电荷 $q$ 从 $z=h_{1}$ 处沿 $z$ 轴缓慢移动到 $z=h_{2}$ 处，外力作功为

$$
\begin{aligned}
W & =\int_{h_{1}}^{h_{2}} F_{z}^{\prime} \mathrm{d} z=\frac{\left(\varepsilon_{r}-1\right) q^{2}}{16 \pi \varepsilon_{0}\left(1+\varepsilon_{r}\right)} \int_{h_{1}}^{h_{2}} \frac{\mathrm{~d} z}{z^{2}} \\
& =\frac{\left(\varepsilon_{r}-1\right) q^{2}}{16 \pi \varepsilon_{0}\left(1+\varepsilon_{r}\right)}\left(\frac{1}{h_{1}}-\frac{1}{h_{2}}\right)
\end{aligned}
$$

【题 45】 如图，平板电容器极板的电荷面密度为常量 $\sigma_{0}$ ，两极板间距为 $d$ ，其中充满了各向同性非均匀电介质。取 $x$ 轴如图，介质的电极化率 $\chi_{c}(x)$ 为

$$
\chi_{c}=\chi_{q}(1+a x)
$$

其中 $\chi_{q}$ 和 $\sigma$ 是两个常量，试求介质极化体电荷密度的分布 $\rho^{\prime}(x)$以及介质两个表面的极化面电荷密度 $\sigma^{\prime}(0)$ 与 $\sigma^{\prime}(d)$ 。
【分析】 介质极化电荷的体密度 $\rho^{\prime}$ 和面密度 $\sigma^{\prime}$ 由介质极化强度矢量 $\boldsymbol{P}$ 的分布确定。 $\boldsymbol{P}$ 取决于介质的电极化率 $\chi_{c}$ 和总电场 $\boldsymbol{E} . \boldsymbol{E}$ 又是由 $\rho^{\prime}$ 和 $\sigma^{\prime}$ 产生的附加电场 $\boldsymbol{E}^{\prime}$ 与平行板电容器极板电荷 $\sigma_{0}$ 产生的电场 $\boldsymbol{E}_{0}$ 之和。搞清楚上述物理量的关系， $\rho^{\prime}$ 与 $\sigma^{\prime}$ 的分布即可求
![img-387.jpeg](img-387.jpeg)

电图1-45-1
得。
【解】电容器极板上面电荷密度为 $\sigma_{0}$ 的自由电荷产生的电场 $\boldsymbol{E}_{0}$ 沿 $x$ 方向，其大小为

$$
E_{0}=\frac{\sigma_{0}}{\varepsilon_{0}}
$$

$\boldsymbol{E}_{0}$ 使介质极化，由题设介质非均匀，其极化率 $\chi_{c}$ 只随 $x$ 变化，即按层分布，故介质极化的方向即极化强度 $\boldsymbol{P}$ 的方向应沿 $x$ 轴，从而 $\rho^{\prime}$ 也随 $x$ 按层分布，由 $\rho^{\prime}$ 和 $\sigma^{\prime}$ 产生的附加电场 $\boldsymbol{E}^{\prime}$ 也沿 $x$轴、设 $\boldsymbol{E}^{\prime}$ 在 $x$ 轴正方向的大小为 $E^{\prime}$ （可正、可负），则总电场 $\boldsymbol{E}$ （也沿 $x$ 方向）的大小为

$$
E=E_{0}+E^{\prime}
$$

$\boldsymbol{P}$ 与 $\boldsymbol{E}$ 的关系为

$$
\boldsymbol{P}=\varepsilon_{0} \chi_{c} \boldsymbol{E}
$$

把题设的 $\chi_{c}$ 代入，得

$$
P=\varepsilon_{0} \chi_{c}(1+a x) E
$$

$\rho^{\prime}$ 与 $\boldsymbol{P}$ 的关系为

$$
\begin{aligned}
\rho^{\prime} & =-\nabla \cdot \boldsymbol{P}=-\varepsilon_{0} \chi \frac{\mathrm{~d}}{\mathrm{~d} x}[(1+a x) E] \\
& =-\varepsilon_{0} \chi_{q}[a E+(1+a x) \frac{\mathrm{d} E}{\mathrm{~d} x}]
\end{aligned}
$$

由高斯定理的微分形式

$$
\frac{\rho^{\prime}}{\varepsilon_{0}}=\nabla \cdot \boldsymbol{E}=\frac{\mathrm{d} E}{\mathrm{~d} x}
$$

由以上两式，消去 $\rho^{\prime}$ ，得

$$
\varepsilon_{0} \frac{\mathrm{~d} E}{\mathrm{~d} x}=-\varepsilon_{0} \chi_{q}[a E+(1+a x) \frac{\mathrm{d} E}{\mathrm{~d} x}]
$$

即

$$
\frac{\mathrm{d} E}{E}=-\frac{\sigma \chi_{0} \mathrm{~d} x}{\left[1+\chi_{0}(1+\alpha x)\right]}
$$

设在介质中 $x=0$ 处的电场强度为 $E(0)$ ，把上式积分，得

$$
E=\left\{\frac{\left(1+\chi_{0}\right)}{\left[1+\chi_{0}(1+\alpha x)\right]}\right\} E(0)
$$

设在介质中 $x=0$ 处，由极化电荷产生的附加电场为 $E^{\prime}(0)$ ，则

$$
E(0)=E_{0}+E^{\prime}(0)
$$

由于介质内极化体电荷按层分布，故介质内 $x=0$ 处的 $E^{\prime}(0)$ 是介质左表面的 $\sigma^{\prime}(0)$ 电荷的贡献与其右方全部极化电荷的贡献之和，后者包括全部极化体电荷及右表面极化面电荷，可等效为 $-\sigma^{\prime}(0)$ 的面电荷。故有

$$
E^{\prime}(0)=\frac{\sigma^{\prime}(0)}{\varepsilon_{0}}
$$

又

$$
\sigma^{\prime}(0)=-P(0)=-\varepsilon_{0} \chi_{0}(1+\alpha x)_{x=0} E(0)=-\varepsilon_{0} \chi_{0} E(0)
$$

由以上两式，得

$$
E^{\prime}(0)=-\chi_{0} E(0)
$$

于是

$$
E(0)=E_{0}-\chi_{0} E(0)
$$

即

$$
E(0)=\frac{E_{0}}{1+\chi_{0}}=\frac{\sigma_{0}}{\left(1+\chi_{0}\right) \varepsilon_{0}}
$$

代入 $E$ 表达式，得

$$
E=\frac{\sigma_{0}}{\varepsilon_{0}\left[1+\chi_{0}(1+\alpha x)\right]}
$$

代入 $P$ 表达式，得

$$
P=\frac{\chi_{0}(1+\alpha x) \sigma_{0}}{1+\chi_{0}(1+\alpha x)}
$$

因

$$
\begin{gathered}
\rho^{\prime}=-\varepsilon_{0} \chi_{0}\left[\alpha E+(1+\alpha x) \frac{\mathrm{d} E}{\mathrm{e} x}\right] \\
\sigma^{\prime}(0)=-P(0) \\
\sigma^{\prime}(d)=P(d)
\end{gathered}
$$

利用上面求出的 $E$ 和 $P$ 代入计算，得

$$
\begin{gathered}
\rho^{\prime}=-\frac{\chi_{0} \alpha \sigma_{0}}{\left[1+\chi_{0}(1+\alpha x)\right]^{2}} \\
\sigma^{\prime}(0)=-\frac{\chi_{0} \sigma_{0}}{1+\chi_{0}}
\end{gathered}
$$

$$
\sigma^{\prime}(d)=\frac{\chi_{0}(1+\alpha d) \sigma_{0}}{1+\chi_{0}(1+\alpha d)}
$$

【题 46】两个同心导体球壳构成电容器，外球壳的内半径是固定的，其大小为 5 cm ，内球壳的外半径可以自由选择，两球壳之间充满了各向同性的均匀介质。已知电介质的击穿电场强度为 $2.0 \times 10^{7} \mathrm{~V} / \mathrm{m}$ 。试求该电容器所能承受的最大电压。
【分析】设两球分别带电为 $\pm Q$ 时，电容器内的电场强度为 $E_{r}$ ，电容器的电压为 $\Delta U$ ，可将 $\Delta U$用 $E_{r}$ 及有关几何量（外球内半径及内球外半径）表示。当电容器内的最大电场强度达到击穿电场强度，当改变内球外半径使 $\Delta U$ 中有关几何量的函数达到极大值时，所得 $\Delta U$ 即为电容器所能承受的最大电压。
【解】当两球分别带电 $\pm Q$ 时，电容器内的电场强度为

$$
E_{r}=\frac{Q}{4 \pi \varepsilon_{r} \varepsilon_{0} r^{2}}, \quad R_{\mathrm{PI}}<r<R_{\mathrm{fl}}
$$

式中 $E_{r}$ 是距球心 $r$ 处的电场强度， $R_{\text {f }}$ 是外球壳的内半径，是固定的， $R_{\text {PI }}$ 是内球壳的外半径，是可变的。上式表明，在电容器中 $r=R_{\text {f }}$ 处的电场强度 $E_{R_{\text {f }}}$ 最大、电容器的电压为

$$
\Delta U=\frac{Q}{4 \pi \varepsilon_{r} \varepsilon_{0}}\left(\frac{1}{R_{\mathrm{PI}}}-\frac{1}{R_{\mathrm{fl}}}\right)
$$

由以上两式，消去 $Q$ ，得

$$
\Delta U=E_{r}\left[r^{2}\left(\frac{1}{R_{\mathrm{fl}}}-\frac{1}{R_{\mathrm{fl}}}\right)\right]
$$

设电容器所能承受的最大电压为 $\Delta U_{\max }$ ，相应的电容器内最大的电场强度应为击穿电场强度，即取 $E_{r}$ 为

$$
E_{r}=E_{R_{\mathrm{fl}}}=E_{\text {击穿 }}
$$

同时，(1)式中的 $r^{2}$ 应取为

$$
r^{2}=R_{\mathrm{PI}}^{2}
$$

由于 $R_{\mathrm{fl}}$ 可自由选择， $\Delta U_{\text {max }}$ 对应的 $R_{\mathrm{PI}}^{2}\left(\frac{1}{R_{\mathrm{fl}}}-\frac{1}{R_{\mathrm{fl}}}\right)$ 亦应为极大。因 $R_{\mathrm{PI}}^{2}\left(\frac{1}{R_{\mathrm{fl}}}-\frac{1}{R_{\mathrm{fl}}}\right)=\frac{1}{R_{\mathrm{fl}}}$ $\left(R_{\mathrm{fl}} R_{\mathrm{fl}}-R_{\mathrm{PI}}^{2}\right)$ ，即要求 $\left(R_{\mathrm{fl}} R_{\mathrm{fl}}-R_{\mathrm{PI}}^{2}\right)$ 为极大，亦即要求此函数对 $R_{\mathrm{fl}}$ 的微商为零，故应取

$$
R_{\mathrm{fl}}=\frac{1}{2} R_{\mathrm{fl}}
$$

把（2），（3），（4）式代入（1）式，得

$$
\begin{aligned}
\Delta U_{\max } & =E_{\text {击穿 }}\left[R_{\mathrm{PI}}^{2}\left(\frac{1}{R_{\mathrm{fl}}}-\frac{1}{R_{\mathrm{fl}}}\right)\right] \\
& =E_{\text {击穿 }}\left[\left(\frac{R_{\mathrm{fl}}}{2}\right)^{2}\left(\frac{2}{R_{\mathrm{fl}}}-\frac{1}{R_{\mathrm{fl}}}\right)\right]=E_{\text {击穿 }} \cdot \frac{R_{\mathrm{fl}}}{4}
\end{aligned}
$$

代入有关数据，得

$$
\Delta U_{\max }=2.0 \times 10^{7} \times \frac{0.05}{4}=2.5 \times 10^{5} \mathrm{~V}
$$