import { Widget, App } from "../imports.js";

export default ({
  class_name,
  content,
  window = '',
  connections = [],
  ...rest
}) => {
  let open = false;

  const connection = [App, (self, win, visible) => {
    if (win !== window)
      return;

    if (open && !visible) {
      open = false;
      self.toggleClassName('active', false);
    }

    if (visible) {
      open = true;
      self.toggleClassName('active');
    }
  }];

  return Widget.Button({
    class_name: `panelButton ${class_name}`,
    child: Widget.Box({ children: [content] }),
    connections: connections.concat([connection]),
    ...rest,
  });
};
