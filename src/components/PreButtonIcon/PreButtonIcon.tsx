import cls from './PreButtonIcon.module.scss';

const PreButtonIcon = ({ bgColor }: { bgColor: string }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={cls.preButtonIcon}>
    </div>
  )
};

export default PreButtonIcon;
