// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{ 
    //debugger

    bg_width = bgImg.width;
    bg_height = bgImg.height;
    bg_length = bg_width * bg_height;
    //bgImg.data[50,80] = 255


    //offset_x = Math.min(Math.max(fgPos.x, 0), bg_width);
   // offset_y = Math.min(Math.max(fgPos.y, 0), bg_height);

    console.log(fgPos.x,fgPos.y)
    console.log(bg_width,bg_height);
    console.log(fgImg.width,fgImg.height);
    console.log(fgOpac)
 
    bg_data = bgImg.data
    fg_data = fgImg.data

    ratio = fgImg.width/bg_width;

    for(let row_index = 0; row_index < fgImg.height*4; row_index += 4) 
    {
      
      for (let col_index = 0;col_index < fgImg.width*4;col_index += 4)
      {

        bg_index = col_index + bg_width * row_index;
        fg_index = col_index + fgImg.width * row_index;
        
        bg_data[bg_index] = fg_data[fg_index] * fgOpac //fg_data[fg_index];
        bg_data[bg_index+1] = fg_data[fg_index+1] * fgOpac //fg_data[fg_index+1];
        bg_data[bg_index+2] = fg_data[fg_index+2] * fgOpac//fg_data[fg_index+2];
        bg_data[bg_index+3] = fg_data[fg_index+3] * fgOpac //fg_data[fg_index+3];
        


      } 
   
    }

       

}
