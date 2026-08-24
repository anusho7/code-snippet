import React from 'react';
import './PrimaryButton.css';

/**
 * Reusable PrimaryButton component with signature orange styling
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} [props.icon]
 * @param {'left'|'right'} [props.iconPosition='right']
 * @param {'primary'|'secondary'|'outline'|'white'|'ghost'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {boolean} [props.fullWidth=false]
 * @param {boolean} [props.disabled=false]
 * @param {Function} [props.onClick]
 * @param {string} [props.className]
 * @param {'button'|'submit'|'reset'} [props.type='button']
 */
export const PrimaryButton = ({
  children,
  icon,
  iconPosition = 'right',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  const classes = [
    'primary-button',
    `primary-button--${variant}`,
    `primary-button--${size}`,
    fullWidth ? 'primary-button--full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <span className="primary-button__icon">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="primary-button__icon">{icon}</span>
      )}
    </button>
  );
};

export default PrimaryButton;
