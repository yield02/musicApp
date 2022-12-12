import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

function MenuItem({ children, leftIcon, subtitle, rightIcon, data = [], className, placement, ...props }) {
    console.log(subtitle);
    return (
        <>
            {data.length > 0 ? (
                <Menu data={data} offset={[0, 0]} placement={placement}>
                    <Button
                        leftIcon={leftIcon}
                        subtitle={subtitle}
                        rightIcon={<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>}
                        className={className}
                        {...props}
                    >
                        {children}
                    </Button>
                </Menu>
            ) : (
                <Button leftIcon={leftIcon} subtitle={subtitle} rightIcon={rightIcon} className={className} {...props}>
                    {children}
                </Button>
            )}
        </>
    );
}

export default MenuItem;
