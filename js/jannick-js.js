const reviews = document.querySelectorAll('.reviews-slide-item');
const prevReview = document.getElementById('reviews-nav-prev');
const nextReview = document.getElementById('reviews-nav-next');
let reviewCount = reviews.length;
let currentReviewIdx = 0;

prevReview.classList.add('not-clickable');

prevReview.addEventListener('click', (toPrevReview));
nextReview.addEventListener('click', (toNextReview));

/*
    Functions
*/

function toPrevReview() {

    if (!reviews[0].classList.contains('current-review')) {

        let revPos = reviews[currentReviewIdx].style.transform;
        revPos = parseInt(revPos.substring(11, revPos.length - 2));
        let moveIdx;

        moveIdx = revPos + 100;

        for (let i = reviewCount - 1; i >= 0; i--) {
            reviews[i].classList.remove('current-review');
            reviews[i].style.transform = "translateX(" + moveIdx + "%)";
        }
        currentReviewIdx--;
        reviews[currentReviewIdx].classList.add('current-review');

        if (reviews[0].classList.contains('current-review')) {
            prevReview.classList.add('not-clickable');
        }

        if (nextReview.classList.contains('not-clickable')) {
            nextReview.classList.remove('not-clickable');
        }
    }
}

function toNextReview() {

    if (!reviews[reviewCount - 1].classList.contains('current-review')) {
        nextReview.classList.remove('not-clickable');

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

        if (reviews[reviewCount - 1].classList.contains('current-review')) {
            nextReview.classList.add('not-clickable');
        }
    }

    if (prevReview.classList.contains('not-clickable')) {
        prevReview.classList.remove('not-clickable');
    }
}