# React Modal Component

This is a simple react component for a modal dialog.

## Installation


The package can be installed via [npm]:

```sh
npm i la-react-modal
```

###  Configuration

You can use the Dropdown with:

```js
import Modal from './Modal';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  );
};
```