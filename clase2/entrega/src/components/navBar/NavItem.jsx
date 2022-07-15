import React from 'react'

function NavItem(props) {
  return (
    <div>
        <li class="nav-item item-action">
            <a class="nav-link text-dark fw-bold p-4 " aria-current="page" href="#">{props.title}</a>
        </li>
    </div>
  )
}

export default NavItem