import { ToastContainer as Container } from 'react-toastify'
import styled from 'styled-components'

const ToastContainer = styled(Container).attrs({})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background: #ff6978;
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
    background: #6b90ff;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`

export { ToastContainer }
