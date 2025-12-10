/**
 * A reusable UI wrapper component for displaying widgets.
 *
 * @remarks
 * This component provides a structure that includes
 * an optional image, a widget title and custom widget content.
 *
 * @param img - Optional image URL to display at the top of the widget.
 * @param title - The title of the widget body.
 * @param children - The specific widget content to be rendered inside the widget.
 */

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
            <img alt="Widget Image" className="widget-img" src={img} />
          </div>
        )}
        <div className="widget-body">
          <h3 className="title">
            <a href="" className="title-link">
              {title}
            </a>
          </h3>
          {children}
        </div>
      </div>
    </>
  );
}
