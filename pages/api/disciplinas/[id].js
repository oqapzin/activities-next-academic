import { db } from "@/services/firebase"
import { child, get, ref, remove, update } from "firebase/database"
import { v4 } from "uuid"


export default function handler(req, res) {
    const id = req.query.id

    if (req.method == "GET") {
        get(child(ref(db), `disciplinas/${id}`)).then(
            snapshot => {
                res.status(200).json(snapshot.val())
            }
        )

    } else if (req.method == "PUT") {
        const dados = req.body

        update(ref(db, `disciplinas/${id}`), dados)
    } else if (req.method == "DELETE") {

        remove(ref(db, "disciplinas/" + id))

        res.status(200).json(id)
    }


}

