// Poem text
const kiplingPoem = `<p><span>Ezekiel 25:17...</span> The path of the righteous man is beset on all sides by the Inequities of the selfish and the tyranny of evil men...
Blessed is he who, in the name of charity and good will
shepherds the weak through the valley of darkness..
for he is truly his brother's keeper and the finder of lost children....
And I will strike down upon thee with great vengeance and <span>
Anger</span> those who attempt to poison and <span>destroy my brothers...
</span><span>And you will know
My name is the Lord when I lay my vengeance upon thee!!
</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    insertPoemIntoDivs();
    setupAudioControl();
});

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);

// Audio control functionality
function setupAudioControl() {
    const audioToggle = document.getElementById('audioToggle');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioLabel = audioToggle.querySelector('.audio-label');
    const audioIcon = audioToggle.querySelector('.audio-icon');
    
    // Get paragraph elements in each face
    const leftParagraph = document.querySelector(".left p");
    const backParagraph = document.querySelector(".back p");
    const rightParagraph = document.querySelector(".right p");
    
    // Get reflect paragraphs too
    const reflectLeftParagraph = document.querySelector(".container-reflect .left p");
    const reflectBackParagraph = document.querySelector(".container-reflect .back p");
    const reflectRightParagraph = document.querySelector(".container-reflect .right p");
    
    audioToggle.addEventListener('click', function() {
        if (audioPlayer.paused) {
            // Play audio
            audioPlayer.play();
            audioToggle.classList.add('playing');
            audioLabel.textContent = 'PAUSE AUDIO';
            audioIcon.textContent = '🔈';
            
            // Start text animations
            leftParagraph.classList.add('animate-left');
            backParagraph.classList.add('animate-back');
            rightParagraph.classList.add('animate-right');
            
            // Also animate reflection paragraphs
            if (reflectLeftParagraph) reflectLeftParagraph.classList.add('animate-left');
            if (reflectBackParagraph) reflectBackParagraph.classList.add('animate-back');
            if (reflectRightParagraph) reflectRightParagraph.classList.add('animate-right');
        } else {
            // Pause audio
            audioPlayer.pause();
            audioToggle.classList.remove('playing');
            audioLabel.textContent = 'PLAY AUDIO';
            audioIcon.textContent = '🔊';
            
            // Stop text animations
            leftParagraph.classList.remove('animate-left');
            backParagraph.classList.remove('animate-back');
            rightParagraph.classList.remove('animate-right');
            
            // Also stop reflecting animations
            if (reflectLeftParagraph) reflectLeftParagraph.classList.remove('animate-left');
            if (reflectBackParagraph) reflectBackParagraph.classList.remove('animate-back');
            if (reflectRightParagraph) reflectRightParagraph.classList.remove('animate-right');
        }
    });
}