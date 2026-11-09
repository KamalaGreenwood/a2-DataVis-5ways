import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt

data = pd.read_csv("penglings.csv")
penguin_size = data.bill_length_mm
data = data.drop(columns = ["" "island", "sex", "year", "bill_depth_mm"])
colorMap={'Adelie': '#f0a235b3',
          'Chinstrap':'#8535bab3',
          'Gentoo': '#27a9adb3'}
pColor = data["species"].map(colorMap)
fig = plt.figure(figsize=(8,5))
scatter = plt.scatter(x=data["flipper_length_mm"], y=data["body_mass_g"],s=(data["bill_length_mm"]*2.5),c=pColor)
plt.xlabel("Flipper Length (mm)")
plt.ylabel("Body Mass (g)")
##handles,labels = scatter.legend_elements(prop=colors)
##plt.legend(handles=handles, labels=labels, title= 'Species')
axis = plt.gca()
axis.set_facecolor('#f0f0f0')
plt.grid(True)
plt.savefig("pythonPlt.png",dpi=200)