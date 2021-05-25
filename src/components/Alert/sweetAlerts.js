import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function sweetAlerts(icon, title, text) {
    MySwal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}
