import React, { useState } from "react";
import Link from "next/link";
import { Image } from "theme-ui";

import SinlgeFaqItem from "./singleItem";
import useWindowSize from "Hooks/windowSize";
import { titleCase } from "../../utils/titleCase";
import UpAccIcon from "../../assets/Icons/chevronUp.svg";
import DownAccIcon from "../../assets/Icons/chevronDown.svg";

const NotificationsFaqs = ({ marginTop, items }) => {
  const [width] = useWindowSize();
  const mTop = marginTop ? { marginTop: marginTop } : {};
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);

  return (
    <div style={mTop} className="help-center-faq-single-card">
      <div className="help-center-faq-single-card-heading">
        <h1>{items[0]?.fields?.title}</h1>
        {isAccordianOpen ? (
          <Image
            src={DownAccIcon}
            onClick={() => setIsAccordianOpen(!isAccordianOpen)}
          />
        ) : (
          <Image
            src={UpAccIcon}
            onClick={() => setIsAccordianOpen(!isAccordianOpen)}
          />
        )}
      </div>
      {items
        ? items.map((value) => (
            <Link
              href="/helpCenter/[category]"
              as={`/helpCenter/${value?.fields?.category}?id=${value?.sys?.id}`}
            >
              <a style={{display: width > 600 ? 'unset' : isAccordianOpen ? 'unset' : 'none'}}>
                <SinlgeFaqItem text={titleCase(value?.fields?.question)} />
              </a>
            </Link>
          ))
        : null}
    </div>
  );
};

export default NotificationsFaqs;
