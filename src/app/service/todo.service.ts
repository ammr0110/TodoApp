import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import { firestore } from "firebase";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private afs: AngularFirestore, private toastr: ToastrService ) { }

  saveTodo(id: string, data) {
    
    this.afs.collection('categories').doc(id).collection('todos').add(data).then(ref => {
      
      this.afs.doc('categories/' + id).update({todoCount: firestore.FieldValue.increment(1)});

      this.toastr.success('New Todo Successfully Saved');
    });

  }
}
