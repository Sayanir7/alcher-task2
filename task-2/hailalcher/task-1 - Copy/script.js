document.addEventListener('DOMContentLoaded', () => {
    const sidebar_btn = document.querySelector('.sidebar-control-btn');
    const sidebar = document.querySelector('.sidebar');
    // const sidebar_nav = document.querySelector('.sidebar nav');
    const texts = document.querySelector('.new-item button span');
    const texts2 = document.querySelectorAll('#left p');
    const texts3 = document.querySelectorAll('#drop-icon');
    const listItems = document.querySelectorAll('.nav-menu li');
    const sidebar_btn2 = document.querySelector('.sidebar-control-btn2');
    const dropIcon = document.querySelector('a #drop-icon');
    const dropdown = document.querySelectorAll('.dropdown-content');
    const popup = document.querySelector('.pop-container');






    sidebar_btn.addEventListener('click', () => {
        let key = true;

        const isClosed = sidebar.classList.toggle('close');
        // if(sidebar.classList.contains('close')){
        //     sidebar.classList.remove('close');
        //     key=0;
        //     check_sidebar=true;
        // }
        // else{
        //     sidebar.classList.add('close');
        //     key=1;
        //     check_sidebar=false;
        // }
        // sidebar_nav.classList.toggle('close');





        if (isClosed) {

            console.log('isclosed if');
            //gsap.to(texts1, { duration: 0.5,  width: 45, stagger: 0.1 });
            gsap.to(texts3, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1, delay: 0.3 });
            gsap.to(texts2, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1 });
            gsap.to(texts, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1 });
            // dropdownControl(listItems);
            key = true;



        } else {
            key = false;
            console.log('isclosed else');
            //gsap.to(texts1, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1, delay: 0.3 });

            gsap.to(texts3, { duration: 0.5, opacity: 0, width: 0, stagger: 0.1 });
            gsap.to(texts2, { duration: 0.5, opacity: 0, width: 0, stagger: 0.1 });
            gsap.to(texts, { duration: 0.5, opacity: 0, width: 0, stagger: 0.1 });
            gsap.to(dropdown, { duration: 0.3, height: 0, opacity: 0 });
            dropIcon.classList.remove('rotate');


        }
        console.log(key);
        // if(key){
        //     dropdownControl(listItems);
        // }

        // dropdownControl(listItems,key,sidebar);
        if (key) {
            listItems.forEach(item => {
                // const link = item.querySelector('a');
                const dropdown = item.querySelector('.dropdown-content');
                const dropIcon = item.querySelector('a #drop-icon');


                var k = 0;

                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    sidebar.classList.add('close');

                    gsap.to(texts3, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1, delay: 0.3 });
                    gsap.to(texts2, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1 });
                    gsap.to(texts, { duration: 0.5, opacity: 1, width: 'auto', stagger: 0.1 });

                    // dropIcon.classList.toggle('rotate');


                    // const isVisible = dropdown.style.display !== 'none';


                    if (k) {

                        k = 0;
                        gsap.to(dropdown, { duration: 0.3, height: 0, opacity: 0 });
                        //gsap.fromTo(dropdown, { height: 'auto', opacity: 1 }, { duration: 0.5, height: 0, opacity: 0 });
                        dropIcon.classList.remove('rotate');
                    }
                    else {

                        k = 1;

                        // dropdown.style.display = 'block';
                        gsap.fromTo(dropdown, { height: 0, opacity: 0 }, { duration: 0.3, height: 'auto', opacity: 1 });
                        dropIcon.classList.add('rotate');



                    }






                });


            });
        }






    });

    // const check_sidebar = ()=>{
    //     let k=true;

    //     sidebar_btn.addEventListener('click', ()=>{
    //         if(k){
    //             k=false;
    //         }
    //         else{
    //             k=true;

    //         }
    //         console.log(k);
    //     });


    // }

    // check_sidebar();




    // sidebar_btn.addEventListener('click', ()=>{
    //     const isClosed = sidebar.classList.toggle('open');
    //     sidebar.classList.toggle('close');
    // });

    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !sidebar_btn.contains(e.target) && sidebar.classList.contains('close')) {



            sidebar.classList.remove('close');
            gsap.to(texts3, { duration: 0.5, opacity: 0, width: 0, stagger: 0.1 });
            gsap.to(texts2, { duration: 0.5, opacity: 0, width: 0, stagger: 0.1 });
            gsap.to(texts, { duration: 0.5, opacity: 0, width: 0, stagger: 0.1 });
            gsap.to(dropdown, { duration: 0.3, height: 0, opacity: 0 });
            dropIcon.classList.remove('rotate');


        }
    });














    const fetchdata = async () => {
        const response = await fetch('https://dummyjson.com/users');
        if (response.status !== 200) {
            throw new Error('cannot fetch data');
        }
        const data = await response.json();
        console.log(data);
        return data;

    }

    fetchdata()
        .then(data => {
            const tbody = document.getElementById('table-body');
            tbody.innerHTML = '';
            data.users.forEach(user => {
                const tr = document.createElement('tr');
                tr.classList.add('user');

                tr.innerHTML = `
                    <td>${user.firstName} ${user.lastName}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td class="options">
                        <button class="edit-btn" onclick="editUser(${user.id})"><i class="fa-regular fa-floppy-disk"></i> Edit</button>
                        <button class="delete-btn" onclick="deleteUser(event)"><i class="fa-regular fa-floppy-disk"></i> Delete</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching users:', error));




    // document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
    //     dropdownToggle.addEventListener('click', event => {
    //         event.preventDefault();
    //         const dropdownContent = event.target.nextElementSibling;
    //         dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    //     });
    // });
    const popup_content = document.querySelector('.popup');
    document.querySelectorAll(".add-item").forEach(ele => {
        ele.addEventListener('click', () => {

            // popup.classList.toggle('show');
            gsap.to(popup, { duration: 0.5, opacity: 1, visibility: 'visible' });
            gsap.to(popup_content, { duration: 0.5, opacity: 1, scale: 1, ease: 'back.out(1.7)' });

        })
    });



    window.addEventListener('click', (event) => {
        if (event.target != popup_content && event.target == popup) {
            // popup.classList.remove('show');
            gsap.to(popup_content, {
                duration: 0.5, opacity: 0, scale: 0, ease: 'back.in(1.7)', onComplete: () => {
                    gsap.to(popup, { duration: 0.5, opacity: 0, visibility: 'hidden' });
                }
            });
        }
    })

    function closePopup() {
        gsap.to(popup_content, {
            duration: 0.5, opacity: 0, scale: 0, ease: 'back.in(1.7)', onComplete: () => {
                gsap.to(popup, { duration: 0.5, opacity: 0, visibility: 'hidden' });
            }
        });
    }
});




// function addUser(){
//     alert("ksdjflkhdfio");

// }


function editUser(id) {
    alert(`Edit user with ID ${id}`);
}

function deleteUser(event) {
    // alert(`Delete user with ID ${id}`);
    const tr = event.target.closest('.user');
    tr.remove();

}

function dropdownControl(listItems, key, sidebar) {


}
