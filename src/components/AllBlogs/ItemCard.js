import Image from 'next/image';
import { Badge } from 'theme-ui'
import Link from 'next/link';
import { useRouter } from 'next/router';

const ItemCard = (props) => {

    const { blog } = props;
    const router = useRouter();

    console.log("blog?.sys?.id", blog?.sys?.id)

    return (
         <>
              {blog?.fields ? (
                   <>
                        {/* <Link href="/blogs/[id]" as={`/blogs/${blog?.sys?.id}`}> */}
                         
                             <div className="item-card-container" onClick={()=>{
                              // alert('asd', blog?.sys?.id, 'wer')
                              blog ? router.push(`/blogs/${blog?.sys?.id}`) : ''
                             }}>
                                  <img
                                       src={`https:${blog?.fields?.thumbnailImage?.fields?.file?.url}`}
                                       className="item-card-image-inner"
                                       
                                  />
                                  <div className='item-card-tag-outer'>
                                   {blog?.fields?.tags?.items?.map((tag)=>( <Badge className='item-card-tag'>{tag}</Badge>))}
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
                        {/* </Link> */}
                   </>
              ) : null}
         </>
    );
}

export default ItemCard;