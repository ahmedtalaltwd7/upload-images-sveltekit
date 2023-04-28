import  sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

export const actions = {
    add: async ({ request }) => {
    const data = await request.formData()
    let file = data.getAll('file')
    console.log(file);
    const names = file.map(user => user.name);
    console.log(names);
    if (!file) return next();
  

    await Promise.all(
      file.map(async (file,i) => {
  
     let filename   = `img-${uuidv4()}_${Date.now()}-${i + 1}.jpeg`;

        if (file) {

          
          let ab = await file.arrayBuffer()
    
           await sharp(ab)
          .resize(500, 500)
          .toFormat('jpeg')
          .jpeg({ quality: 90 })
          .toFile(`uploads/images/${filename}`);
          return { success: true }     
        }
    })
    
    );}
  };


 