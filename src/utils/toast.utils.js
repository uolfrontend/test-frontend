import toast from 'react-hot-toast'

export const notify = (message, severity) => toast[severity](message)
