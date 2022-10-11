import { LightningElement, track } from 'lwc';
export default class App extends LightningElement {
    TodoId = 2;
    @track todos = [
        { id: 1, details: 'A' },
        { id: 2, details: 'B' }
    ];
   
    @track details;
    handleToDoChanges(event){
        this.details = event.target.value;
   
    }
    handleToDo(){
        if  (this.details != ''){
            this.TodoId = this.TodoId + 1;
            this.todos = [
                ...this.todos,
                {
                    id: this.TodoId,
                    details: this.details,
                }
            ];
        }
    }
}