let quartosDisponiveis = 5;
let reservaComfirmada = true;

let statusReserva = (reservaComfirmada && quartosDisponiveis > 0 ) ? "reserva comfirmada"
                : (quartosDisponiveis > 0 ) ? "aguardando comfirmação"
                : "sem quartos disponiveis"

console.log(statusReserva); //saida: "reserva comfirmada"                