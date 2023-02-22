const reviews = document.querySelectorAll('.reviews-slide-item');
const prevReview = document.getElementById('reviews-nav-prev');
const nextReview = document.getElementById('reviews-nav-next');
let reviewCount = reviews.length;
let currentReviewIdx = 0;

if (!reviews[0].classList.contains('not-clickable')) {
    prevReview.classList.add('not-clickable');
}

// prevReview.addEventListener('click', () => {
//     toPrevReview();
//     console.log(reviews[currentReviewIdx].style.transform);
// });


nextReview.addEventListener('click', () => {
    toNextReview();
    console.log(reviews[currentReviewIdx].style.transform);
});

/*
    Functions
*/

// function toPrevReview() {
//     if (!reviews[0].classList.contains('current-review')) {

//         let revPos = reviews[currentReviewIdx].style.transform;
//         revPos = parseInt(revPos.substring(11, revPos.length - 2));
//         let moveIdx;

//         moveIdx = revPos + 100;

//         for (let i = reviewCount - 1; i > 0; i--) {
//             reviews[i].classList.remove('current-review');
//             reviews[i].style.transform = "translateX(" + moveIdx + "%)";
//             console.log(moveIdx);
//             // console.log(reviews[i].style);
//         }
//         currentReviewIdx--;
//         reviews[currentReviewIdx].classList.add('current-review');

//         if (currentReviewIdx == 0 && !prevReview.classList.contains('not-clickable')) {
//             prevReview.classList.add('not-clickable');
//         } else {
//             prevReview.classList.remove('not-clickable');
//         }
//     }
// }

function toNextReview() {

    if (!reviews[reviewCount - 1].classList.contains('current-review')) {

        let revPos = reviews[currentReviewIdx].style.transform;
        let moveIdx;

        if (revPos == "") {
            reviews.forEach(review => {
                review.style.transform = "translateX(0%)";
            });
            revPos = reviews[currentReviewIdx].style.transform;
        }
        revPos = parseInt(revPos.substring(11, revPos.length - 2));

        moveIdx = revPos - 100;

        for (let i = 0; i < reviewCount; i++) {
            reviews[i].classList.remove('current-review');
            reviews[i].style.transform = "translateX(" + moveIdx + "%)";
        }
        currentReviewIdx++;
        reviews[currentReviewIdx].classList.add('current-review');

        if (currentReviewIdx == reviewCount - 1 && !nextReview.classList.contains('not-clickable')) {
            nextReview.classList.add('not-clickable');
        } else {
            nextReview.classList.remove('not-clickable');
        }
    }
}