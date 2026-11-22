# Ch 1 · The Role of Algorithms in Computing

<span class="badge sprout">🌿 working through it</span> · *Read Nov 15, 2026, with handwritten notes. Last updated Nov 22, 2026.*

## Big idea

An algorithm is a well-defined procedure that turns an input into an output, and it is a **technology** in its own right, just like hardware. A faster computer buys you a constant factor. A better algorithm changes the growth rate, and the growth rate wins every time once inputs get big.

## Key results

- **Correct algorithm.** For every input instance, it **halts** with the **correct output**. Both parts are required.
- **Efficiency matters more than hardware.** Insertion sort takes roughly \(c_1 n^2\) steps and merge sort roughly \(c_2 n \lg n\). Even with a much smaller constant \(c_1\) and a much faster machine, insertion sort loses once \(n\) is large enough.
- **Problem 1-1 in one line.** At 1 µs per step, a century is about \(3 \times 10^9\) times longer than a second, yet an algorithm running in \(2^n\) time solves only about 32 more units of \(n\) in that century:

\[
\lfloor \lg(10^6) \rfloor = 19 \qquad\text{vs}\qquad \lfloor \lg(3.15 \times 10^{15}) \rfloor = 51.
\]

## My derivation

**Why \(\lg n\) and \(2^n\) are mirror images.** If \(y = 2^x\), then \(x = \lg y\). So \(\lg n\) answers the question *"how many doublings does it take to reach \(n\)?"* Swapping the roles of input and output reflects one graph across the line \(y = x\). That is why, with a time budget \(T\):

\[
2^n \le T \iff n \le \lg T,
\]

so giving a \(2^n\) algorithm a billion times more time adds only \(\lg 10^9 \approx 30\) to the largest solvable \(n\).

The [Growth Rate Race](#growth-rate-race) below lets you see this, including a chart that folds \(\lg n\) onto \(2^n\).

## Where it shows up

### Correctness always comes in two parts

CLRS defines a correct algorithm with two properties: it gives the right answer, **and** it halts in finite time. I keep seeing the same two-part pattern elsewhere:

| Setting | "Nothing bad happens" (safety) | "Something good eventually happens" (liveness) |
| --- | --- | --- |
| CLRS, Ch 1 | Output is correct | Algorithm halts |
| Program proofs | Partial correctness | Termination (together: *total* correctness) |
| Distributed consensus | Agreement and validity | Termination |

The formal names are **safety** and **liveness**. The two can pull against each other: it is easy to be safe by never answering, and easy to be live by answering anything. Correctness means holding both at once.

### Logarithms are compounding, read backwards

\(\lg n\) counts doublings, which makes it the inverse of compound growth. Binary search doubles the reachable input with every step (10 steps reach about 1,000 items, 30 steps reach about a billion). That is compounding at 100% per step working **for** you. An algorithm that runs in \(2^n\) time is the same compounding working **against** you, like debt.

## Exercises I solved

- **Problem 1-1 (comparison of running times).** Built an interactive to answer it rather than fill the table by hand. The trick: for each \(f\), invert \(f(n) \le T\). For \(\lg n\), the answer is \(2^T\), astronomically large. For \(n!\), it barely moves from 9 to 17 between a second and a century.

## Still fuzzy

- A third clean example of the safety and liveness pattern, outside algorithms and distributed systems.
- How to state "efficiency is a technology" precisely, given that constant factors still matter for small \(n\) (Ch 2 should help).

## Growth Rate Race

An interactive for Problem 1-1. [Open it full screen](growth-rate-race.html).

<iframe class="embed-auto" src="../growth-rate-race.html" title="Growth Rate Race: comparing running times" loading="lazy"></iframe>
