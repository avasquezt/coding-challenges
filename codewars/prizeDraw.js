function rank(st, we, n) {
    if (st.length == 0) return 'No participants';
    st = st.split(',');
    if (n > st.length) return 'Not enough participants';
    console.log(st.map((word, i) => (word.length + word.toLowerCase().split('').reduce((acc,char) => acc + char.charCodeAt(0) - 96, 0)) * we[i]))
    st.sort((a, b) => calculateScore(b, we[st.indexOf(b)]) - calculateScore(a, we[st.indexOf(a)]) || a.localeCompare(b));
    return st[n - 1];
}

function calculateScore(word, weight){
  return (word.length + word.toLowerCase().split('').reduce((acc,char) => acc + char.charCodeAt(0) - 96, 0)) * weight;
}