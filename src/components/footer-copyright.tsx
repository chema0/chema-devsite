type IFooterCopyrightProps = {
  site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5 flex justify-between">
    <div className="text-sm text-gray-200">
      © Copyright {new Date().getFullYear()} by {props.site_name}. Built with ♥
      by{" "}
      <a
        className="text-cyan-400 hover:underline"
        href="https://creativedesignsguru.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        CreativeDesignsGuru
      </a>
      .
    </div>
    <div className="text-sm text-gray-200">
      Icons with ❤ from{" "}
      <a
        className="text-cyan-400 hover:underline"
        href="https://3dicons.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://3dicons.co/
      </a>
    </div>
  </div>
);

export { FooterCopyright };
