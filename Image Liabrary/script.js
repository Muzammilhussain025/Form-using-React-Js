const gallery = document.querySelectorAll(".gallery .image");
const previewbox = document.querySelector(".preview-box");
const previewimg = previewbox.querySelector("img")
const closeicon = previewbox.querySelector(".icon");
const currentImg = previewbox.querySelector(".current-img")
const totalImg = previewbox.querySelector(".total-img")
window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = () => {
            clickImgIndex = newIndex;
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewimg.src = selectedImgUrl;
            }
            
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }
                else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }
                else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            preview();
            previewbox.classList.add("show");

            closeicon.onclick = ()=>{
                clickImgIndex = newIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewbox.classList.remove("show");
            }

        }
    }
}