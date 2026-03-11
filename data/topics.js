window.Module2Topics = {
    "topics":  [
                   {
                       "id":  1,
                       "slug":  "exponential-functions",
                       "title":  "What is an Exponential Function?",
                       "icon":  "ðŸš€",
                       "summary":  "Discover how putting a variable in the exponent position causes incredibly fast growth or decay.",
                       "color":  "#4A90D9",
                       "graphType":  "exponential",
                       "explanation":  "An exponential function is one where the variable (like x) sits as the tiny number floating at the top-right â€” the exponent. Think of it like a snowball rolling downhill â€” it keeps getting bigger and bigger, much faster than normal addition. Instead of adding the same amount each time, exponential functions MULTIPLY by the same amount each time, which makes things grow incredibly fast. The base is the big bottom number, and the exponent (x) tells you how many times to multiply.",
                       "keyIdea":  "An exponential function shows very fast growth or decay because numbers are repeatedly multiplied â€” not added.",
                       "formula":  "y = bË£   (b is the base, x is the exponent)",
                       "steps":  [
                                     "Look at the equation carefully.",
                                     "Find the variable â€” usually called x.",
                                     "Ask yourself: Where is the x sitting?",
                                     "If x is the tiny floating number at the top-right â†’ It IS exponential.",
                                     "If x is the big bottom number â†’ It is NOT exponential (that is called a polynomial).",
                                     "If base b \u003e 1 â†’ the function GROWS. If 0 \u003c b \u003c 1 â†’ the function DECAYS."
                                 ],
                       "dailyExample":  {
                                            "title":  "A Viral Video",
                                            "story":  "One person shares a funny video with 3 friends. Those 3 people each share it with 3 more (now 9 people have it). Those 9 share with 3 more each (now 27 people). The views do not just grow â€” they EXPLODE! By round 5 you already have 243 viewers. That exploding pattern is exponential growth.",
                                            "table":  [
                                                          {
                                                              "label":  "Round 0",
                                                              "value":  "1 person"
                                                          },
                                                          {
                                                              "label":  "Round 1",
                                                              "value":  "3 people"
                                                          },
                                                          {
                                                              "label":  "Round 2",
                                                              "value":  "9 people"
                                                          },
                                                          {
                                                              "label":  "Round 3",
                                                              "value":  "27 people"
                                                          },
                                                          {
                                                              "label":  "Round 4",
                                                              "value":  "81 people"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "Bacteria in a Petri Dish",
                                            "story":  "One bacterium divides into two every hour. Two become four. Four become eight. This doubling is exactly what exponential functions describe! After just 10 hours, a single cell becomes over 1,000 cells â€” with no addition, only multiplication.",
                                            "table":  [
                                                          {
                                                              "label":  "Hour 0",
                                                              "value":  "1 cell"
                                                          },
                                                          {
                                                              "label":  "Hour 1",
                                                              "value":  "2 cells"
                                                          },
                                                          {
                                                              "label":  "Hour 2",
                                                              "value":  "4 cells"
                                                          },
                                                          {
                                                              "label":  "Hour 3",
                                                              "value":  "8 cells"
                                                          },
                                                          {
                                                              "label":  "Hour 4",
                                                              "value":  "16 cells"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "Find the value of y = 3â´",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "Write it out as repeated multiplication",
                                                               "math":  "3â´ = 3 Ã— 3 Ã— 3 Ã— 3"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Multiply the first two numbers",
                                                               "math":  "3 Ã— 3 = 9"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "Multiply by 3 again",
                                                               "math":  "9 Ã— 3 = 27"
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "Multiply by 3 one last time",
                                                               "math":  "27 Ã— 3 = 81"
                                                           }
                                                       ],
                                             "answer":  "y = 81"
                                         },
                       "tips":  [
                                    "If the base is bigger than 1 (like 2, 3, 10) â†’ the function GROWS as x increases.",
                                    "If the base is between 0 and 1 (like 0.5) â†’ the function DECAYS (gets smaller).",
                                    "The graph always passes through the point (0, 1) because anything raised to power 0 equals 1."
                                ],
                       "mistakes":  [
                                        "Do not confuse 3xÂ² with 3Ë£. In 3xÂ², the x is the big bottom number â€” that is a polynomial, NOT exponential!",
                                        "Remember: 2Â³ does NOT equal 6 (that would be 2 Ã— 3). It means 2 Ã— 2 Ã— 2 = 8."
                                    ],
                       "didYouKnow":  "When people say something \u0027grows exponentially\u0027 in everyday life â€” like social media followers or a virus spreading â€” they literally mean it follows the same mathematical pattern you are learning here!",
                       "quiz":  [
                                    {
                                        "question":  "Which of these is an exponential function?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "y = xâµ",
                                                        "y = 5Ë£",
                                                        "y = 5x",
                                                        "y = x + 5"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "In y = 5Ë£, the variable x is in the exponent position (floating top-right). That makes it exponential!"
                                    },
                                    {
                                        "question":  "What is the value of 2â´?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "8",
                                                        "16",
                                                        "24",
                                                        "6"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "2â´ = 2 Ã— 2 Ã— 2 Ã— 2 = 16. Multiply 2 by itself four times!"
                                    },
                                    {
                                        "question":  "If the base of an exponential function is 0.5, the function will:",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "Grow very fast",
                                                        "Stay the same",
                                                        "Decay (get smaller)",
                                                        "Create a straight line"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "When the base b is between 0 and 1, the function decays â€” it gets smaller and smaller as x increases."
                                    },
                                    {
                                        "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "A base greater than 1 creates exponential growth."
                                    },
                                    {
                                        "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "Which of these is an exponential function?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "y = xâµ",
                                                            "y = 5Ë£",
                                                            "y = 5x",
                                                            "y = x + 5"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "In y = 5Ë£, the variable x is in the exponent position (floating top-right). That makes it exponential!"
                                        },
                                        {
                                            "question":  "What is the value of 2â´?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "8",
                                                            "16",
                                                            "24",
                                                            "6"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "2â´ = 2 Ã— 2 Ã— 2 Ã— 2 = 16. Multiply 2 by itself four times!"
                                        },
                                        {
                                            "question":  "If the base of an exponential function is 0.5, the function will:",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "Grow very fast",
                                                            "Stay the same",
                                                            "Decay (get smaller)",
                                                            "Create a straight line"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "When the base b is between 0 and 1, the function decays â€” it gets smaller and smaller as x increases."
                                        },
                                        {
                                            "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "A base greater than 1 creates exponential growth."
                                        },
                                        {
                                            "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                        }
                                    ]
                   },
                   {
                       "id":  2,
                       "slug":  "evaluating-exponential-equations",
                       "title":  "Evaluating \u0026 Finding Exponential Equations",
                       "icon":  "ðŸ”¢",
                       "summary":  "Learn to calculate exponential values and build your own equations from real starting data.",
                       "color":  "#5BA85A",
                       "graphType":  "exponential",
                       "explanation":  "Evaluating an exponential function just means finding the y-value when you are given a specific x. You simply replace x with your number and calculate. Finding the equation means working backwards â€” if you know how something starts and how fast it multiplies, you can write the exponential equation for it using the general form y = a Â· bË£, where a is the starting value and b is the growth factor.",
                       "keyIdea":  "Replace x with your given number and calculate. To write an equation, identify the starting value (a) and the growth factor (b).",
                       "formula":  "y = a Â· bË£   (a = starting value, b = growth factor)",
                       "steps":  [
                                     "Write down the function.",
                                     "Identify the x value you are given.",
                                     "Replace every x in the equation with that number.",
                                     "Calculate the exponent part first.",
                                     "Then multiply by the starting value (a) if present.",
                                     "That is your answer!"
                                 ],
                       "dailyExample":  {
                                            "title":  "A Savings Account That Doubles",
                                            "story":  "You deposit $1,000 in a bank account that doubles every year. The equation is: Money = 1000 Ã— 2áµ—. After 3 years, you calculate: 1000 Ã— 2Â³ = 1000 Ã— 8 = $8,000! Not bad for just waiting!",
                                            "table":  [
                                                          {
                                                              "label":  "Year 0",
                                                              "value":  "$1,000"
                                                          },
                                                          {
                                                              "label":  "Year 1",
                                                              "value":  "$2,000"
                                                          },
                                                          {
                                                              "label":  "Year 2",
                                                              "value":  "$4,000"
                                                          },
                                                          {
                                                              "label":  "Year 3",
                                                              "value":  "$8,000"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "Bacteria Count",
                                            "story":  "A lab experiment starts with 10 bacteria cells that double every hour. We write the equation as N = 10 Ã— 2áµ—. After 4 hours: N = 10 Ã— 2â´ = 10 Ã— 16 = 160 bacteria cells!",
                                            "table":  [
                                                          {
                                                              "label":  "Hour 0",
                                                              "value":  "10 cells"
                                                          },
                                                          {
                                                              "label":  "Hour 1",
                                                              "value":  "20 cells"
                                                          },
                                                          {
                                                              "label":  "Hour 2",
                                                              "value":  "40 cells"
                                                          },
                                                          {
                                                              "label":  "Hour 4",
                                                              "value":  "160 cells"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "Bacteria start at 20 cells and double every hour. Write the equation, then find the count after 3 hours.",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "Identify the starting value (what is the count at time 0?)",
                                                               "math":  "a = 20"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Identify the growth factor (doubles means Ã—2 each hour)",
                                                               "math":  "b = 2"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "Write the equation using y = a Â· bË£",
                                                               "math":  "N = 20 Ã— 2áµ—"
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "Substitute t = 3 (for 3 hours)",
                                                               "math":  "N = 20 Ã— 2Â³"
                                                           },
                                                           {
                                                               "step":  5,
                                                               "text":  "Calculate 2Â³ = 2 Ã— 2 Ã— 2",
                                                               "math":  "2Â³ = 8"
                                                           },
                                                           {
                                                               "step":  6,
                                                               "text":  "Multiply the starting value by 8",
                                                               "math":  "N = 20 Ã— 8 = 160"
                                                           }
                                                       ],
                                             "answer":  "After 3 hours, there are 160 bacteria cells."
                                         },
                       "tips":  [
                                    "The starting value (a) is always the y-value when x = 0.",
                                    "If something doubles, b = 2. If it triples, b = 3. If it grows to 150% each time, b = 1.5.",
                                    "Memory trick: y = a Â· bË£ â€” the \u0027a\u0027 is what you start with, \u0027b\u0027 is what you multiply by each time step."
                                ],
                       "mistakes":  [
                                        "Do not add when you should multiply! A growth factor means multiplication, not addition.",
                                        "The exponent applies only to b. In 10 Ã— 2Â³, only the 2 is raised to power 3 â€” not the 10."
                                    ],
                       "didYouKnow":  "Epidemiologists used equations like N = a Â· bË£ to track COVID-19 spread worldwide. Knowing the starting number and doubling time, they could predict how many cases to expect weeks in advance!",
                       "quiz":  [
                                    {
                                        "question":  "In y = 5 Ã— 3Ë£, what is the starting value (a)?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "3",
                                                        "x",
                                                        "5",
                                                        "15"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "The starting value (a) is 5. It is the number being multiplied by the exponential part 3Ë£."
                                    },
                                    {
                                        "question":  "Evaluate y = 2Ë£ when x = 4",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "8",
                                                        "16",
                                                        "24",
                                                        "12"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "y = 2â´ = 2 Ã— 2 Ã— 2 Ã— 2 = 16"
                                    },
                                    {
                                        "question":  "A population starts at 100 and triples each year. What is the equation?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "y = 3 Ã— 100Ë£",
                                                        "y = 100 + 3x",
                                                        "y = 100 Ã— 3Ë£",
                                                        "y = 100 Ã— xÂ³"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "Starting value a = 100, growth factor b = 3 (triples). So the equation is y = 100 Ã— 3Ë£."
                                    },
                                    {
                                        "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "A base greater than 1 creates exponential growth."
                                    },
                                    {
                                        "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "In y = 5 Ã— 3Ë£, what is the starting value (a)?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "3",
                                                            "x",
                                                            "5",
                                                            "15"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "The starting value (a) is 5. It is the number being multiplied by the exponential part 3Ë£."
                                        },
                                        {
                                            "question":  "Evaluate y = 2Ë£ when x = 4",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "8",
                                                            "16",
                                                            "24",
                                                            "12"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "y = 2â´ = 2 Ã— 2 Ã— 2 Ã— 2 = 16"
                                        },
                                        {
                                            "question":  "A population starts at 100 and triples each year. What is the equation?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "y = 3 Ã— 100Ë£",
                                                            "y = 100 + 3x",
                                                            "y = 100 Ã— 3Ë£",
                                                            "y = 100 Ã— xÂ³"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "Starting value a = 100, growth factor b = 3 (triples). So the equation is y = 100 Ã— 3Ë£."
                                        },
                                        {
                                            "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "A base greater than 1 creates exponential growth."
                                        },
                                        {
                                            "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                        }
                                    ]
                   },
                   {
                       "id":  3,
                       "slug":  "compound-interest-continuous-growth",
                       "title":  "Compound Interest \u0026 Continuous Growth",
                       "icon":  "ðŸ’°",
                       "summary":  "See how banks grow your money step by step, and discover the magic number \u0027e\u0027 used in all of nature.",
                       "color":  "#E8A838",
                       "graphType":  "exponential",
                       "explanation":  "Banks use exponential functions to grow your money. Compound interest means your interest earns MORE interest â€” you earn on your original deposit AND on the interest already earned. The math constant \u0027e\u0027 (approximately 2.718) describes continuous growth â€” things that grow non-stop every single second, like living organisms and chemical reactions. Compound interest happens in steps (monthly, yearly). Continuous growth happens every moment.",
                       "keyIdea":  "Use A = P(1+r)áµ— for step-by-step compound growth. Use A = PeÊ³áµ— for smooth, non-stop continuous growth.",
                       "formula":  "Compound: A = P(1+r)áµ—  |  Continuous: A = PÂ·eÊ³áµ—",
                       "steps":  [
                                     "Identify the type: Is it step-by-step (compounded) or non-stop (continuous)?",
                                     "For compound interest: use A = P(1 + r)áµ—",
                                     "  â€¢ P = Principal (the starting money you deposit)",
                                     "  â€¢ r = interest rate as a decimal (5% â†’ 0.05, 8% â†’ 0.08)",
                                     "  â€¢ t = time in years",
                                     "  â€¢ A = the final total amount",
                                     "For continuous growth: use A = P Ã— eÊ³áµ—",
                                     "  â€¢ e is a fixed constant â‰ˆ 2.718 (like Ï€ = 3.14, it never changes)",
                                     "Convert the percentage to decimal, then plug in and calculate."
                                 ],
                       "dailyExample":  {
                                            "title":  "Bank Account Growth",
                                            "story":  "Compound interest is like a paycheck â€” your bank gives you interest once a month. Continuous growth is like your hair growing â€” it does not suddenly sprout an inch on the last day of the month. It grows every single second! Example: Deposit $1,000 at 10% annual interest. After 2 years: A = 1000 Ã— (1.10)Â² = 1000 Ã— 1.21 = $1,210.",
                                            "table":  [
                                                          {
                                                              "label":  "Principal P",
                                                              "value":  "$1,000"
                                                          },
                                                          {
                                                              "label":  "Rate r",
                                                              "value":  "10% = 0.10"
                                                          },
                                                          {
                                                              "label":  "After 1 year",
                                                              "value":  "$1,100"
                                                          },
                                                          {
                                                              "label":  "After 2 years",
                                                              "value":  "$1,210"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "Continuous Change Example",
                                            "story":  "The breakdown of glucose in a solution does not happen in sudden bursts â€” it changes smoothly every fraction of a second. Scientists use base e to model this because e represents perfect, non-stop change. This type of process is often modeled with the formula A = PeÊ³áµ—.",
                                            "table":  [
                                                          {
                                                              "label":  "Type of change",
                                                              "value":  "Continuous"
                                                          },
                                                          {
                                                              "label":  "Formula used",
                                                              "value":  "A = P Ã— eÊ³áµ—"
                                                          },
                                                          {
                                                              "label":  "What is e?",
                                                              "value":  "â‰ˆ 2.718 (a fixed constant)"
                                                          },
                                                          {
                                                              "label":  "Why e?",
                                                              "value":  "It describes every-moment non-stop growth"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "You deposit $500 at 8% annual compound interest. How much do you have after 3 years?",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "Identify all values from the problem",
                                                               "math":  "P = 500,  r = 8% = 0.08,  t = 3"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Write the compound interest formula",
                                                               "math":  "A = P(1 + r)áµ—"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "Substitute the values",
                                                               "math":  "A = 500 Ã— (1 + 0.08)Â³"
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "Simplify inside the brackets",
                                                               "math":  "A = 500 Ã— (1.08)Â³"
                                                           },
                                                           {
                                                               "step":  5,
                                                               "text":  "Calculate (1.08)Â³ â‰ˆ 1.08 Ã— 1.08 Ã— 1.08",
                                                               "math":  "(1.08)Â³ â‰ˆ 1.2597"
                                                           },
                                                           {
                                                               "step":  6,
                                                               "text":  "Multiply to get the final amount",
                                                               "math":  "A = 500 Ã— 1.2597 â‰ˆ $629.86"
                                                           }
                                                       ],
                                             "answer":  "After 3 years, you have approximately $629.86"
                                         },
                       "tips":  [
                                    "Always convert percentage to decimal FIRST: 8% â†’ 0.08, 5% â†’ 0.05 (divide by 100).",
                                    "The letter \u0027e\u0027 is NOT a variable like x! It is a fixed number: e â‰ˆ 2.718. Like Ï€ (pi), it never changes.",
                                    "Continuous growth using e will always give slightly MORE money than compound interest with the same rate."
                                ],
                       "mistakes":  [
                                        "Do not use r = 8 when the rate is 8%. Always divide by 100 first: r = 0.08.",
                                        "Do not confuse e (the math constant 2.718) with a variable you need to solve for. They look different!"
                                    ],
                       "didYouKnow":  "The number e was discovered by mathematician Jacob Bernoulli in 1683 while studying compound interest. He noticed a magical limit keeps appearing: as you compound more and more often, you approach e = 2.718...",
                       "quiz":  [
                                    {
                                        "question":  "In A = P(1+r)áµ—, what does P stand for?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "Percentage  ",
                                                        "Principal (starting money)",
                                                        "Power",
                                                        "Period"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "P is the Principal â€” the starting amount of money you deposit before any interest is added."
                                    },
                                    {
                                        "question":  "What is the approximate value of e?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "3.14",
                                                        "2.718",
                                                        "1.618",
                                                        "2.0"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "e â‰ˆ 2.718. It is a special math constant that appears everywhere in nature, just like Ï€ â‰ˆ 3.14159."
                                    },
                                    {
                                        "question":  "An 8% annual rate written as a decimal for the formula is:",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "8",
                                                        "0.8",
                                                        "0.08",
                                                        "80"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "To convert a percentage to a decimal: divide by 100. So 8% Ã· 100 = 0.08."
                                    },
                                    {
                                        "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "A base greater than 1 creates exponential growth."
                                    },
                                    {
                                        "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "In A = P(1+r)áµ—, what does P stand for?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "Percentage  ",
                                                            "Principal (starting money)",
                                                            "Power",
                                                            "Period"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "P is the Principal â€” the starting amount of money you deposit before any interest is added."
                                        },
                                        {
                                            "question":  "What is the approximate value of e?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "3.14",
                                                            "2.718",
                                                            "1.618",
                                                            "2.0"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "e â‰ˆ 2.718. It is a special math constant that appears everywhere in nature, just like Ï€ â‰ˆ 3.14159."
                                        },
                                        {
                                            "question":  "An 8% annual rate written as a decimal for the formula is:",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "8",
                                                            "0.8",
                                                            "0.08",
                                                            "80"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "To convert a percentage to a decimal: divide by 100. So 8% Ã· 100 = 0.08."
                                        },
                                        {
                                            "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "A base greater than 1 creates exponential growth."
                                        },
                                        {
                                            "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                        }
                                    ]
                   },
                   {
                       "id":  4,
                       "slug":  "graphing-exponential-functions",
                       "title":  "Graphing Exponential Functions",
                       "icon":  "ðŸ“Š",
                       "summary":  "Draw and shift exponential curves on a graph â€” and understand what each part of the graph means.",
                       "color":  "#9B59B6",
                       "graphType":  "exponential",
                       "explanation":  "Graphing an exponential function means drawing its picture on a grid. Exponential graphs look exactly like a skateboard ramp â€” very flat at first on the left side, then suddenly shooting straight up into the sky on the right. To draw one, you pick a few x values, calculate the y values, plot the dots, and connect them with a smooth curve. Transformations (adding or subtracting numbers) slide that curve up, down, left, or right.",
                       "keyIdea":  "Exponential graphs rocket upward and NEVER touch the x-axis. Adding a number (+k) slides the whole graph UP by k units.",
                       "formula":  "y = bË£  (basic shape)  |  y = bË£ + k  (shift up/down)  |  y = bâ½Ë£â»Ê°â¾  (shift left/right)",
                       "steps":  [
                                     "Choose 4â€“5 easy x values: -2, -1, 0, 1, 2 work great.",
                                     "Calculate y for each x value using your equation.",
                                     "Write all (x, y) pairs in a neat table.",
                                     "Plot each point as a dot on the graph grid.",
                                     "Connect all dots with a smooth curved line â€” no sharp corners!",
                                     "Remember: the curve NEVER actually touches the x-axis (it just gets very close)."
                                 ],
                       "dailyExample":  {
                                            "title":  "Tracking a Puppy\u0027s Weight",
                                            "story":  "If you weigh a puppy each week and mark the dot on a chart, then connect all the dots â€” that picture IS the graph! When the puppy grows fast as a baby, the dots shoot up. When the puppy is an adult and growth slows, the dots level off. An exponential curve shows that fast early growth.",
                                            "table":  [
                                                          {
                                                              "label":  "x = -1",
                                                              "value":  "y = 0.5"
                                                          },
                                                          {
                                                              "label":  "x = 0",
                                                              "value":  "y = 1"
                                                          },
                                                          {
                                                              "label":  "x = 1",
                                                              "value":  "y = 2"
                                                          },
                                                          {
                                                              "label":  "x = 2",
                                                              "value":  "y = 4"
                                                          },
                                                          {
                                                              "label":  "x = 3",
                                                              "value":  "y = 8"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "Virus Replication Curve",
                                            "story":  "Scientists graph the number of virus cells over time during an infection. The graph starts almost flat (early infection â€” very few cells), then suddenly curves sharply upward (exponential explosion of viral cells). This classic J-shaped curve is the signature shape in biology textbooks.",
                                            "table":  [
                                                          {
                                                              "label":  "Early days",
                                                              "value":  "Graph is nearly flat"
                                                          },
                                                          {
                                                              "label":  "Middle days",
                                                              "value":  "Curve begins to rise"
                                                          },
                                                          {
                                                              "label":  "Later days",
                                                              "value":  "Shoots straight up!"
                                                          },
                                                          {
                                                              "label":  "Shape name",
                                                              "value":  "J-curve (exponential)"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "Compare y = 2Ë£ and y = 2Ë£ + 3. How does the second graph differ from the first?",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "Build a value table for y = 2Ë£",
                                                               "math":  "x: -1, 0, 1, 2  â†’  y: 0.5, 1, 2, 4"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Build a value table for y = 2Ë£ + 3",
                                                               "math":  "x: -1, 0, 1, 2  â†’  y: 3.5, 4, 5, 7"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "Compare â€” every y-value in the second table is exactly 3 more",
                                                               "math":  "3.5 = 0.5 + 3,   4 = 1 + 3,  etc."
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "Conclusion: adding +3 shifts the ENTIRE graph upward by 3 units",
                                                               "math":  "Same shape, different vertical position"
                                                           }
                                                       ],
                                             "answer":  "y = 2Ë£ + 3 is the same curve as y = 2Ë£, but shifted UP by 3 units."
                                         },
                       "tips":  [
                                    "Every y = bË£ graph always passes through the point (0, 1) because bâ° = 1 for any base.",
                                    "Adding a number at the end (like +3 or -2) moves the entire graph UP or DOWN by that number.",
                                    "If the base is less than 1 (like y = 0.5Ë£), the graph falls from left to right â€” that is exponential decay."
                                ],
                       "mistakes":  [
                                        "The curve NEVER actually touches the x-axis, even though it looks like it does. It just keeps getting very close. Mathematicians call this a \u0027horizontal asymptote\u0027.",
                                        "Do not draw sharp corners on exponential graphs â€” they are always smooth, gentle curves!"
                                    ],
                       "didYouKnow":  "The x-axis acts like an invisible wall that the exponential curve approaches forever but never crosses. Mathematicians give this wall a name: it is called a \u0027horizontal asymptote\u0027!",
                       "quiz":  [
                                    {
                                        "question":  "What point does EVERY y = bË£ graph always pass through?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "(1, 0)",
                                                        "(0, 0)",
                                                        "(0, 1)",
                                                        "(1, 1)"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "When x = 0, bË£ = bâ° = 1 for any base b. So the graph always passes through (0, 1)."
                                    },
                                    {
                                        "question":  "The graph of y = 3Ë£ + 5 compared to y = 3Ë£ is shifted:",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "Right 5 units",
                                                        "Left 5 units",
                                                        "Down 5 units",
                                                        "Up 5 units"
                                                    ],
                                        "correct":  3,
                                        "explanation":  "Adding +5 at the end of the equation moves the entire graph UP by 5 units."
                                    },
                                    {
                                        "question":  "An exponential graph with base 0 \u003c b \u003c 1 (like 0.5Ë£) shows:",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "Exponential growth",
                                                        "A straight line",
                                                        "Exponential decay",
                                                        "A circle"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "When the base b is between 0 and 1, the y values decrease as x increases. That is exponential decay!"
                                    },
                                    {
                                        "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "A base greater than 1 creates exponential growth."
                                    },
                                    {
                                        "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "What point does EVERY y = bË£ graph always pass through?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "(1, 0)",
                                                            "(0, 0)",
                                                            "(0, 1)",
                                                            "(1, 1)"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "When x = 0, bË£ = bâ° = 1 for any base b. So the graph always passes through (0, 1)."
                                        },
                                        {
                                            "question":  "The graph of y = 3Ë£ + 5 compared to y = 3Ë£ is shifted:",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "Right 5 units",
                                                            "Left 5 units",
                                                            "Down 5 units",
                                                            "Up 5 units"
                                                        ],
                                            "correct":  3,
                                            "explanation":  "Adding +5 at the end of the equation moves the entire graph UP by 5 units."
                                        },
                                        {
                                            "question":  "An exponential graph with base 0 \u003c b \u003c 1 (like 0.5Ë£) shows:",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "Exponential growth",
                                                            "A straight line",
                                                            "Exponential decay",
                                                            "A circle"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "When the base b is between 0 and 1, the y values decrease as x increases. That is exponential decay!"
                                        },
                                        {
                                            "question":  "True or False: If the base is greater than 1, an exponential function grows as x increases.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "A base greater than 1 creates exponential growth."
                                        },
                                        {
                                            "question":  "True or False: In an exponential function, the variable is the base (bottom number).",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "In exponential form, the variable appears in the exponent, not the base."
                                        }
                                    ]
                   },
                   {
                       "id":  5,
                       "slug":  "what-is-a-logarithm",
                       "title":  "What is a Logarithm?",
                       "icon":  "ðŸ”",
                       "summary":  "Logarithms are the reverse of exponential functions â€” they help you find a hidden exponent.",
                       "color":  "#E74C3C",
                       "graphType":  "logarithmic",
                       "explanation":  "A logarithm (or \u0027log\u0027 for short) is a backwards question. If an exponential says \u00272 multiplied by itself 3 times gives 8\u0027, then a logarithm asks \u0027How many times must I multiply 2 to GET 8?\u0027 It is the exact reverse of an exponential. Think of it like paper folding: the exponential question is \u0027if I fold 3 times, how many layers?\u0027 (Answer: 8). The logarithm question is \u0027if I want 8 layers, how many folds?\u0027 (Answer: 3 folds).",
                       "keyIdea":  "A logarithm asks: \u0027The base needs what POWER to equal the target number?\u0027",
                       "formula":  "log_b(a) = c  means  b^c = a",
                       "steps":  [
                                     "Read the logarithm: log base b of a equals c.",
                                     "Use the LOOP TRICK: draw a circle starting at the tiny base number...",
                                     "...arc across the equals sign to the answer (c)...",
                                     "...and back inside to the target number (a).",
                                     "Rewrite as an exponent: base^answer = target, or b^c = a.",
                                     "Ask yourself: \u0027b raised to what power gives a?\u0027",
                                     "That power is your answer!"
                                 ],
                       "dailyExample":  {
                                            "title":  "Paper Folding",
                                            "story":  "Fold a paper once â†’ 2 layers. Fold it twice â†’ 4 layers. Fold it 3 times â†’ 8 layers. Now flip the question: \u0027If I have 8 layers, how many times did I fold?\u0027 That reverse question is EXACTLY what a logarithm does! logâ‚‚(8) = 3 means: \u0027starting from 2, how many times to fold to get 8?\u0027 Answer: 3 folds.",
                                            "table":  [
                                                          {
                                                              "label":  "1 fold",
                                                              "value":  "2 layers"
                                                          },
                                                          {
                                                              "label":  "2 folds",
                                                              "value":  "4 layers"
                                                          },
                                                          {
                                                              "label":  "3 folds",
                                                              "value":  "8 layers"
                                                          },
                                                          {
                                                              "label":  "logâ‚‚(8) = ?",
                                                              "value":  "Answer: 3 folds!"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "Bacteria Doubling â€” Working Backwards",
                                            "story":  "You start with 1 bacteria cell. Some time later, you count 16 cells in the petri dish. How many doubling cycles happened? A logarithm answers this! logâ‚‚(16) = 4. So exactly 4 doubling cycles occurred. Logarithms let you find TIME from a count.",
                                            "table":  [
                                                          {
                                                              "label":  "Starting count",
                                                              "value":  "1 cell"
                                                          },
                                                          {
                                                              "label":  "Ending count",
                                                              "value":  "16 cells"
                                                          },
                                                          {
                                                              "label":  "Question asked",
                                                              "value":  "How many doublings?"
                                                          },
                                                          {
                                                              "label":  "logâ‚‚(16) =",
                                                              "value":  "4 doublings"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "Evaluate: logâ‚‚(8) = x. Find x.",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "Identify the parts: base = 2, target = 8, answer = x",
                                                               "math":  "logâ‚‚(8) = x"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Use the Loop Trick â€” rewrite as an exponent",
                                                               "math":  "2Ë£ = 8"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "Ask: 2 multiplied how many times gives 8?",
                                                               "math":  "2 Ã— 2 = 4,   and   4 Ã— 2 = 8"
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "Count how many 2s multiplied together: three 2s!",
                                                               "math":  "2Â³ = 8  âœ“"
                                                           }
                                                       ],
                                             "answer":  "x = 3"
                                         },
                       "tips":  [
                                    "log(x) with NO tiny base number written means base 10 â€” it is called the \u0027Common Log\u0027.",
                                    "ln(x) means \u0027Natural Log\u0027 â€” the invisible base is secretly e (â‰ˆ 2.718).",
                                    "Logs undo exponents, and exponents undo logs â€” they are mathematical opposites, like multiplication and division!"
                                ],
                       "mistakes":  [
                                        "logâ‚‚(8) does NOT mean 2 Ã— 8 = 16 or 2 + 8 = 10. It asks: \u00272 to what power equals 8?\u0027",
                                        "Do not confuse the base with the answer. In logâ‚‚(8) = 3, the base is 2, not 3."
                                    ],
                       "didYouKnow":  "The pH scale in chemistry â€” which measures acidity â€” is logarithmic! A pH of 3 is 10 times more acidic than pH 4, and 100 times more acidic than pH 5. Stomach acid (pH â‰ˆ 2) is 100,000 times more acidic than pure water (pH 7)!",
                       "quiz":  [
                                    {
                                        "question":  "What does logâ‚‚(8) ask?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "What is 2 Ã— 8?",
                                                        "What is 2 + 8?",
                                                        "2 to what power equals 8?",
                                                        "8 divided by 2?"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "logâ‚‚(8) asks: \u00272 raised to what power equals 8?\u0027 The answer is 3, because 2Â³ = 8."
                                    },
                                    {
                                        "question":  "Convert logâ‚…(25) = 2 to exponential form:",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "25âµ = 2",
                                                        "2âµ = 25",
                                                        "5Â² = 25",
                                                        "5Â²âµ = 2"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "Using the rule: log_b(a) = c means b^c = a. So logâ‚…(25) = 2 becomes 5Â² = 25."
                                    },
                                    {
                                        "question":  "What is the base of ln(x) â€” the natural logarithm?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "10",
                                                        "2",
                                                        "e (â‰ˆ 2.718)",
                                                        "100"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "ln(x) is the natural logarithm. Its invisible base is e â‰ˆ 2.718, the same special constant used in continuous growth!"
                                    },
                                    {
                                        "question":  "True or False: Logarithmic functions are inverse operations of exponential functions.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "Logs undo exponents, and exponents undo logs."
                                    },
                                    {
                                        "question":  "True or False: log(x) is defined for x = 0 and for negative x values.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "The inside of a logarithm must stay positive."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "What does logâ‚‚(8) ask?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "What is 2 Ã— 8?",
                                                            "What is 2 + 8?",
                                                            "2 to what power equals 8?",
                                                            "8 divided by 2?"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "logâ‚‚(8) asks: \u00272 raised to what power equals 8?\u0027 The answer is 3, because 2Â³ = 8."
                                        },
                                        {
                                            "question":  "Convert logâ‚…(25) = 2 to exponential form:",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "25âµ = 2",
                                                            "2âµ = 25",
                                                            "5Â² = 25",
                                                            "5Â²âµ = 2"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "Using the rule: log_b(a) = c means b^c = a. So logâ‚…(25) = 2 becomes 5Â² = 25."
                                        },
                                        {
                                            "question":  "What is the base of ln(x) â€” the natural logarithm?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "10",
                                                            "2",
                                                            "e (â‰ˆ 2.718)",
                                                            "100"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "ln(x) is the natural logarithm. Its invisible base is e â‰ˆ 2.718, the same special constant used in continuous growth!"
                                        },
                                        {
                                            "question":  "True or False: Logarithmic functions are inverse operations of exponential functions.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "Logs undo exponents, and exponents undo logs."
                                        },
                                        {
                                            "question":  "True or False: log(x) is defined for x = 0 and for negative x values.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "The inside of a logarithm must stay positive."
                                        }
                                    ]
                   },
                   {
                       "id":  6,
                       "slug":  "evaluating-logarithms",
                       "title":  "Evaluating Logarithms",
                       "icon":  "ðŸ§®",
                       "summary":  "Solve common logs (base 10) and natural logs (base e) â€” tools used in science every day.",
                       "color":  "#1ABC9C",
                       "graphType":  "logarithmic",
                       "explanation":  "Evaluating a logarithm means calculating the answer. There are two special types you will see very often: the Common Log (written as log, base 10) and the Natural Log (written as ln, base e â‰ˆ 2.718). Common logs appear in science measurements like pH, earthquake magnitude (Richter scale), and sound decibels. Natural logs appear in biology, chemistry, and any problem involving continuous growth or decay.",
                       "keyIdea":  "log(x) means logâ‚â‚€(x). ln(x) means logâ‚‘(x). Both are solved by asking: \u0027base to what power equals x?\u0027",
                       "formula":  "log(x) = logâ‚â‚€(x)  |  ln(x) = logâ‚‘(x)  |  ln(eâ¿) = n",
                       "steps":  [
                                     "Step 1: Identify the type â€” is it log (base 10) or ln (base e)?",
                                     "Step 2: Set up the question: \u0027base to what power equals my target number?\u0027",
                                     "Step 3: For log: ask \u0027what power of 10 gives my number?\u0027",
                                     "Step 4: For ln: ask \u0027what power of e gives my number?\u0027",
                                     "Step 5: For easy numbers like log(100), count the zeros: log(100) = 2.",
                                     "Step 6: For harder numbers, use a calculator."
                                 ],
                       "dailyExample":  {
                                            "title":  "Sound Decibels Scale",
                                            "story":  "The decibel scale for sound uses base-10 logarithms. A sound 10Ã— louder than another goes up by just 10 decibels on the scale. A rock concert (120 dB) compared to a library (40 dB) is a difference of 80 dB, which means the concert is 10â¸ = 100 million times louder! Logarithms make these huge numbers manageable.",
                                            "table":  [
                                                          {
                                                              "label":  "log(1)",
                                                              "value":  "= 0  (10â° = 1)"
                                                          },
                                                          {
                                                              "label":  "log(10)",
                                                              "value":  "= 1  (10Â¹ = 10)"
                                                          },
                                                          {
                                                              "label":  "log(100)",
                                                              "value":  "= 2  (10Â² = 100)"
                                                          },
                                                          {
                                                              "label":  "log(1000)",
                                                              "value":  "= 3  (10Â³ = 1000)"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "The pH Scale",
                                            "story":  "pH measures how acidic a solution is, using negative base-10 logarithms of hydrogen ion concentration. Blood must stay at pH 7.4. Stomach acid is at pH 2. That is a difference of 5.4 on the log scale, meaning stomach acid has over 250,000 times more hydrogen ions than blood! Logarithms turn unimaginably small concentrations into easy numbers.",
                                            "table":  [
                                                          {
                                                              "label":  "Stomach acid",
                                                              "value":  "pH â‰ˆ 2  (very acidic)"
                                                          },
                                                          {
                                                              "label":  "Water (neutral)",
                                                              "value":  "pH = 7"
                                                          },
                                                          {
                                                              "label":  "Blood",
                                                              "value":  "pH â‰ˆ 7.4"
                                                          },
                                                          {
                                                              "label":  "Each pH unit",
                                                              "value":  "= 10Ã— difference in acidity"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "Evaluate: log(1000) and ln(eÂ³)",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "For log(1000): ask what power of 10 gives 1000?",
                                                               "math":  "10^? = 1000"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Count: 10 Ã— 10 Ã— 10 = 1000 â€” that is three 10s",
                                                               "math":  "10Â³ = 1000"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "First answer",
                                                               "math":  "log(1000) = 3"
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "For ln(eÂ³): ln and e are mathematical opposites â€” they cancel each other out!",
                                                               "math":  "ln(eÂ³) = 3"
                                                           }
                                                       ],
                                             "answer":  "log(1000) = 3  and  ln(eÂ³) = 3"
                                         },
                       "tips":  [
                                    "Quick trick: log(100) = 2, log(1000) = 3, log(10000) = 4 â€” just count the zeros!",
                                    "ln(e) = 1, ln(eÂ²) = 2, ln(eÂ³) = 3 â€” the exponent comes straight down as the answer.",
                                    "ln and e are opposites: ln(eË£) = x always, and e^(ln x) = x always."
                                ],
                       "mistakes":  [
                                        "log(100) â‰  2 Ã— 100 = 200. It equals 2 because 10Â² = 100.",
                                        "NEVER take the log of zero or a negative number. Logs only work on positive numbers (x \u003e 0)!"
                                    ],
                       "didYouKnow":  "The Richter scale for earthquakes uses base-10 logarithms too! A magnitude 6 earthquake is 10 times more powerful than a magnitude 5, and 100 times more powerful than a magnitude 4. One simple number on the scale = enormous differences in actual power!",
                       "quiz":  [
                                    {
                                        "question":  "What is log(10)?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "0",
                                                        "10",
                                                        "1",
                                                        "100"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "log(10) = logâ‚â‚€(10) = 1, because 10Â¹ = 10."
                                    },
                                    {
                                        "question":  "What is ln(eÂ²)?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "e",
                                                        "2e",
                                                        "2",
                                                        "eÂ²"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "ln and e cancel each other: ln(eâ¿) = n. So ln(eÂ²) = 2."
                                    },
                                    {
                                        "question":  "What is log(10,000)?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "1",
                                                        "3",
                                                        "4",
                                                        "10"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "log(10,000) = 4 because 10â´ = 10,000. Count the zeros: four zeros â†’ answer is 4."
                                    },
                                    {
                                        "question":  "True or False: Logarithmic functions are inverse operations of exponential functions.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "Logs undo exponents, and exponents undo logs."
                                    },
                                    {
                                        "question":  "True or False: log(x) is defined for x = 0 and for negative x values.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "The inside of a logarithm must stay positive."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "What is log(10)?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "0",
                                                            "10",
                                                            "1",
                                                            "100"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "log(10) = logâ‚â‚€(10) = 1, because 10Â¹ = 10."
                                        },
                                        {
                                            "question":  "What is ln(eÂ²)?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "e",
                                                            "2e",
                                                            "2",
                                                            "eÂ²"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "ln and e cancel each other: ln(eâ¿) = n. So ln(eÂ²) = 2."
                                        },
                                        {
                                            "question":  "What is log(10,000)?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "1",
                                                            "3",
                                                            "4",
                                                            "10"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "log(10,000) = 4 because 10â´ = 10,000. Count the zeros: four zeros â†’ answer is 4."
                                        },
                                        {
                                            "question":  "True or False: Logarithmic functions are inverse operations of exponential functions.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "Logs undo exponents, and exponents undo logs."
                                        },
                                        {
                                            "question":  "True or False: log(x) is defined for x = 0 and for negative x values.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "The inside of a logarithm must stay positive."
                                        }
                                    ]
                   },
                   {
                       "id":  7,
                       "slug":  "graphing-logarithmic-functions",
                       "title":  "Graphing Logarithmic Functions",
                       "icon":  "ðŸ“‰",
                       "summary":  "Draw log graphs (the mirror of exponential) and learn the domain rule â€” the most important log rule!",
                       "color":  "#D35400",
                       "graphType":  "logarithmic",
                       "explanation":  "Logarithmic graphs look like a hill â€” they rise quickly at first, then slow down and flatten out as you move to the right. They are the mirror image of exponential graphs, reflected across the diagonal line y = x. There is one crucial rule you must always remember: you can ONLY take the logarithm of a POSITIVE number. This means the domain (allowed x values) for any log function is always x \u003e 0, or x greater than whatever is subtracted inside.",
                       "keyIdea":  "Log graphs flatten toward the right and NEVER cross the y-axis. The inside of the log must ALWAYS be positive. That is the domain rule.",
                       "formula":  "y = log_b(x)  |  y = log_b(x) + k  shifts up/down  |  y = log_b(x âˆ’ h)  shifts right by h, domain: x \u003e h",
                       "steps":  [
                                     "To graph: choose x values that give easy log results (1, 10, 100 for base-10 log).",
                                     "Calculate y for each x and build a value table.",
                                     "Plot the points and connect with a smooth curve that flattens to the right.",
                                     "Remember: the curve NEVER crosses the y-axis (x = 0 is a vertical asymptote).",
                                     "To find the domain: look inside the log, set that expression \u003e 0, and solve."
                                 ],
                       "dailyExample":  {
                                            "title":  "The Learning Curve",
                                            "story":  "When you learn something new â€” like playing guitar â€” you improve enormously in the first few weeks. But after months of practice, each improvement takes longer and longer to achieve. Your progress slows down but never completely stops. That flattening-out pattern on a graph is exactly what a logarithmic function looks like!",
                                            "table":  [
                                                          {
                                                              "label":  "x = 1",
                                                              "value":  "y = 0"
                                                          },
                                                          {
                                                              "label":  "x = 10",
                                                              "value":  "y = 1"
                                                          },
                                                          {
                                                              "label":  "x = 100",
                                                              "value":  "y = 2"
                                                          },
                                                          {
                                                              "label":  "x = 1000",
                                                              "value":  "y = 3"
                                                          }
                                                      ]
                                        },
                       "extraExample":  {
                                            "title":  "Glucose Concentration Over Time",
                                            "story":  "When measuring how a reactant like glucose is used up in a chemical reaction, the concentration often drops quickly at first, then levels off. Plotting these measurements on a graph and connecting the dots gives you a logarithmic shape â€” rises fast, then flattens. This is a common graph pattern in real measurements.",
                                            "table":  [
                                                          {
                                                              "label":  "Early reaction",
                                                              "value":  "Rapid change (steep rise)"
                                                          },
                                                          {
                                                              "label":  "Mid reaction",
                                                              "value":  "Slowing down"
                                                          },
                                                          {
                                                              "label":  "Late reaction",
                                                              "value":  "Almost flat"
                                                          },
                                                          {
                                                              "label":  "y-axis",
                                                              "value":  "Curve never crosses it"
                                                          }
                                                      ]
                                        },
                       "solvedProblem":  {
                                             "question":  "Find the domain of y = log(x âˆ’ 3)",
                                             "steps":  [
                                                           {
                                                               "step":  1,
                                                               "text":  "Rule: the expression INSIDE the log must be greater than zero",
                                                               "math":  "x âˆ’ 3 \u003e 0"
                                                           },
                                                           {
                                                               "step":  2,
                                                               "text":  "Solve the inequality by adding 3 to both sides",
                                                               "math":  "x \u003e 3"
                                                           },
                                                           {
                                                               "step":  3,
                                                               "text":  "Write the domain",
                                                               "math":  "Domain: x \u003e 3"
                                                           },
                                                           {
                                                               "step":  4,
                                                               "text":  "Bonus: the graph shifts 3 units to the RIGHT, and the vertical asymptote moves to x = 3",
                                                               "math":  "Vertical wall is now at x = 3"
                                                           }
                                                       ],
                                             "answer":  "Domain: x \u003e 3"
                                         },
                       "tips":  [
                                    "Log graphs always pass through (1, 0) when there is no transformation, because log_b(1) = 0 for any base.",
                                    "Adding a number at the end (like +2) shifts the graph UP by that much.",
                                    "If the inside is (x âˆ’ h), the graph shifts RIGHT by h units and the domain becomes x \u003e h."
                                ],
                       "mistakes":  [
                                        "You CANNOT take the log of 0 or a negative number â€” ever! Always check and write the domain first.",
                                        "Shifting direction trick: y = log(x âˆ’ 3) shifts RIGHT by 3 (not left). The minus sign moves it RIGHT, which feels backwards!"
                                    ],
                       "didYouKnow":  "Logarithmic spirals appear throughout nature â€” in nautilus shells, sunflower seed arrangements, hurricane cloud patterns, and even spiral galaxies! These natural shapes follow logarithmic mathematics, making log functions one of the most beautiful in all of math.",
                       "quiz":  [
                                    {
                                        "question":  "What is the domain of y = log(x)?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "All real numbers",
                                                        "x \u003e 0",
                                                        "x â‰¥ 0",
                                                        "x \u003c 0"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "You can only take the log of a positive number. So the domain is x \u003e 0. Zero itself is NOT allowed!"
                                    },
                                    {
                                        "question":  "The graph y = log(x) + 4 compared to y = log(x) is shifted:",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "Right 4 units",
                                                        "Left 4 units",
                                                        "Up 4 units",
                                                        "Down 4 units"
                                                    ],
                                        "correct":  2,
                                        "explanation":  "Adding +4 at the END of the equation shifts the graph UP by 4 units."
                                    },
                                    {
                                        "question":  "What is the domain of y = log(x âˆ’ 5)?",
                                        "type":  "multiple-choice",
                                        "options":  [
                                                        "x \u003e 0",
                                                        "x \u003e 5",
                                                        "x \u003e âˆ’5",
                                                        "All numbers"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "Set the inside \u003e 0: x âˆ’ 5 \u003e 0, which gives x \u003e 5. Only values GREATER than 5 are allowed."
                                    },
                                    {
                                        "question":  "True or False: Logarithmic functions are inverse operations of exponential functions.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  0,
                                        "explanation":  "Logs undo exponents, and exponents undo logs."
                                    },
                                    {
                                        "question":  "True or False: log(x) is defined for x = 0 and for negative x values.",
                                        "type":  "true-false",
                                        "options":  [
                                                        "True",
                                                        "False"
                                                    ],
                                        "correct":  1,
                                        "explanation":  "The inside of a logarithm must stay positive."
                                    }
                                ],
                       "practice":  [
                                        {
                                            "question":  "What is the domain of y = log(x)?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "All real numbers",
                                                            "x \u003e 0",
                                                            "x â‰¥ 0",
                                                            "x \u003c 0"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "You can only take the log of a positive number. So the domain is x \u003e 0. Zero itself is NOT allowed!"
                                        },
                                        {
                                            "question":  "The graph y = log(x) + 4 compared to y = log(x) is shifted:",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "Right 4 units",
                                                            "Left 4 units",
                                                            "Up 4 units",
                                                            "Down 4 units"
                                                        ],
                                            "correct":  2,
                                            "explanation":  "Adding +4 at the END of the equation shifts the graph UP by 4 units."
                                        },
                                        {
                                            "question":  "What is the domain of y = log(x âˆ’ 5)?",
                                            "type":  "multiple-choice",
                                            "options":  [
                                                            "x \u003e 0",
                                                            "x \u003e 5",
                                                            "x \u003e âˆ’5",
                                                            "All numbers"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "Set the inside \u003e 0: x âˆ’ 5 \u003e 0, which gives x \u003e 5. Only values GREATER than 5 are allowed."
                                        },
                                        {
                                            "question":  "True or False: Logarithmic functions are inverse operations of exponential functions.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  0,
                                            "explanation":  "Logs undo exponents, and exponents undo logs."
                                        },
                                        {
                                            "question":  "True or False: log(x) is defined for x = 0 and for negative x values.",
                                            "type":  "true-false",
                                            "options":  [
                                                            "True",
                                                            "False"
                                                        ],
                                            "correct":  1,
                                            "explanation":  "The inside of a logarithm must stay positive."
                                        }
                                    ]
                   }
               ]
}
;

