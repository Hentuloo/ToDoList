const all_list = [...document.querySelectorAll('.ToDoList')]
let instantion = []

class Lista {
    constructor(elemets, list, btns_delete, btn_new_task) {
        this.elemets = elemets
        this.list = list
        this.btns_delete = btns_delete
        this.id = 0
        this.btns_new_task = btn_new_task
    }
    delete(i) {
        const n = this.elemets.findIndex(e => e.dataset.key == i)
        this.btns_delete[n].remove()
        this.elemets[n].remove()
        //this.newsize() 
    }
    newTask() {
        const text = this.list.querySelector('input').value
        if (text !== '') {
            let e = document.createElement('li')
            e.textContent = text
            e.dataset.key = ++this.id
            let button = document.createElement('button')
            button.textContent = 'USUŃ'
            button.addEventListener('click', () => {
                e.remove()
                //this.delete(e.dataset.key) //also work
            })
            e.appendChild(button)
            this.list.appendChild(e)
            this.newsize()
        }
    }
    newsize() {
        this.elemets = [...this.list.querySelectorAll('li')]
        this.btns_delete = [...this.list.querySelectorAll('button')]
    }
    listen() {
        this.btns_delete.forEach((element) => {
            if (element.parentNode.dataset.key == null) {
                element.parentNode.dataset.key = ++this.id
                element.addEventListener('click', () => {
                    this.delete(element.parentNode.dataset.key)
                })
            }
        });

    }

}


all_list.forEach((e, i) => {
    const elements = [...e.querySelectorAll('li')]
    const list = all_list[i]
    const btns_delete = e.querySelectorAll('button')
    const btn_new_task = e.querySelector('input[type="submit"]')
    const list_name = e.dataset.list_name
    instantion.push(new Lista(elements, list, btns_delete, btn_new_task))

    instantion[i].btns_new_task.addEventListener('click', () => {
        instantion[i].newTask()
    })
    instantion[i].listen()
})