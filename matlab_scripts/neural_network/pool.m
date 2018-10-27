function y=pool(x)
[xrow,xcol,numfil]=size(x);
y=zeros(xrow/2,xrow/2,numfil);
for k=1:numfil
    filter=ones(2)/(2*2);
    image=conv2(x(:,:,k),filter,'valid');
    y(:,:,k)=image(1:2:end,1:2:end);
end
end