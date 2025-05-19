#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Markdown和LaTeX渲染示例 - 演示如何渲染LLM输出的混合内容
"""

from md_latex_renderer import MdLatexRenderer
import json
import os

def main():
    # 创建渲染器实例
    renderer = MdLatexRenderer(output_dir="rendered_output")
    
    # 示例1: 渲染简单的LLM回答
    llm_response1 = r"""
        # 波动方程的解释

        波动方程是描述波动现象的偏微分方程，其一般形式为：

        $$\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$$

        其中：
        - $u$ 是波的位移
        - $t$ 是时间
        - $c$ 是波速
        - $\nabla^2$ 是拉普拉斯算子

        这个方程广泛应用于物理学中描述声波、电磁波和水波等波动现象。
        """
    renderer.render_to_image(llm_response1, output_filename="llm_wave_equation", llm_name="千问 Qwen")
    
    # 示例2: 渲染超长的LLM回答，包含更多的LaTeX公式和Markdown格式
    llm_response2 = r"""
        # 量子力学与相对论的深入分析
        
        ## 1. 量子力学的基本原理
        
        量子力学是研究微观粒子行为的物理学分支，其核心原理之一是洛伦兹变换不变性。对于一个量子系统，其波函数$\psi$满足薩定格方程：
        
        $$i\hbar\frac{\partial}{\partial t}\psi(\mathbf{r},t) = \hat{H}\psi(\mathbf{r},t)$$
        
        其中$\hat{H}$是系统的哈密顿算符，$\hbar$是约化的普朗克常数。对于一个质量为$m$的粒子在势能$V(\mathbf{r})$中运动，哈密顿算符为：
        
        $$\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})$$
        
        ## 2. 测不准原理与波函数崩塌
        
        测不准原理是量子力学中的基本原理，由海森堡提出。对于两个不相容的物理量$A$和$B$，它们的测量不确定度满足：
        
        $$\Delta A \cdot \Delta B \geq \frac{\hbar}{2}|\langle [\hat{A}, \hat{B}] \rangle|$$
        
        其中$[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$是两个算符的对易子。对于位置和动量，有：
        
        $$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$
        
        ## 3. 相对论与时空结构
        
        爱因斯坦的相对论描述了时空的几何结构。在四维时空中，两个事件之间的间隔由闪点的平方给出：
        
        $$ds^2 = -c^2dt^2 + dx^2 + dy^2 + dz^2$$
        
        在广义相对论中，引力被视为时空几何的弯曲，由爱因斯坦场方程描述：
        
        $$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$
        
        其中$G_{\mu\nu}$是爱因斯坦张量，$\Lambda$是宇宙常数，$g_{\mu\nu}$是度规张量，$T_{\mu\nu}$是能量-动量张量。
        
        ## 4. 量子场论与基本相互作用
        
        量子场论结合了量子力学和特殊相对论，描述了基本粒子和相互作用。拉格朗日密度可以写为：
        
        $$\mathcal{L} = \mathcal{L}_{\text{fermion}} + \mathcal{L}_{\text{gauge}} + \mathcal{L}_{\text{Higgs}} + \mathcal{L}_{\text{Yukawa}}$$
        
        其中各项分别描述了费米子、规范场、希格斯场和汤川相互作用。
        
        对于量子电动力学，费曼图描述了粒子间的相互作用。例如，电子散射的振幅可以表示为：
        
        $$\mathcal{M} = \bar{u}(p')(-ie\gamma^\mu)u(p)\frac{-ig_{\mu\nu}}{q^2}\bar{u}(k')(-ie\gamma^\nu)u(k)$$
        
        ## 5. 量子统计力学与相变性
        
        量子统计力学将统计力学和量子力学结合起来，描述大量量子粒子的集体行为。在正规场论中，配分函数可以写为路径积分的形式：
        
        $$Z = \int \mathcal{D}\phi \, e^{iS[\phi]/\hbar}$$
        
        其中$S[\phi]$是场$\phi$的作用量。
        
        ## 6. 量子统一理论与强弱相互作用的统一
        
        标准模型将电磁相互作用和弱相互作用统一为电弱相互作用，基于$SU(2)_L \times U(1)_Y$规范群。在能量尺度$\Lambda$下，三种相互作用的耦合常数满足：
        
        $$\frac{1}{\alpha_1(\Lambda)} + \frac{1}{\alpha_2(\Lambda)} + \frac{1}{\alpha_3(\Lambda)} = \text{const}$$
        
        ## 7. 量子引力与强人原理
        
        量子引力试图将引力量子化，其中引力子是传递引力相互作用的粒子。在强人原理的框架下，物理定律不应该依赖于观察者的参考系。这导致爱因斯坦方程的协变形式：
        
        $$R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$
        
        ## 8. 引力波与黑洞物理学
        
        引力波是时空的波动，由加速质量产生。在线性近似下，引力波方程可以写为：
        
        $$\Box h_{\mu\nu} = -\frac{16\pi G}{c^4}T_{\mu\nu}$$
        
        黑洞是时空中的奇点，其事件视界内的事件无法影响外部观察者。对于旋转黑洞，克尔度规可以写为：
        
        $$ds^2 = -\left(1-\frac{2GM}{c^2r}\right)c^2dt^2 + \left(1-\frac{2GM}{c^2r}\right)^{-1}dr^2 + r^2(d\theta^2 + \sin^2\theta d\phi^2) - \frac{4GJ}{c^2r}\sin^2\theta dtd\phi$$
        
        ## 9. 量子信息与量子计算
        
        量子信息理论利用量子力学原理处理信息。量子比特是量子信息的基本单元，可以处于叠加态：
        
        $$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle, \quad |\alpha|^2 + |\beta|^2 = 1$$
        
        量子纯态之间的纯度可以用内积表示：
        
        $$F(|\psi\rangle, |\phi\rangle) = |\langle\psi|\phi\rangle|^2$$
        
        ## 10. 宇宙学与宇宙起源
        
        现代宇宙学基于弗里德曼方程：
        
        $$H^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3}$$
        
        其中$H$是哈勃常数，$\rho$是能量密度，$a$是尺度因子，$k$是曲率参数。
        
        宇宙微波背景辐射提供了对早期宇宙的观测，其温度波动可以展开为球谐函数：
        
        $$\frac{\Delta T}{T} = \sum_{l=0}^{\infty}\sum_{m=-l}^{l} a_{lm}Y_{lm}(\theta, \phi)$$
        
        这些波动的功率谱提供了关于宇宙参数的重要信息。
        
        ## 总结
        
        量子力学与相对论是现代物理学的两大支柱，它们分别描述了微观世界和宏观宇宙的规律。将这两个理论统一起来是现代物理学的一个重要目标，可能需要对时空和物质的基本性质有新的理解。
        """
    renderer.render_to_image(llm_response2, output_filename="llm_quantum_relativity", llm_name="deepseek R1")
    
    print("所有示例已完成，请查看 'rendered_output' 目录中的图片")

if __name__ == "__main__":
    main()
