# Team_Sophomores


# Inspiration

August 2018 brought horrors of mass destruction in Kerala as the state faced the worst natural calamity in a century. Nearly 27 lakhs people were affected by the floods and about 400 lost their lives. Every year such events affect millions of lives within our country. 
We cannot stop such disasters from happening but we can prepare specialized systems which can generate real time alerts for an incoming disaster like flood and can prepare optimal strategies for evacuation of the masses from the affected areas.
Project Noah is an attempt made by Team Sophomores towards the same. It uses the infrastructure and resources that are already available to us and aims to save thousands or even millions of lives and ton of economic loss to the country.

# What is Project Noah?

Project Noah can be best described as a set of algorithms aimed to predict the areas that would be most affected by an incoming disaster (like floods) and to prepare optimal evacuation strategies for the people living in those areas.
The process involves the use of remotely sensed data and satellite imagery belonging to different regions of the electromagnetic spectrum. The data and images thus obtained provide us with the input values on which the algorithms involved in the project are based upon. Also, satellite images from live (nearly) sources provide us values on which the algorithms are tested upon. 
Project Noah works in three subsequent stages -   
	Sensing stage
	Alert stage
	Evacuation stage

We will describe the various algorithms involved in these stages one by one in a moment. But first let’s have a look at the logical flow diagram of the project for a better understanding of what we are doing here. 

  
Now let’s get back to the discussion of the three stages mentioned before and the algorithms involved in each of them.

# Sensing Stage

This stage is aimed to test the incoming satellite image data to ‘sense’ an upcoming natural disaster. We are taking floods as an example here as most of our work revolves around this particular natural disaster but the nature of the algorithms used here are such that they could be generalized for any other type of mass disaster.
Algorithm 1 – Selection of base image for comparison to incoming latest images. 
For this we plot the water area present in different images present in the dataset on a graph. Then we take the mode (most frequent values with small difference) of the values thus obtained.  
This value is subject to corrections as we have not taken into account the tidal value difference which is important especially in coastal regions. This will be left for now but will be taken into account once defining the threshold value Vth.
 
For now, we have just selected the base image on the basis of the mode of the values obtained by plotting the graph.
Algorithm 2 – Image thresholding method to sense an incoming disaster.
This algorithm is pretty straight forward. The base image is taken for comparison for incoming images to be tested upon. A threshold value (in %age) is set for an area depending upon the resolution of the incoming images.
We know a few things here about the threshold value Vth –
Vth α 1/(Resolution of the image)
Vth should be more flexible for areas which experience high tides frequently. So, there should be consideration of correction factor in the calculations as per data. Let’s call this correction factor as Ctidal.
  

Algorithm 3 – Neural network method to sense an incoming disaster.
Algorithm 4 – Feedback mechanism for increasing accuracy of sensing stage.
In Project Noah, we have focused a lot towards increasing the accuracy of sensing stage as it the first and the most important stage. However, in real life scenarios we must prepare a mechanism that would enable the operator to fine-tune the algorithms according to different locations and change of time. 
Thus, it was quite essential to add feedback mechanism in this stage. This would help in decreasing down the error value in every subsequent use of the program.

# Alert Stage

This stage is aimed to generate alerts in the areas that are going to be most affected by this incoming natural disaster. As mentioned above, we are taking floods as example. The following algorithms are involved in this stage –
Algorithm 6 – Determination of rate of increase of area of flood water.
Algorithm 7 – Determination of rate of increase of volume of flood water by using Bathymetry concepts. 
Bathymetry is the discipline of geology which deals with the measurements of depths of water in oceans, seas or lakes. We will not go in much details about it here and will just focus on the application part. We have hosted a detailed report about this online at _____. 
 
Here, Lt= Lb+ Lv+ Ls+ Lp                                
Where Lt: Total radiance 
Lb: Bottom or seabed radiance
Lp: Atmospheric path radiance
Lv: Subsurface volumetric radiance
Ls: Specular radiance
  Then we will apply Jupp’s formula to get spectral radiance like following - 
L (λ)=  (((L max⁡– L min) * DN)) )/(DNmax )  +L min⁡〖                                                      〗
A plot of this spectral radiance will help us to find the depth of a particular part of the image. More on this - .
Evacuation Stage

Algorithm 8 – Processing data obtained by latest satellite images to determine affected locations and the population size.
	Getting a general direction vector of the flood.

Every latest image fetched in the program will have a time-stamp attached to it.
We will find the centroid of the water structure (which is of our interest) present in the subsequent images.  
The direction vector from the prior centroid to the new centroid of the water structure will give us a general direction of water level increase.

   

Algorithm 9 – Processing data obtained by elevation/flood maps to determine safest locations.

 
Algorithm10 – Marking shortest distance of safe location from points that would be most affected.
Once we know the coordinates of points that would be most affected and least affected by the incoming disaster, we can use the Google’s Map API to find out the shortest route between those points in a strategic manner. That means we can sort out the routes that do not fall in the middle of the zone that is going to be affected and hence would increase safety levels during the process of delocalization of the population present in the area of interest.
 
We are also working on seeking ways to map out the possibility of delocalization using railway and air routes for large masses and quick evacuation respectively. 


# How to use

Install postgres database and create db names as projectnoah with postgres as user and qwerty as password

Clone the project
Run node app.js in postgres-sql-and-api directory
Run automation.m script in matlab
Run npm start inside frontend directory
you will get the desktop app on your system
Install android app for your android smartphone.


