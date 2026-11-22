# Appendix A · Summations

<span class="badge seed">🌱 reading</span> · *Started Nov 21, 2026. Working through it with a notebook.*

## Big idea

Running times of loops are sums. Appendix A is the toolkit for turning a sum into a closed form (A.1) or, when that is too hard, into a tight bound (A.2). Most of the time you only need the bound.

## Key results

### A.1 Formulas worth knowing by heart

**Arithmetic series.**

\[
\sum_{k=1}^{n} k = \frac{n(n+1)}{2} = \Theta(n^2)
\]

**Sums of squares and cubes.**

\[
\sum_{k=0}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{k=0}^{n} k^3 = \frac{n^2(n+1)^2}{4}
\]

**Geometric series** (for \(x \ne 1\)), and its infinite form (for \(|x| < 1\)):

\[
\sum_{k=0}^{n} x^k = \frac{x^{n+1} - 1}{x - 1}, \qquad \sum_{k=0}^{\infty} x^k = \frac{1}{1 - x}
\]

**Harmonic series.**

\[
H_n = \sum_{k=1}^{n} \frac{1}{k} = \ln n + O(1)
\]

**Differentiating a series** (for \(|x| < 1\)):

\[
\sum_{k=0}^{\infty} k x^k = \frac{x}{(1 - x)^2}
\]

**Telescoping series.** Everything in the middle cancels:

\[
\sum_{k=1}^{n} (a_k - a_{k-1}) = a_n - a_0
\]

**Products become sums** under a logarithm:

\[
\lg \prod_{k=1}^{n} a_k = \sum_{k=1}^{n} \lg a_k
\]

### A.2 Bounding sums

- **Largest term.** \(\sum_{k=1}^{n} a_k \le n \cdot \max_k a_k\). Quick, often loose.
- **Ratio test style bound.** If \(a_{k+1}/a_k \le r < 1\) for all \(k\), then \(\sum_{k \ge 0} a_k \le a_0 / (1 - r)\). A sum that shrinks geometrically is dominated by its first term.
- **Splitting.** Break the sum into pieces and bound each piece separately, for example by ignoring a constant number of initial terms.
- **Integrals.** For monotonically increasing \(f\):

\[
\int_{m-1}^{n} f(x)\,dx \;\le\; \sum_{k=m}^{n} f(k) \;\le\; \int_{m}^{n+1} f(x)\,dx
\]

  Applied to \(1/k\), this gives \(\ln(n+1) \le H_n \le \ln n + 1\).

## My derivation

*Coming from my notebook.*

## Where it shows up

- **Compounding, again.** The geometric series is compound growth written as a sum. When \(x > 1\), the last term dominates (the total is within a constant factor of \(x^n\)). When \(x < 1\), the first term dominates. This is the same lesson as \(\lg n\) versus \(2^n\) in [Chapter 1](ch01-role-of-algorithms.md).
- **Insertion sort's worst case** is an arithmetic series, which is where its \(\Theta(n^2)\) comes from (Ch 2).

## Exercises I solved

*None yet.*

## Still fuzzy

- When to reach for integrals versus splitting. Working through A.2 should settle this.
