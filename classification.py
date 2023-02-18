import pandas as pd
import numpy as np 
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt
df=pd.read_csv("./airlines_delay.csv")
one_hot_encoded_data=pd.get_dummies(df,columns=['Airline','AirportFrom','AirportTo'])
var_columns=[c for c in one_hot_encoded_data.columns if c not in ['Class','Flight']]
x=one_hot_encoded_data.loc[:,var_columns]
y=one_hot_encoded_data.loc[:,'Class']
X_train , X_test, Y_train,Y_test= train_test_split(x,y,random_state=99,test_size=0.2)
clf = RandomForestClassifier(criterion="gini",max_depth=100,min_samples_split=10,random_state=5)
clf.fit(X_train,Y_train)
y_pred=clf.predict(X_test)
print(y_pred)
confusion_matrix(Y_test,y_pred)
from sklearn.metrics import accuracy_score
accuracy_score(Y_test,y_pred)