import { TicketSchema } from "../interfaces";

export class Main{
    render():string{
        return `
        <div class="mt-5">
              
                <table class="table-bordered">
                    <thead>
                        <th class="p-2">Name</th>
                        <th class="p-2">Remaining</th>
                    </thead>
                    <tbody>
                        ${this.ticketInfo.map(ticket=>`
                        <tr class="p-2">
                            <td>${ticket.concertName}</td>
                            <td>${ticket.quantity}</td>
                            
                        </tr>
                        
                        
                        `).join("")}
                    </tbody>

                </table>
            </div>
        
        
        `

    }
    constructor( private ticketInfo: TicketSchema[]){

    }
}