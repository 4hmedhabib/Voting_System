const cards = document.querySelector('#cards');
const voteEl = document.querySelector('#voteNum');

// List
const competitors = [{
        id: 'biixi',
        name: 'Muuse Biixi Cabdi',
        party: 'Kulmiye Party',
        votes: 0,
        desc: 'The Kulmiye Peace, Unity and Development Party, also known as simply Kulmiye, is the current ruling political party in Somaliland. The party was founded by Ahmed Mohamed Mohamoud in May 2002, ahead of the first municipal elections later that year.',
        logo: 'kulmiye-logo',
        competitorImg: 'biixiImg'
    },
    {
        id: 'cirro',
        name: 'C.raxmaan C.laahi Cirro',
        party: 'Waddani Party',
        votes: 0,
        desc: 'Waddani is a political party in Somaliland. The party was founded by Abdirahman Mohamed Abdullahi in 2012, ahead of the second municipal elections later that year.',
        logo: 'waddani-logo',
        competitorImg: 'cirroImg'
    },
    {
        id: 'faysal',
        name: 'Faysal Cali Waraabe',
        party: 'Ucid Party',
        votes: 0,
        desc: 'For Justice and Development, also known as the Justice and Welfare Party, is the oldest political party in Somaliland. The party tends to be supported by people from the Garhajis clan and some sub-clans of the Dir.',
        logo: 'ucid-logo',
        competitorImg: 'faysalImg'
    }
];

let winner = false;

cards.innerHTML = getCards();

function getCards() {
    return competitors.map(competitor => {
        return `<div class="card" id="card">
        <div class="top">
            <div class="party-name">
                <h2>${competitor.party}</h2>
            </div>
            <div class="party-logo">
                <img src="./image/${competitor.logo}.png" alt="${competitor.logo}">
            </div>
        </div>
        <div class="main">
            <div class="img">
                <img src="./image/${competitor.competitorImg}.jpg" alt="${competitor.name}">
            </div>
            <div class="name">
                <h2>${competitor.name}</h2>
            </div>
            <div class="desc">
                <p id='${competitor.id}'>${competitor.desc}</p>
            </div>
            <div class="result">
            </div>
           <footer>
           <div class="voteNum" id="voteNum">
           <p class='${competitor.id}'>${competitor.votes}</p>
       </div>
       <button class="btn-vote btn-${competitor.id}" id="btn-vote">Vote</button>
           </footer>
        </div>
    </div>`
    })
}


const muuseBiixi = document.querySelector('.biixi')
const cabdiraxmaanCirro = document.querySelector('.cirro');
const faysalCali = document.querySelector('.faysal');
const result = document.querySelector('.result');

const voteButtons = document.querySelectorAll('.btn-vote');

voteButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (cardButton.textContent === 'Vote') {
            if (e.target.classList.contains('btn-biixi')) {
                addVote(0, 'biixi', muuseBiixi)
            } else if (e.target.classList.contains('btn-cirro')) {
                addVote(1, 'cirro', cabdiraxmaanCirro)
            } else if (e.target.classList.contains('btn-faysal')) {
                addVote(2, 'faysal', faysalCali)
            }
        }
    })
})

const isWinner = (competitor, votes) => {
    if (votes === 11) {
        winner = true;
        setWinnerLoser(competitor)
    }
}

const addVote = (index, competitor, votesEl) => {
    if (!winner) {
        competitors[index].votes++;

        votesEl.textContent = competitors[index].votes;

        isWinner(competitor, competitors[index].votes)
    }
}



const setWinnerLoser = (competitor) => {
    if (competitor === 'biixi') {
        muuseWinner = document.querySelector('.btn-biixi')
        muuseWinner.textContent = 'WINNER';
        muuseWinner.classList.add('green')


        cirroLosser = document.querySelector('.btn-cirro');
        cirroLosser.textContent = 'LOSSER';
        cirroLosser.classList.add('red')

        faysalLosser = document.querySelector('.btn-faysal');
        faysalLosser.textContent = 'LOSSER';
        faysalLosser.classList.add('red')
    } else if (competitor === 'cirro') {
        muuseLosser = document.querySelector('.btn-biixi');
        muuseLosser.textContent = 'LOSSER';
        muuseLosser.classList.add('red')

        cirroWinner = document.querySelector('.btn-cirro')
        cirroWinner.textContent = 'WINNER';
        cirroWinner.classList.add('green')

        faysalLosser = document.querySelector('.btn-faysal');
        faysalLosser.textContent = 'LOSSER';
        faysalLosser.classList.add('red')
    } else if (competitor === 'faysal') {
        muuseLosser = document.querySelector('.btn-biixi');
        muuseLosser.textContent = 'LOSSER';
        muuseLosser.classList.add('red')

        cirroLosser = document.querySelector('.btn-cirro');
        cirroLosser.textContent = 'LOSSER';
        cirroLosser.classList.add('red')

        faysalWinner = document.querySelector('.btn-faysal')
        faysalWinner.textContent = 'WINNER';
        faysalWinner.classList.add('green')
    }
}