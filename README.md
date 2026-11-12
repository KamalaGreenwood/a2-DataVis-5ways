Assignment 2 - Data Visualization, 5 Ways  
===
Default:<br>
![Default](img/ggplot2.png)<br>
This was the goal that I was attempting to recreate in different tools/libraries

Python with Matplotlib:<br>
![matplotLib](img/pythonPlt.png)<br>
This was fairly easy for a library, although knowing pyhton or having experience definitely helps. I really struggled to get legends to work. Having two seperate legends required a handler. Also I fought with placment of the legends for a long time. I wanted them to be on the right and outside of the graph which seemed doable with "outer upper right" but there were two placement methods and the one that worked with my code did not allow for "outer". I also had to offset the second legend so they were readable. 
I set the size of the dots to be 1.1^(bill_length_mm) which made the change in size more distinct wile still being readable. For some reason this made the legends a bit weird where the Species legend ended up having diffent sized dots. I don't know what exactly the size is based on but I would assume it was the average size per species. Annoyingly the size legend didn't actually show that much of a difference. This is why I used exponential in the data drawing portion, but I was unable to appy that change to the legend. I think this is the most accurate except for my legend issues.<br>
Credit to<br>
-Benjamin Greenwood<br>
-VS Code Copilot<br>
-Griffon Munhall<br>

Tableau:<br>
![Tableau_2ndVersion](img/Tableau_update.png)<br>
This was extremely easy. In total took me maybe 15 minutes. At first I found tableau public desktop to be a bit confulsing, but quickly learned that it worked by dragging data attributes onto graph attributes. For example dragging Species onto the color icon to get points to be colored by species. This was amazing and I would love to use it again in the future. Intrestingly I notices that there were more "bill_length_mm" than in the example and I do not know why exactly, but I think the overal outcome is the same.<br>
Version 2: I changed the colors and messed around with size to make the scaling more noticable. I had used "Edit in Shef" then 2*[Bill_length_mm] but then the legend was only showing the multiplied version, so I undid that. 

D3 and JS:

Fourish:<br>
![Flourish](img/Flourish_penguin2.png)<br>
This was simple like Tableau, which is expected as it is a tool and not a language. But I had many annoyances. Maybe using their built in AI could have helped me solve some of these but I am just going to list my user experience issues without the use of AI. I liked how you could load in data and it showed it as a table and also ass you assigned attributed the graph thumbnail changed in real time accordingly. On the other hand I struggled to change the colors from the presets to something more specific. I also couldn't make the size use a fancier function like [Bill_length_mm]^1.2 or *2.5, as it seemed to only allow an attribute to be assigned to a column. There wasn't an easy way to make a new column with an equation like excel where =D3*2.5 or something like that would automatically change the value based on another column's value. I also wasn't able to figure out how to add a second legend with size which is annoying.<br>
Version 2: I was able to figure out how to modify the colors to be more accurate.

These features should be preserved as much as possible in your replication:

- Data positioning: it should be an upward-trending scatterplot as shown.  Flipper Length should be on the x-axis and Body Mass on the y-axis.
- Scales: Note the scales do not start at 0.
- Axis ticks and labels: both axes are labeled and there are tick marks at a reasonable interval, e.g 10, 20, 30, etc.
- Color mapping to species.
- Size mapping to Bill Length.
- Opacity of circles set to 0.8 or similar for a semi-transparent effect.

Other features are not required. This includes:

- The background grid.
- The legends.

---

- R + ggplot2 `<- definitely worth trying`
- d3 `<- since the rest of the class uses this, we're requiring it`
- Altair `<- hugely popular python library. highly recommended `
- three.js `<- well, it's a 3d library. not really recommended, but could be interesting and fun`
- p5js `<- good for playing around. not really a chart lib`
- Tableau
- Vega-lite `<- very interesting formal visualization model; might be the future of the field`
- Flourish `<- popular in recent years`
- DataWrapper `<- popular in recent years`

Tips
---

- If you're using d3, key to this assignment is knowing how to load data.
You will likely use the [`d3.json` or `d3.csv` functions](https://d3js.org/d3-dsv) to load the data you found.

- `penglings.csv` has a few rows with `NA` values (two have no measurements at all). Filter them out before you plot (in d3, converting `"NA"` to a number gives `NaN`, which breaks scales and circle positions).

- *For web languages like d3* Don't forget to run a local webserver when you're debugging.
Same as A1: run `python3 -m http.server` in your repo folder and visit http://localhost:8000.
Being able to host a local webserver is an essential web development skill and very common in visualization design as well.

Readme Requirements
---

A good readme with screenshots and structured documentation is required for this project. 
It should be possible to scroll through your readme to get an overview of all the tools and visualizations you produced.

- Each visualization should start with a top-level heading (e.g. `# d3`)
- Each visualization should include a screenshot. Put these in an `img` folder and link through the readme (markdown command: `![caption](img/<imgname>)`.
- Write a paragraph for each visualization tool you use. What was easy? Difficult? Where could you see the tool being useful in the future? Did you have to use any hacks or data manipulation to get the right chart?

Other Requirements
---

0. Your code should be forked from the GitHub repo.
1. Place all code, Excel sheets, etcetera in a named folder. For example, `r-ggplot, matlab, mathematica, excel` and so on.
2. Your writeup (readme.md in the repo) should also contain the following:

- Description of the Technical achievements you attempted with this visualization.
  - Some ideas include interaction, such as mousing over to see more detail about the point selected.
- Description of the Design achievements you attempted with this visualization.
  - Some ideas include consistent color choice, font choice, element size (e.g. the size of the circles).

GitHub Details
---

- Fork the GitHub Repository. You now have a copy associated with your username.
- Make changes to fulfill the project requirements. 
- To submit, make a [Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request-from-a-fork) on the original repository, and put the link to your pull request in the A2 assignment on Canvas.
- Note: name your pull request using the following scheme: 
```
a2-your Gh username-your first name-your lastname
```

Grading
---

Grades on a 120 point scale. 
24 points will be based on your Technical and Design achievements, as explained in your readme. 

Make sure you include the files necessary to reproduce your plots.
You should structure these in folders if helpful.
We will choose some at random to run and test.

**NOTE: THE BELOW IS A SAMPLE ENTRY TO GET YOU STARTED ON YOUR README. YOU MAY DELETE THE ABOVE.**

# R + ggplot2 + R Markdown

R is a language primarily focused on statistical computing.
ggplot2 is a popular library for charting in R.
R Markdown is a document format that compiles to HTML or PDF and allows you to include the output of R code directly in the document.

To visualize the penguins dataset, I made use of ggplot2's `geom_point()` layer, with aesthetics functions for the color and size.

While it takes time to find the correct documentation, these functions made the effort creating this chart minimal.

![ggplot2](img/ggplot2.png)

# d3...

(And so on...)


## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI Forever**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: As demonstrated in my colorscheme...
