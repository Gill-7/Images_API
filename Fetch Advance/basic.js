const url = 'https://pixabay.com/api/?key=19491910-8bdc0987f571058529ab6f874&q=countryside'

async function getImages() {
    const imagePromise = await fetch(url);
    const images =  await imagePromise.json(); 
    
    const imageDiv = document.querySelector('.img')
    let imageHtml = '';
    
    console.log(images.hits[0])

    images.hits.slice(0,40).forEach(image => {
        imageHtml += `
            <div class='image-wrapper card'>
                <div class='image'>
                    <img class='image__img' src='${image.previewURL}'>
                    <span class='image_info'>
                        <h3>OPI: ${image.tags}</h3>
                        <span>Size: ${image.imageSize}</span>
                    </span>
                    
                </div>

                
            </div>
            `;
    });
    imageDiv.innerHTML = imageHtml

}

getImages()