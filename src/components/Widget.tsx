type WidgetProps = {
  img?: string;
  title: string;
  children: React.ReactNode;
};

export default function Widget({ img, title, children }: WidgetProps) {
  return (
    <>
      <div className="widget">
        {img && (
          <div className="img-container">
            <img alt="widget image" className="widget-img" src={img} />
          </div>
        )}
        <div className="widget-body">
          <h3 className="title">{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
}
