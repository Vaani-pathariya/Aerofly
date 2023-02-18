import pandas as pd
import numpy as np 
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
df=pd.read_csv("./airlines_delay.csv")
one_hot_encoded_data=pd.get_dummies(df,columns=['Airline','AirportFrom','AirportTo'])
var_columns=[c for c in one_hot_encoded_data.columns if c not in ['Class','Flight']]
x=one_hot_encoded_data.loc[:,var_columns]
y=one_hot_encoded_data.loc[:,'Class']
clf = RandomForestClassifier(criterion="gini",max_depth=100,min_samples_split=10,random_state=5)
clf.fit(x,y)
clf.save('airline.model')