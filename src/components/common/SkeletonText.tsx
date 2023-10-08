import { Flex, keyframes, useColorModeValue } from "@chakra-ui/react"

interface SkeletonTextProps {
    height: number
}

const SkeletonText = ({ height }: SkeletonTextProps) => {
    const bg = useColorModeValue("white", "blue.600")
    const skeletonKeyframe = keyframes`
         0% {
            background-color: hsl(200, 20%, 70%);
        }

        100% {
            background-color: hsl(200, 20%, 95%);
        }
    `

    const skeletonAnimation = `${skeletonKeyframe} 1s linear infinite alternate`

    return (
        <Flex
            bg={bg}
            borderRadius='1px'
            marginBottom='6px'
            animation={skeletonAnimation}
            h={`${height}px`}
            w='full' 
            _last={{ marginBottom: 0, width: '60%' }}/>
    )
}

export default SkeletonText