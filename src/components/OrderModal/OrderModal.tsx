import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProductPackage, CustomerInfo } from '../../types';
import OrderForm from '../OrderForm/OrderForm';
import './OrderModal.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  packages: ProductPackage[];
  onSubmit: (customerInfo: CustomerInfo, selectedPackage: string) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ 
  isOpen, 
  onClose, 
  packages, 
  onSubmit 
}) => {
  const [selectedPackage, setSelectedPackage] = React.useState<string>('CB1');

  const handleOrderSubmit = (customerInfo: CustomerInfo, selectedPackageId: string) => {
    onSubmit(customerInfo, selectedPackageId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <OrderForm
          packages={packages}
          selectedPackage={selectedPackage}
          onPackageSelect={setSelectedPackage}
          onSubmit={handleOrderSubmit}
          showHeader={true}
          showCountdown={true}
        />
      </div>
    </div>
  );
};

export default OrderModal;
