// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{ 

    bg_width = bgImg.width;
    bg_height = bgImg.height;

    bg_max_index = bg_width * bg_height * 4;

    fg_width = fgImg.width;
    fg_height = fgImg.height;

    bg_data = bgImg.data
    fg_data = fgImg.data

    offset_x = fgPos.x * 4;
    offset_y = fgPos.y * 4;

    console.log(fgPos.x,fgPos.y)

    for(let row_index = 0; row_index < fgImg.height*4; row_index += 4) 
    {
      
      for (let col_index = 0;col_index < fgImg.width*4;col_index += 4)
      {


        bg_index = ( col_index+offset_x ) + bg_width * (row_index+offset_y);
        fg_index = col_index + fgImg.width * row_index;
        
        if (col_index+offset_x < (bg_width * 4) && (col_index+offset_x) > 0 )
        {
            
          fg_red = fg_data[fg_index]
          fg_green = fg_data[fg_index+1]
          fg_blue = fg_data[fg_index+2]
          
          fg_alpha = fg_data[fg_index + 3]
          fg_normlized_alpha = ( fg_data[fg_index + 3] / 255 ) * fgOpac;
          
          bg_r = bg_data[bg_index]
          bg_g = bg_data[bg_index+1]
          bg_b = bg_data[bg_index+2]

          bg_data[bg_index] = (bg_r * (1 - fg_normlized_alpha)  + fg_red * fg_normlized_alpha );
          bg_data[bg_index+1] = (bg_g * (1 - fg_normlized_alpha) + fg_green * fg_normlized_alpha);
          bg_data[bg_index+2] = (bg_b * (1 - fg_normlized_alpha) + fg_blue * fg_normlized_alpha);

        }
      } 
   
    }     

}
