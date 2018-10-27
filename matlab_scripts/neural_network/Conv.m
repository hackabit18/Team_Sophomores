function y=Conv(x,w)
[wrow,wcol,numfil]=size(w);
[xrow,xcol,~]=size(x);
yrow=xrow-wrow+1;
ycol=xcol-wcol+1;
y=zeros(yrow,ycol,numfil);
for k=1:numfil
    filter= w(:,:,k);
    filter=rot90(squeeze(filter),2);
    y(:,:,k)=conv2(x,filter,'valid');
end
end
