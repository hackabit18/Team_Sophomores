s=load('train.mat','w1','w5','w0');
j=struct2cell(s);
w1 =j{1};
w5=j{2};
w0=j{3};
z=loadimage('../floodimage.tif');
labels=loadlabels('out.xlsx');
labels(labels==0)=2;
  
        y1=Conv(z,w1);
        y2=ReLu(y1);
        y3=pool(y2);
        y4=reshape(y3,[],1);
        y5=w5*y4;
        y6=ReLu(y5);
        y7=w0*y6;
        y=Softmax(y7);
         [~,i]=max(y);
         if i == 1
             i = 0;
         end
         if i == 2
             i = 1;
         end
         fprintf('got %f\n',i);
        
