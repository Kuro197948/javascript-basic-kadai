/* // btnというidを持つHTML要素を取得し、定数に代入する
 const btn = document.getElementById('btn');
 // parent-listというidを持つHTML要素を取得し、定数に代入する
 const parentList = document.getElementById('parent-list');

 // HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // h2要素を新しく作成する
    const childList = document.createElement('h2');
  
    // 作成したh2要素に「クリックしました」というテキストを追加する
    childList.textContent = 'クリックしました';
  
    // 作成したh2要素を子要素として末尾に追加する
    parentList.appendChild(childList);
  });*/

  const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

  setTimeout(() => {
    btn.textContent = 'Clicked!';
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
    
   
    
});