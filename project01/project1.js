// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{
    //debugger
    //console.log(bgImg.length)
    for(let i = 0; i < bgImg.length; i += 4) {
        bgImg.data[i] = 255;
        bgImg.data[i + 1] = 255;
        bgImg.data[i + 2] = 255;
        bgImg.data[i + 3] = 255;
      }
    

}
