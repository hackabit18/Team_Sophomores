clc;clear;close;
images=loadimages('images\');
%images=reshape(images, 28,28,[]);
labels=loadlabels('out.xlsx');
labels(labels==0)=2;
rng(1);
w1=1e-2*rand([9 9 20]);
w5 =(2*rand(100,2000)-1)*sqrt(6)/sqrt(100+2000);
w0 =(2*rand(2,100)-1)*sqrt(6)/sqrt(10+100);
x=images(:,:,1:9);
d=labels(1:9);ui

for epoch= 1:100
    epoch
    [w1,w5,w0]=train(w1,w5,w0,x,d);
end
save('train.mat');
x=images(:,:,10:22);
d=labels(10:22);
acc=0; n=length(d);
for k=1:n
         z=x(:,:,k);
        y1=Conv(z,w1);
        y2=ReLu(y1);
        y3=pool(y2);
        y4=reshape(y3,[],1);
        y5=w5*y4;
        y6=ReLu(y5);
        y7=w0*y6;
        y=Softmax(y7);
        q(:,k)=y;
        [~,i]=max(y);
        fprintf('we get is%f\n',i)
        fprintf('expected is %f\n',d(k))
        if i==d(k)     
        acc=acc+1;
        end
end
acc=acc/n;
fprintf('acc is%f\n',acc);
