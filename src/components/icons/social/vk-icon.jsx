import React from 'react'
import PropTypes from 'prop-types'
import { SVG, prepareFillColors } from './icon-wrapper'

const colorMap = {
  '#vk-icon': '#5b7aa8',
}

const VkSVG = SVG.extend`
  ${prepareFillColors(colorMap)};
`

const VkIcon = props => (
  <VkSVG {...props} viewBox="0 0 39 22">
    <defs>
      <polygon
        id="path-1"
        points="0.00947192551 0.0328258739 0.00947192551 21.7786576 38.4384211 21.7786576 38.4384211 0.0328258739 0.00947192551 0.0328258739"
      />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Mobile-Portrait" transform="translate(-20.000000, -2777.000000)">
        <g id="Social" transform="translate(20.000000, 2661.000000)">
          <g id="Logos" transform="translate(0.000000, 112.000000)">
            <g id="vk" transform="translate(0.000000, 4.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1" />
              </mask>
              <g id="Clip-2" />
              <path
                d="M33.0814892,13.8596205 C34.3567261,15.1043209 35.7022131,16.2750051 36.846106,17.6454854 C37.3512753,18.2538688 37.8297655,18.8821371 38.1953818,19.5885246 C38.7139697,20.5927123 38.2441622,21.6980605 37.3432242,21.7585043 L31.7438954,21.7555057 C30.2991111,21.8756042 29.1471671,21.2943653 28.1783469,20.3073797 C27.4032277,19.5176649 26.6847822,18.6774488 25.9398152,17.8612208 C25.6340299,17.5277541 25.3140367,17.2138567 24.9316866,16.9660845 C24.167618,16.469751 23.5041096,16.6214128 23.0668223,17.418545 C22.6222733,18.2292494 22.5210816,19.1267529 22.4773528,20.0305692 C22.4175218,21.3484965 22.0190695,21.6950619 20.6945786,21.7555057 C17.8634201,21.8891765 15.1773398,21.4607041 12.6816453,20.0335677 C10.4814749,18.7748217 8.77510753,16.9981213 7.29022534,14.9872209 C4.39860434,11.0702103 2.18422602,6.76654889 0.194174473,2.34278893 C-0.254005469,1.34586083 0.0740388844,0.810862212 1.17420303,0.791766391 C3.000706,0.756573266 4.82720897,0.759098334 6.65623779,0.789241324 C7.39867889,0.800288493 7.89011395,1.22576232 8.17695543,1.92725756 C9.16550873,4.35668786 10.3747579,6.66791345 11.8929497,8.81074862 C12.2969273,9.38094036 12.7094297,9.95128992 13.2965312,10.3532491 C13.9458317,10.7976609 14.4397926,10.6502601 14.7455779,9.92714397 C14.9392788,9.46852863 15.0243683,8.97472017 15.068097,8.48343678 C15.212386,6.79369336 15.2314877,5.10694846 14.9781137,3.42335989 C14.8221426,2.37230065 14.2301473,1.69242631 13.1811315,1.49326163 C12.6458099,1.39210112 12.7253741,1.19309426 12.9850627,0.887245495 C13.4346634,0.360768979 13.8582164,0.0328258739 14.7018492,0.0328258739 L21.0306741,0.0328258739 C22.0271207,0.229465484 22.2486058,0.677033649 22.3848437,1.67885407 L22.390369,8.7065896 C22.3793184,9.0949765 22.5840699,10.2459337 23.2832558,10.5030171 C23.842573,10.6854532 24.2113467,10.2378851 24.5468107,9.88342874 C26.0620031,8.27575 27.1435391,6.37563692 28.1098334,4.40860955 C28.538438,3.54298495 28.9072116,2.6448501 29.2643032,1.7471887 C29.5295171,1.08088659 29.9445453,0.753416932 30.6950376,0.767620435 L36.786275,0.77314402 C36.9663994,0.77314402 37.1495233,0.775669087 37.3241225,0.805812077 C38.3508792,0.980988616 38.6320375,1.42240193 38.3150438,2.42406453 C37.8155576,3.9960767 36.843738,5.30611313 35.8933881,6.62230442 C34.8778399,8.0271887 33.7912521,9.3840967 32.7842286,10.7976609 C31.8586636,12.0886015 31.9319132,12.7389641 33.0814892,13.8596205 Z"
                id="vk-icon"
                fill="#A1A1A1"
                mask="url(#mask-2)"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </VkSVG>
)

VkIcon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default VkIcon
