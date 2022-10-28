import Image from 'next/image';
import { Badge } from 'theme-ui'
import Link from 'next/link';

const ItemCard = (props) => {

    const { blog } = props;

    return (
         <>
              {blog?.fields ? (
                   <>
                        <Link href="/blog/[id]" as={`/blog/${blog?.sys?.id}`}>
                             <div className="item-card-container">
                                  <img
                                       src={`https:${blog?.fields?.thumbnailImage?.fields?.file?.url}`}
                                       className="item-card-image-inner"
                                       
                                  />
                                  <div className='item-card-tag-outer'>
                                                <Badge className='item-card-tag'>Fashion</Badge>
                                                <Badge className='item-card-tag'>Health</Badge>
                                                <Badge className='item-card-tag'>Business</Badge>
                                            </div>
                                  <div className="item-card-title">
                                       <span className="item-card-title-inner">
                                            {blog.fields?.title}
                                       </span>
                                  </div>
                                  <div className="item-card-owner">
                                       <span className="item-card-by">by&nbsp;</span>
                                       <span className="item-card-ownername">
                                            {blog.fields?.authour}
                                       </span>
                                  </div>
                             </div>
                        </Link>
                   </>
              ) : null}
         </>
    );
}

export default ItemCard;